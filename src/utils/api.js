const API_BASE = "/api";
const LOCAL_STORAGE_KEY = "omar-website-navbar-config";

export const DEFAULT_NAVBAR_ITEMS = [
  { id: "home", label: "Home", path: "/omar-al-buraiki", visible: true },
  {
    id: "publications",
    label: "Publications",
    path: "/publications",
    visible: true,
  },
  { id: "research", label: "Research Projects", path: "/research", visible: true },
  { id: "members", label: "Members", path: "/members", visible: true },
  {
    id: "students",
    label: "Prospective Students",
    path: "#",
    visible: false,
  },
  {
    id: "software",
    label: "Software and Datasets",
    path: "#",
    visible: false,
  },
  { id: "youtube", label: "YouTube", path: "#", visible: false },
];

const cloneDefaults = () => DEFAULT_NAVBAR_ITEMS.map((item) => ({ ...item }));

const normalizePath = (pathValue) => {
  if (typeof pathValue !== "string") {
    return "";
  }

  return pathValue.trim();
};

const sanitizeItems = (items = []) =>
  items
    .filter(Boolean)
    .map((item, index) => ({
      id:
        typeof item?.id === "string" && item.id.trim().length > 0
          ? item.id.trim()
          : `item-${index}`,
      label:
        typeof item?.label === "string" && item.label.trim().length > 0
          ? item.label.trim()
          : `Item ${index + 1}`,
      path: normalizePath(item?.path) || "#",
      visible:
        typeof item?.visible === "boolean"
          ? item.visible
          : Boolean(item?.visible),
    }));

const mergeWithDefaults = (items = []) => {
  const normalized = sanitizeItems(items);
  const defaultMap = new Map(
    DEFAULT_NAVBAR_ITEMS.map((item) => [item.id, { ...item }])
  );
  const normalizedMap = new Map(
    normalized.map((item) => [item.id, { ...item }])
  );

  const mergedDefaults = DEFAULT_NAVBAR_ITEMS.map((defaultItem) => {
    const override = normalizedMap.get(defaultItem.id);
    if (!override) {
      return { ...defaultItem };
    }

    const overridePath = normalizePath(override.path);
    return {
      ...defaultItem,
      ...override,
      path:
        overridePath && overridePath !== "#"
          ? overridePath
          : defaultItem.path,
      visible:
        typeof override.visible === "boolean"
          ? override.visible
          : defaultItem.visible,
    };
  });

  const extraItems = normalized.filter((item) => !defaultMap.has(item.id));
  return [...mergedDefaults, ...extraItems];
};

const sanitizeConfig = (config) => {
  if (!config || !Array.isArray(config.items)) {
    return { items: cloneDefaults() };
  }

  return { items: mergeWithDefaults(config.items) };
};

const hasLocalStorage = () =>
  typeof window !== "undefined" &&
  typeof window.localStorage !== "undefined";

const readLocalConfig = () => {
  if (!hasLocalStorage()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? sanitizeConfig(JSON.parse(raw)) : null;
  } catch (error) {
    console.warn("Failed to read cached navbar config:", error);
    return null;
  }
};

const writeLocalConfig = (config) => {
  const sanitized = sanitizeConfig(config);

  if (!hasLocalStorage()) {
    return sanitized;
  }

  try {
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(sanitized)
    );
  } catch (error) {
    console.warn("Failed to write cached navbar config:", error);
  }

  return sanitized;
};

const isNetworkError = (error) => {
  if (!error) {
    return false;
  }

  return (
    error.name === "TypeError" ||
    error.message?.includes("Failed to fetch") ||
    error.message?.includes("NetworkError")
  );
};

const fallbackMessage =
  "Saved locally. Start the admin API server to sync these changes.";

export const getNavbarConfig = async () => {
  const cached = readLocalConfig();

  try {
    const response = await fetch(`${API_BASE}/navbar-config`, {
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status >= 500) {
        throw new Error(text || "Admin API server unavailable.");
      }
      throw new Error(text || "Failed to load navbar configuration.");
    }

    const payload = await response.json();
    const sanitized = sanitizeConfig(payload);
    writeLocalConfig(sanitized);
    return sanitized;
  } catch (error) {
    console.warn(
      "getNavbarConfig failed, using cached/default navbar config:",
      error
    );

    if (cached) {
      return cached;
    }

    return { items: cloneDefaults() };
  }
};

export const updateNavbarConfig = async ({ items } = {}) => {
  const payload = sanitizeConfig({ items });

  try {
    const response = await fetch(`${API_BASE}/navbar-config`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();

      if (response.status >= 500) {
        writeLocalConfig(payload);
        return {
          success: true,
          persisted: false,
          message: text?.trim() || fallbackMessage,
        };
      }

      throw new Error(text || "Failed to save navbar configuration.");
    }

    await response.json().catch(() => null);
    writeLocalConfig(payload);
    return { success: true, persisted: true };
  } catch (error) {
    if (isNetworkError(error)) {
      writeLocalConfig(payload);
      return {
        success: true,
        persisted: false,
        message: fallbackMessage,
      };
    }

    console.error("Unable to update navbar config:", error);
    throw new Error(
      error.message || "Unable to save navbar configuration right now."
    );
  }
};
