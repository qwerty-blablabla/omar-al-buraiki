import "./Home.css";
// import heroImage from "../src/assets/lab.png";
import homeImage from "../src/assets/hero-lab.png";
import labLogo from "../src/assets/lab-logo1.png";
import heroImage2 from "../src/assets/lab-g.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mvi from "../src/assets/mvi-lab.png";
// import mviLab from "../src/assets/mvi-lab-1.png";
import mviLab from "../src/assets/mvi-lab-new.png";

export default function Home() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleLearnMore = () => {
    setIsClicked(true);
    // Small delay to allow click animation
    setTimeout(() => {
      navigate("/research");
    }, 200);
  };

  return (
    <div className="home-container page-transition">
      {/* Full-screen image div */}
      <div className="home-hero-image">
        <img src={heroImage2} alt="Lab Hero Image" />
      </div>

      {/* Lab logo div */}
      <div className="home-logo">
        <img src={mviLab} alt="Lab Logo" />
        <h1 className="lab-name">Machine Vision and Intelligence Lab</h1>
      </div>

      {/* Lab description div */}
      <div className="home-description">
        <p>
          The Machine Vision and Intelligence (MVI) Lab focuses on advancing
          research in AI/ML-enhanced computational vision, machine intelligence,
          and robotics. Our lab brings together researchers working on visual
          perception, 3D-SLAM, and automatic control to enable robust
          situational awareness in autonomous systems, while also integrating
          human–machine interaction, user experience (UX), and haptics to design
          effective intelligent technologies.
        </p>
      </div>
      {/* add a learn more button that leads to the research page. make it a button with a blue background and white text and border */}
      <div className="learn-more-button-container">
        <button
          className={`learn-more-button ${isClicked ? "clicked" : ""}`}
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
