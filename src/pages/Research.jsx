import { useEffect } from "react";
import ResearchCard from "../components/ResearchCard";
import "./Research.css";
import lablogo from "../assets/lab-logo1.png";
import image1 from "../assets/research-image.png";
import image2 from "../assets/research-image-2.png";
import video1 from "../assets/videoAI.mp4";
import video2 from "../assets/videoAI.gif";
import video3 from "../assets/map.gif";
import video4 from "../assets/perception.gif";
import image3 from "../assets/HMI.png";
// Example research data - replace with your actual data
// You can provide 'image', 'video', or 'gif' (priority: video > gif > image)
const researchData = [
  {
    id: 1,
    title: "Perception and State Estimation for Intelligent Autonomy",
    briefDescription:
      "This research direction centers on intelligent situational awareness and environmental state estimation for intelligent machines and robotic systems operating in structured and unstructured real-world environments. We aim to enable machines to perceive, interpret, and reason about complex surroundings with high reliability, supporting robust decision-making and adaptive autonomy.\n\n",
    detailedDescription:
      "We focus on developing AI-based perception models that integrate digital vision, pattern recognition, and multi-class classification to infer meaningful environmental states. These states include surface conditions, semantic scene elements, and contextual distinctions between traversable and non-traversable regions, as well as dynamic and static objects. Our research projects emphasize multi-dimensional state representations that capture spatial structure, uncertainty, and environmental variability. \n\nA key aspect of our research is advancing perception from low-level sensing to semantic and task-aware environmental understanding, allowing robots to adjust behavior based on real-time situational context. The proposed systems are designed to generalize across domains, enabling applications in industrial automation, autonomous agents, robotics, and human-centered robotic systems. \n\nOur research bridges AI-enhanced perception, environmental intelligence, and autonomous decision-making, contributing to the development of intelligent machines capable of operating safely, efficiently, and adaptively in diverse and evolving environments.",
    image: image2, // Replace with actual image path
    imageAlt: "3D Object Detection",
    gif: video4, // Uncomment and add video path to show video instead
  },
  {
    id: 2,
    title: "3D-Mapping (volumetric mapping)",
    briefDescription:
      "One of the main research directions of our lab is the development of advanced volumetric mapping (3D maps) approaches for autonomous systems and intelligent machines operating in complex and unstructured environments. This research aims to enable robots and automated machines to accurately estimate their own position as well as the positions of surrounding objects, while constructing rich three-dimensional representations of their environments without relying on external localization infrastructure such as GPS. By leveraging geometric, visual, and inertial information, our research focuses on building robust and scalable 3D maps that support long-term autonomy and reliable operation in real-world settings.",
    detailedDescription:
      "Our research explores sensor fusion techniques that integrate data from LiDAR, RGB-D cameras, stereo vision, inertial measurement units, and other sensors to improve localization accuracy and mapping consistency.",
    image: image1, // Replace with actual image path
    imageAlt: "",
    gif: video3, // Uncomment and add video path to show video instead
  },
  {
    id: 3,
    title: "Human–Machine Interaction for Intelligent Automation",
    briefDescription:
      "Our lab explores Human–Machine and Human–Robot Interaction (HMI/HRI) to enable intuitive, safe, and effective collaboration between people and intelligent machines and robotic systems. We study how humans interact with, supervise, and share control with AI-enhanced autonomous robots, combining real-time perception, communication, and multimodal feedback (e.g., visual, haptic, and control interfaces). Through user studies and performance evaluations, we design interaction frameworks that improve usability, trust, and efficiency in industrial and real-world robotic applications. This research prepares students to work on human-centered robotics while supporting industry needs in manufacturing, automation, and intelligent systems, where reliable human–machine collaboration is essential.",
    detailedDescription: "",
    image: image3, // Replace with actual image path
    imageAlt: "",
  },
  {
    id: 4,
    title: "Localization, State Estimation, and Automatic Control",
    briefDescription:
      "This research direction focuses on AI-enhanced localization, state estimation, and motion adaptive control for autonomous systems operating in dynamic and uncertain environments. We develop learning-based sensor fusion and odometry frameworks that combine machine learning models with classical robotic estimation and control, enabling automated machines and robots to maintain accurate localization despite sensor noise, uncertainty, and changing environmental conditions. Our work integrates deep learning, probabilistic modeling, and adaptive control with classical state estimation methods such as Kalman filtering and kinematic modeling. The resulting approaches improve reliability and robustness in the real-world, with applications in mobile robotics, industrial automation, and intelligent autonomous systems. This research prepares students for careers in advanced robotics and supports industry needs where precise localization and dependable autonomy are critical.",
    detailedDescription: "",
    image: image2, // Replace with actual image path
    imageAlt: "",
  },
];

export default function Research() {
  useEffect(() => {
    // Scroll to top when component mounts
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div className="research-page page-transition">
      <h1 className="research-page-title">Research Projects</h1>
      <div className="research-list">
        {researchData.map((research) => (
          <ResearchCard
            key={research.id}
            title={research.title}
            briefDescription={research.briefDescription}
            detailedDescription={research.detailedDescription}
            image={research.image}
            imageAlt={research.imageAlt}
            video={research.video}
            gif={research.gif}
          />
        ))}
      </div>
    </div>
  );
}
