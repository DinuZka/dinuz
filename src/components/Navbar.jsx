import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";
import { navLinks } from "./NavList.js";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
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

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(logoRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      });
    }, navRef);

    return () => ctx.revert(); // cleanup (important)
  });

  return (
    <nav ref={navRef}>
      <div>
        <a href="#hero" ref={logoRef} className="flex items-center gap-2 z-50">
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
          {navLinks.slice(1, 4).map((link, i) => (
            <li
              key={link.id}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[var(--color-blue)] transition-all duration-200"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
