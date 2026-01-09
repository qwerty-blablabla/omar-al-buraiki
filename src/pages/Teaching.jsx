import "./Teaching.css";

export default function Teaching() {
  const algomaCourses = [
    {
      code: "COSC 4427",
      title: "Computer Vision, Winter 2026",
      // details: "",
    },
    {
      code: "COSC 3406",
      title: "Computer Organization, Winter 2026",
      // details: "",
    },
    {
      code: "COSC 3106",
      title: "Theory of Computing, Winter 2026",
      // details: "",
    },
    {
      code: "COSC 3106",
      title: "Theory of Computing, Fall 2025",
      // details: "",
    },
  ];
  const waterlooCourses = [
    {
      code: "MTE 360",
      title: "Automatic Control, Winter 2025",
      // details: "",
    },
    {
      code: "BME 393",
      title: "Digital Systems, Winter 2025",
      // details: "Taught in W-2025",
    },
    {
      code: "MTE 120",
      title: "Circuits, Spring 2025",
      // details: "Taught in W-2025",
    },
    {
      code: "ME 123",
      title:
        "Electrical Engineering for Mechanical Engineers, Winter 2024, Spring 2024",
      // details: "Taught in W-2024, S-2024.",
    },
    {
      code: "MTE 262",
      title: "Microprocessor and PLC, Winter 2023",
      // details: "Taught in 2023.",
    },
    {
      code: "SYDE 192",
      title: "Digital Design, Spring 2022",
      // details: "Taught in 2022.",
    },
    {
      code: "ME 360",
      title: "Introduction to Control Systems, Fall 2021",
      // details: "Taught in 2021.",
    },
  ];
  const humberCourses = [
    {
      code: "TECH 103",
      title: "Digital Fundamentals, Winter 2023",
      // details: "Taught in 2021.",
    },
    {
      code: "TECH 105",
      title: "Machine Vision & Self-Driving, Winter 2023",
      // details: "Taught in 2021.",
    },
    {
      code: "TECH 105",
      title: "Machine Vision & Self-Driving, Fall 2022",
      // details: "Taught in 2021.",
    },
  ];
  const developedCourses = ["Autonomous Vehicles Navigation and Control"];

  return (
    <div className="teaching-page page-transition">
      {/* <h1 className="teaching-title">Teaching</h1> */}

      <section className="teaching-section">
        <h2 className="section-heading">Teaching</h2>
        <p className="university-name">Algoma University</p>
        <ul className="courses-list">
          {algomaCourses.map((course, index) => (
            <li key={index} className="course-item">
              <span className="course-code">{course.code}: </span>
              <span className="course-title">{course.title}</span>
            </li>
          ))}
        </ul>
        <p className="university-name">University of Waterloo</p>
        <ul className="courses-list">
          {waterlooCourses.map((course, index) => (
            <li key={index} className="course-item">
              <span className="course-code">{course.code}: </span>
              <span className="course-title">{course.title}</span>
            </li>
          ))}
        </ul>
        <p className="university-name">Humber College</p>
        <ul className="courses-list">
          {humberCourses.map((course, index) => (
            <li key={index} className="course-item">
              <span className="course-code">{course.code}: </span>
              <span className="course-title">{course.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="teaching-section">
        <h2 className="section-heading">Developed Courses:</h2>
        <ul className="developed-courses-list">
          {developedCourses.map((course, index) => (
            <li key={index} className="developed-course-item">
              - {course}
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}
