import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <div>OMAR AL-BURAIKI</div> */}
      <div className="navbar-right">
        <Link to="/">MVI Lab</Link>
        <Link to="/research">Research</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/positions">Positions Available</Link>
        <Link to="/members">Members</Link>
        <Link to="/contact">Contact Us</Link>
        {/* <Link to="#">Prospective Students</Link> */}
        {/* <Link to="#">Software and Datasets</Link> */}
      </div>
    </nav>
  );
}
