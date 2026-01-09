import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Publications from "./Publications.jsx";
import Members from "./pages/Members.jsx";
import MemberProfile from "./pages/MemberProfile.jsx";
import Admin from "./pages/Admin.jsx";
import Research from "./pages/Research.jsx";
import Teaching from "./pages/Teaching.jsx";
import Positions from "./pages/Positions.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

// Component to handle trailing slash redirect
function TrailingSlashRedirect() {
  useEffect(() => {
    const pathname = window.location.pathname;
    // Check if pathname is exactly "/omar-al-buraiki" (without trailing slash)
    if (pathname === "/omar-al-buraiki") {
      // Redirect to the same path with trailing slash
      window.location.replace("/omar-al-buraiki/");
    }
  }, []);

  return null;
}

function App() {
  return (
    <Router basename="/omar-al-buraiki">
      <TrailingSlashRedirect />
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="" element={<Home />} /> */}
          <Route path="/mvi" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/members" element={<Members />} />
          {/* <Route path="/positions" element={<Positions />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/omar-al-buraiki" element={<MemberProfile />} />
          <Route path="/mohammad" element={<MemberProfile />} />
          <Route path="/john" element={<MemberProfile />} />
          <Route path="/alex" element={<MemberProfile />} />
          <Route path="/tom" element={<MemberProfile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <footer className="site-footer">
        ©2026 Machine Vision and Intelligence Lab
      </footer>
    </Router>
  );
}

export default App;
