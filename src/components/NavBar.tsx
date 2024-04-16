import Logo from "./Logo";
import "./NavBar.css";
import { useEffect, useRef } from "react";
import { useState } from "react";

function NavBar() {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const hamburgerLinksRef = useRef<HTMLUListElement>(null);

  const [hamburgerToggled, setHamburgerToggled] = useState(false);

  const toggleHamburger = () => {
    setHamburgerToggled(!hamburgerToggled);
    hamburgerLinksRef.current?.classList.toggle("hidden");
  };

  useEffect(() => {
    if (hamburgerToggled) {
      hamburgerRef.current?.classList.add("toggled-cross");
    } else {
      hamburgerRef.current?.classList.remove("toggled-cross");
    }
  }, [hamburgerToggled]);

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nb-links">
        <li className="nb-link">Services</li>
        <li className="nb-link">About Us</li>
        <li className="nb-link">Contact Us</li>
        <li className="nb-link">Careers</li>
      </ul>
      <div
        onClick={toggleHamburger}
        ref={hamburgerRef}
        className="hamburger-menu"
      >
        {hamburgerToggled ? (
          <div>X</div>
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>
      <ul ref={hamburgerLinksRef} className="hamburger-links hidden">
        <li className="hamburger-link">Home</li>
        <li className="hamburger-link">Services</li>
        <li className="hamburger-link">About Us</li>
        <li className="hamburger-link">Contact Us</li>
        <li className="hamburger-link">Careers</li>
      </ul>
    </nav>
  );
}

export default NavBar;
