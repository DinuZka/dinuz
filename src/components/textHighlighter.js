import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./textHighlightsStyle.css";

gsap.registerPlugin(ScrollTrigger);

export default function TextHighlightScroll() {
  useEffect(() => {
    // Select only elements inside [data-highlight="half"]
    const highlights = document.querySelectorAll(
      '[data-highlight="half"] .text-highlight'
    );

    highlights.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "-100px center",
        onEnter: () => el.classList.add("active"),
        // Optional: remove active when scrolling back
        // onLeaveBack: () => el.classList.remove("active"),
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null; // no JSX needed
}
