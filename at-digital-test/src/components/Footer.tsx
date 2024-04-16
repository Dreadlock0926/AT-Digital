import Logo from "./Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="at-footer">
      <div className="at-footer-info">
        <div className="at-title-container">
          <Logo />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="at-technologies">
          <h3>Our Technologies</h3>
          <ul className="tech-list">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="at-services">
          <h3>Our Services</h3>
          <ul className="tech-list">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="at-f-priv-container">
        <ul>
            <li className="atfp-first-li">Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
