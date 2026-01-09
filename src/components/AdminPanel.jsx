import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_NAVBAR_ITEMS,
  getNavbarConfig,
  updateNavbarConfig,
} from "../utils/api";
import "./AdminPanel.css";

const EMPTY_STATUS = { type: null, text: "" };

const cloneItems = (items = []) =>
  items.map((item) => ({
    id: item.id,
    label: item.label,
    path: item.path,
    visible: Boolean(item.visible),
  }));

export default function AdminPanel() {
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState(EMPTY_STATUS);

  useEffect(() => {
    refreshConfig();
  }, []);

  const refreshConfig = async () => {
    setLoading(true);
    setStatus(EMPTY_STATUS);
    try {
      const config = await getNavbarConfig();
      const normalized =
        config?.items?.length > 0
          ? cloneItems(config.items)
          : cloneItems(DEFAULT_NAVBAR_ITEMS);

      setItems(normalized);
      setSavedItems(cloneItems(normalized));
    } catch (error) {
      console.error("Failed to load navbar config:", error);
      setStatus({
        type: "error",
        text: "Unable to load navbar settings. Showing defaults.",
      });
      const fallback = cloneItems(DEFAULT_NAVBAR_ITEMS);
      setItems(fallback);
      setSavedItems(cloneItems(fallback));
    } finally {
      setLoading(false);
    }
  };

  const toggleItem = (itemId) => {
    setStatus(EMPTY_STATUS);
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const hasChanges = JSON.stringify(items) !== JSON.stringify(savedItems);

  const summary = useMemo(() => {
    const total = items.length;
    const visible = items.filter((item) => item.visible).length;
    return { total, visible, hidden: total - visible };
  }, [items]);

  const handleSave = async () => {
    setSaving(true);
    setStatus(EMPTY_STATUS);
    try {
      const result = await updateNavbarConfig({ items });
      setSavedItems(cloneItems(items));
      const message =
        result?.message ||
        (result?.persisted === false
          ? "Saved locally. Start the admin API server to sync."
          : "Navbar configuration saved.");
      setStatus({
        type: "success",
        text: message,
      });
    } catch (error) {
      console.error("Failed to save navbar config:", error);
      setStatus({
        type: "error",
        text:
          error.message ||
          "Unable to save changes. Make sure the admin server is running.",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    setItems(cloneItems(savedItems));
    setStatus(EMPTY_STATUS);
  };

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="loading">Loading configuration...</div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="admin-panel">
        <div className="error">
          No navbar items found. Try reloading the configuration.
        </div>
        <button onClick={refreshConfig}>Reload</button>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Navbar Configuration</h2>
        <p>
          Toggle navbar links on or off, then save when you are ready. No extra
          steps or syncs required.
        </p>
        <div className="config-summary">
          <small>
            Showing {summary.total} total items • {summary.visible} visible •{" "}
            {summary.hidden} hidden
          </small>
        </div>
      </div>

      {status.type && (
        <div
          className={`message ${status.type === "error" ? "error" : "success"}`}
        >
          {status.text}
        </div>
      )}

      <div className="config-items">
        {items.map((item) => (
          <div key={item.id} className="config-item">
            <label className="config-label">
              <input
                type="checkbox"
                checked={item.visible}
                onChange={() => toggleItem(item.id)}
                className="config-checkbox"
              />
              <span className="config-text">
                <strong>{item.label}</strong>
                <small>({item.path})</small>
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="admin-actions">
        <div className="unsaved-indicator-wrapper">
          {hasChanges ? (
            <span className="unsaved-indicator">Unsaved changes</span>
          ) : (
            <span className="saved-indicator">All changes saved</span>
          )}
        </div>
        <div className="admin-buttons">
          <button
            type="button"
            onClick={handleReset}
            disabled={!hasChanges || saving}
            className="secondary-button"
          >
            Discard changes
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !hasChanges}
            className="save-button"
          >
            {saving ? "Saving..." : "Save configuration"}
          </button>
        </div>
      </div>

      <div className="preview-section">
        <h3>Preview</h3>
        <div className="navbar-preview">
          <div className="navbar-left">OMAR AL-BURAIKI</div>
          <div className="navbar-right">
            {items
              .filter((item) => item.visible)
              .map((item) => (
                <span key={item.id} className="preview-link">
                  {item.label}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
