import membersData from "../data/membersData";
import MemberCard from "../components/MemberCard";
import "./Members.css";

export default function Members() {
  return (
    <div className="members-container page-transition">
      <h1>Members</h1>

      <div className="members-grid">
        {membersData.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
