import React from "react";
import ScrollReveal from "../components/ScrollReveal";

function ScrollRevealPage() {
  return (
    <section className="noisy w-full panel  md:min-h-dvh relative z-10 text-white py-30 px-5 md:px-0 items-center text-left">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={5}
      >
        I turn ideas into functional, visually engaging web experiences.
      </ScrollReveal>
    </section>
  );
}

export default ScrollRevealPage;
