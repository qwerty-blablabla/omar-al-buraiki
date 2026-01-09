import "./Contact.css";
import qrCode from "../assets/qrcode.png";

export default function Contact() {
  return (
    <div className="contact-page page-transition">
      <div className="contact-content">
        <p>
          To contact the Machine Vision and Intelligence Lab Research Group,
          please address your correspondence to:
        </p>

        <div className="contact-layout">
          <div className="contact-details">
            <p>Dr. Omar Al-Buraiki</p>
            <p>Assistant Professor</p>
            <p>Department of Computer Science</p>
            <p>Algoma University</p>
            <p>24 Queen St. E, Office #202-A</p>
            <p>Brampton, ON, Canada</p>
            <p>L6V 1A3</p>
            {/* <p></p> */}
            {/* <p>tel: 1-613-562-5800 ext. 6717</p>
          <p>fax: 1-613-562-5664</p> */}
            <p>
              email:{" "}
              <a href="mailto:omar.alburaiki@algomau.ca">
                omar.alburaiki@algomau.ca
              </a>
            </p>
          </div>
          <div className="contact-qr">
            <img src={qrCode} alt="QR Code" />
            <p>Scan to contact MVI Lab</p>
          </div>
        </div>
      </div>
    </div>
  );
}
