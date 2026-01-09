import { useState } from "react";
import AdminPanel from "../components/AdminPanel";
import "./Admin.css";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Email and password authentication
    if (email === "alburaiki.omer@gmail.com" && password === "wolf2002") {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect email or password. Please try again.");
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
    setError("");
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login page-transition">
        <div className="login-container">
          <div className="login-header">
            <h2>Admin Access</h2>
            <p>Enter the admin password to manage navbar settings</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                className="email-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="password-input"
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-hint">
            <small>Enter your admin email and password</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page page-transition">
      <div className="admin-header">
        <h1>Website Administration</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <AdminPanel />
    </div>
  );
}
