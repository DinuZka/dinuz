import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "./index.js";
import ButtonWithIcon from "./ButtonWithIcon.jsx";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>DinuZ</p>
        </a>

        {/* hamburger button */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => setMenuOpen(false)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <ButtonWithIcon />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
