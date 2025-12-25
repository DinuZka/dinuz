import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";
import { navLinks } from "./index.js";
import ButtonWithIcon from "./ButtonWithIcon.jsx";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

import arrowSvg from "/images/arrow.svg";

gsap.registerPlugin(ScrollTrigger);

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
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -80",
          end: "top top",
          scrub: true,
        },
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>DZ</p>
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
          <ButtonWithIcon Name="Contact" Icon={MdArrowOutward} />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
