import "./Publications.css";

export default function Publications() {
  const linkIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );

  return (
    <div className="publications page-transition">
      <h1>Publications</h1>

      <div className="pub-item">
        <h3 className="pub-title">
          1. "Visual-Inertial-Wheel Odometry with Slip Compensation and Dynamic
          Feature Elimination."
        </h3>
        <p className="pub-contributors">
          Reginald, Niraj, Omar Al-Buraiki, Thanacha Choopojcharoen, Baris
          Fidan, and Ehsan Hashemi
        </p>
        <p className="pub-details">
          Sensors (Basel, Switzerland) 25, no. 5 (2025): 1537.
        </p>
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11902339/"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          2. "Augmented Visual Inertial Wheel Odometry Through Slip
          Compensation"
        </h3>
        <p className="pub-contributors">
          Niraj Reginald, Omar Al-Buraiki, and Baris Fidan, Ehsan Hashemi
        </p>
        <p className="pub-details">
          Measurements and Instrumentation for Machine Vision, CRC Press, Feb.
          2024.
        </p>
        <a
          href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003343783-7/augmented-visual-inertial-wheel-odometry-slip-compensation-niraj-reginald-omar-al-buraiki-baris-fidan-ehsan-hashemi"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          3. "Task Allocation for Multi-Agent Specialized Systems Using
          Probabilistic Estimate of Robots Competencies"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Pierre Payeur</p>
        <p className="pub-details">IEEE Access, Dec. 2023.</p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/10341233"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>4. "Adaptive Hessian Estimation Based Extremum Seeking Control"</h3>
        <p className="pub-contributors">
          Baris Fidan, Huseyin Demircioglu, and Omar Al-Buraiki
        </p>
        <p className="pub-details">
          In the proceedings of the 2023 European Control Conference (ECC), June
          13-16, 2023.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/10178252"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          5. "Confidence Estimator Design for Dynamic Feature Point Removal in
          Robot Visual-Inertial Odometry"
        </h3>
        <p className="pub-contributors">
          Niraj Reginald, Omar Al-Buraiki, and Baris Fidan, Ehsan Hashemi
        </p>
        <p className="pub-details">
          In 48th Annual Conference of the IEEE Industrial Electronics Society,
          Brussels, Belgium, Oct. 17-20, 2022.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/9968660"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          6. "Publish and Subscribe-Based Formation and Containment Control of
          Heterogeneous Robotic System with Actuator Time Delay"
        </h3>
        <p className="pub-contributors">
          Elkhider, Siddig M., Omar Al-Buraiki, and Sami El-Ferik
        </p>
        <p className="pub-details">
          2021. Applied Sciences 11, no. 19: 9145.{" "}
          <a
            href="https://doi.org/10.3390/app11199145"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0a244d", textDecoration: "underline" }}
          >
            https://doi.org/10.3390/app11199145
          </a>
          .
        </p>
        <a
          href="https://www.mdpi.com/1296396"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          7. "Task Allocation in Multi-Robot Systems Based on the Suitability
          Level of the Individual Agents"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Pierre Payeur</p>
        <p className="pub-details">
          IEEE 17th International Conference on Automation Science and
          Engineering, Lyon, France, 2021.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/9551466"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          8. "Specialized Agents Allocation in Autonomous Multi-Agent Unmanned
          Systems"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Pierre Payeur</p>
        <p className="pub-details">Canada Unmanned Systems, Nov. 6th, 2020.</p>
        <a
          href="https://ruor.uottawa.ca/server/api/core/bitstreams/82335bf7-3a6f-45ad-96b9-3b014e83edfe/content"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          9. "Probabilistic Allocation of Specialized Robots on Targets Detected
          Using Deep Learning Network"
        </h3>
        <p className="pub-contributors">
          Omar Al-Buraiki, Wenbo. Wu, Pierre. Payeur
        </p>
        <p className="pub-details">Robotics, 9, 54, Jul. 2020.</p>
        <a
          href="https://www.mdpi.com/771306"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          10. "Specialized Agents Task Allocation in Autonomous Multi-Robot
          Systems"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki</p>
        <p className="pub-details">
          Doctoral Dissertation, University of Ottawa, nominated for University
          of Ottawa best thesis prize, 2020. (Nominated for best thesis prize)
        </p>
        <a
          href="https://ruor.uottawa.ca/server/api/core/bitstreams/82335bf7-3a6f-45ad-96b9-3b014e83edfe/content"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          11. "Vision-Based Target Objects Recognition and Segmentation for
          Unmanned Systems Task Allocation"
        </h3>
        <p className="pub-contributors">
          Wu, Wenbo, Pierre Payeur, Omar Al-Buraiki, and Matt Ross
        </p>
        <p className="pub-details">
          International Conference on Image Analysis and Recognition, Waterloo,
          Canada, August 2019.
        </p>
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-030-27202-9_23"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          12. "Probabilistic Task Assignment for Specialized Multi-Agent Robotic
          Systems"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Pierre Payeur</p>
        <p className="pub-details">
          IEEE International Symposium on Robotic and Sensors Environments, pp.
          43-49, Ottawa, Canada, June 2019.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/8790420"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          13. "Task-Agent Assignation Based on Target Characteristics for a
          Swarm of Specialized Agents"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, Pierre Payeur</p>
        <p className="pub-details">
          Annual IEEE International Systems Conference, pp. 268-275, Orlando,
          USA, April 2019.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/8836904"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          14. "Automatic Task Selection from Targets Recognition for Swarm
          Mobile Robots with Specialized Agents"
        </h3>
        <p className="pub-contributors">
          Omar Al-Buraiki, Pierre Payeur, Henrique Busiquia
        </p>
        <p className="pub-details">
          MDPI Proceedings Journal, 2(3), 116, 25 Jan. 2018, doi:
          10.3390/ecsa-4-04911.
        </p>
        <a
          href="https://www.mdpi.com/257378"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          15. "Automatic Task Selection from Targets Recognition for Swarm
          Mobile Robots with Specialized Agents"
        </h3>
        <p className="pub-contributors">
          Omar Al-Buraiki, Pierre Payeur, Henrique M. Busiquia
        </p>
        <p className="pub-details">ECSA, MDPI, 2017.</p>
        <a href="#" className="pub-link">
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          16. "Task Switching for Specialized Mobile Robots Working in
          Cooperative Formation"
        </h3>
        <p className="pub-contributors">
          Omar Al-Buraiki, Pierre Payeur, Yoel R. Castillo
        </p>
        <p className="pub-details">
          IEEE International Symposium on Robotics and Intelligent Sensors,
          Japan, 17-20 December. 2016.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/8066092"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          17. "Robotic Leader-Follower SLAM based navigation and Neural Networks
          Dynamics Control Method"
        </h3>
        <p className="pub-contributors">Omar AL-Buraiki and Sami El Ferik</p>
        <p className="pub-details">
          United States Patent and Trademark Office (USPTO), US9146561B2 Sep.
          2015
        </p>
        <a
          href="https://patents.google.com/patent/US9146561B2/en"
          className="pub-link"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>18. "Robust Control Design of Autonomous Bicycle Kinematics"</h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Magdi Mahmoud</p>
        <p className="pub-details">
          Journal of Numerical Algebra, Control and Optimization (NACO) Vol: 4
          (3), pp181-191, September 2014.
        </p>
        <a
          href="https://openurl.ebsco.com/EPDB%3Agcd%3A6%3A20907702/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A103214798&crl=c&link_origin=scholar.google.com"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          19. "Neuro-adaptive Formation Maintenance and Control of Nonholonomic
          Mobile Robots"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Sami El Ferik</p>
        <p className="pub-details">
          International Conference of Control, Dynamic Systems, and Robotics,
          Ottawa, Ontario, Canada, May 15-16, 2014.
        </p>
        <a
          href="https://d1wqtxts1xzle7.cloudfront.net/88479861/50-libre.pdf?1657584738=&response-content-disposition=inline%3B+filename%3DNeuro_adaptive_Formation_Maintenance_and.pdf&Expires=1767765684&Signature=EUqLE~zvYGL9lcSm2yH3N5cUPZeMxPBDfqUQLonslLb8yBPoZcMQjQs3oBj9OUHHiGJqqj0hEM5TLvFXnPbqr~jDbDi1DNRxvNb5G7DPAPaKkTc13t8fvBC~3c14KiWdK~dStOC1wmyajHNrMCIdtqIJRAbnnEv5lBxmRMBBPQ6hK1uDkYDCSBe1OlEEK-9F4Bky-rk6Dk6cH~~cqHApeHer6HMVfBgb~cjP62NXaAIE6djx9S1EGBKGzDLMggucfQ45-97AyU0gTa35ejdGWvUPXlr4qMYtmB5l5c9Xt4GHW30szWaUozbr7Xfj-0b1poiORxyBOiPu50P7SDD9IA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          20. "Two-level control for improving the performance of MicroGrid in
          islanded mode"
        </h3>
        <p className="pub-contributors">Mahmoud, Magdi, and Omar Al-Buraiki</p>
        <p className="pub-details">
          23rd IEEE International Symposium on Industrial Electronics (ISIE),
          Istanbul, Turkey, 2014.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/6864620"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          21. "Model Predictive Control Design Approach for Autonomous Bicycle
          Kinematics Stabilization"
        </h3>
        <p className="pub-contributors">Omar Al-Buraiki, Mohammed Bin Thabit</p>
        <p className="pub-details">
          22nd Mediterranean Conference on Control and Automation, June 16-19,
          University of Palermo, Palermo, Italy, 2014.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/6961401"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>22. "Adaptive control of autonomous bicycle kinematics."</h3>
        <p className="pub-contributors">Omar Al-Buraiki, and Sami El Ferik</p>
        <p className="pub-details">
          13th International Conference on Control, Automation and Systems
          (ICCAS). IEEE, South Korea, 2013.
        </p>
        <a
          href="https://ieeexplore.ieee.org/abstract/document/6704019"
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          23. "Implementation of Observer Kalman filter System Identification
          and Control to a DC-Motor"
        </h3>
        <p className="pub-contributors">
          Sami El Ferik, Omar Al-Buraiki, and Arief Koesdwiady
        </p>
        <p className="pub-details">
          IASTED International Conference in Identification and Control.
          Austria, Feb. 2013.
        </p>
        <a
          href="https://www.actapress.com/PaperInfo.aspx?PaperID=455423&reason=500"
          className="pub-link"
        >
          {linkIcon}
        </a>
      </div>

      <div className="pub-item">
        <h3>
          24. "OKID-Based System Identification on Experimental Data of
          DC-Motor"
        </h3>
        <p className="pub-contributors">
          Omar Al-Buraiki, Areif. B. Kosd, and Sami El Ferik
        </p>
        <p className="pub-details">4th SSC Conference, 2012.</p>
        <a
          href=""
          className="pub-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkIcon}
        </a>
      </div>
    </div>
  );
}
