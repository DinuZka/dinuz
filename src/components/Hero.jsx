import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">DINUSHKA</h1>
        <h2 className="title">MADUSHAN</h2>
        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-autot">
            <div className="space-y-5 hidden md:block">
              <p className="subtitle">Building modern web experiences</p>
              <p className="subtitle">
                with clean code
                <br /> & creative design.
              </p>
            </div>
            <div className="space-y-5 text-lg mt-5 md:mt-0 lg:max-w-3xs md:max-w-xs w-full">
              <p className="subtitle text-left">
                I’m Dinushka, a Computer Science student and aspiring Frontend /
                Full-Stack Web Developer from Sri Lanka. I craft responsive,
                user-friendly websites using modern technologies.
              </p>
              <a
                href="#about"
                className="font-semibold opacity-80 2xl:text-start text-center subtitle"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
