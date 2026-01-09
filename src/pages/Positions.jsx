import "./Positions.css";

export default function Positions() {
  return (
    <div className="positions-page page-transition">
      <div className="positions-header">
        <h1>Available Positions</h1>
      </div>

      <div className="positions-content">
        {/* <p>
          There are Graduate Students positions with funding available at the
          present time.
        </p> */}

        <p>
          Motivated candidates who have secured their own financial support
          (scholarships) and want to pursue graduate studies on a subject
          related to Computer and Machine Vision, Robotics or Computational
          Intelligence are encouraged to contact{" "}
          <a href="mailto:omar.alburaiki@algomau.ca">Dr. Omar Al-Buraiki</a>{" "}
          directly.
        </p>

        <p>
          Internships are also possible for undergraduate and graduate students
          interested to work on projects related to Machine Vision, Robotics or
          Computational Intelligence. Opportunities vary over time and will
          depend on your background. The minimum duration of an internship is
          expected to be one full semester (4 months) for undergraduate students
          or M.Eng. students who want to conduct an ELG5900 project; and 5 to 6
          months for international graduate students who want to get involved in
          research. Please contact{" "}
          <a href="mailto:omar.alburaiki@algomau.ca">Dr. Al-Buraiki</a> directly
          and make sure to include a CV and a statement of interest with your
          message.
        </p>

        <p>
          Unfortunately, given the heavy volume of requests received, only
          candidates who appear to be particularly suitable for on-going
          projects at any given time will be contacted.
        </p>
      </div>
    </div>
  );
}
