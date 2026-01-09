// src/components/MemberCard.jsx
import { Link } from "react-router-dom";
import "../pages/Members.css"; // we wanna import members.css from the pages folder
import linkedinIcon from "../assets/linkedin.png";
import googleIcon from "../assets/google.png";

export default function MemberCard({
  to,
  photo,
  name,
  role,
  briefDescription,
  links,
  other,
}) {
  return (
    <Link to={to} className="member-card">
      <img src={photo} alt={name} className="member-photo" />

      <div className="member-info">
        <h3>{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{briefDescription}</p>

        <div className="member-icons">
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          )}
          {links.google && (
            <a
              href={links.google}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Google"
            >
              <img src={googleIcon} alt="Google" />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
