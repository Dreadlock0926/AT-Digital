import Logo from "./Logo";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nb-links">
        <li className="nb-link">Services</li>
        <li className="nb-link">About Us</li>
        <li className="nb-link">Contact Us</li>
        <li className="nb-link">Careers</li>
      </ul>
    </nav>
  );
}

export default NavBar;