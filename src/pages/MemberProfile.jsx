import { useLocation } from "react-router-dom";
import membersData from "../data/membersData";
import "./MemberProfile.css";
import linkedinIcon from "../assets/linkedin.png";
import googleIcon from "../assets/google.png";

export default function MemberProfile() {
  const location = useLocation();
  const pathname = location.pathname;

  const member = membersData.find((m) => m.to === pathname);

  if (!member) {
    return <p className="page-transition">Member not found.</p>;
  }

  return (
    <div className="member-profile page-transition">
      <section className="profile-section">
        <div className="profile-left">
          <h1>{member.name || "Name not available"}</h1>
          <p>
            {member.title && (
              <>
                {member.title} <br />
              </>
            )}
            {member.position && (
              <>
                {member.position} <br />
              </>
            )}
            {member.university && (
              <>
                {member.university} <br />
              </>
            )}
            {member.address && (
              <>
                {member.address} <br />
              </>
            )}
            {member.email && member.email}
          </p>
          {member.links && (member.links.linkedin || member.links.google) && (
            <div className="profile-icons">
              {member.links.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              )}
              {member.links.google && (
                <a
                  href={member.links.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                >
                  <img src={googleIcon} alt="Google" />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="profile-right">
          {member.photo && (
            <img src={member.photo} alt={member.name || "Member"} />
          )}
        </div>
      </section>

      {member.bio && (
        <section className="bio-section">
          <h2>Biography</h2>
          {Array.isArray(member.bio) ? (
            member.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{member.bio}</p>
          )}
        </section>
      )}

      {member.researchInterests && (
        <section className="bio-section">
          <h2>Research Profile</h2>
          {Array.isArray(member.researchInterests) ? (
            member.researchInterests.map((interest, index) => (
              <p key={index}>{interest}</p>
            ))
          ) : (
            <p>{member.researchInterests}</p>
          )}
        </section>
      )}

      {/* {member.other && (
        <section className="bio-section">
          <h2>Other</h2>
          <p>{member.other}</p>
        </section>
      )} */}
    </div>
  );
}
