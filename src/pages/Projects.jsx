import { motion } from "framer-motion";
import "./ProjectsStyle.css";
import { gsap } from "gsap";
import { useEffect } from "react";

const items = [
  {
    id: "01",
    title: "Web UX/UI",
    description:
      "Crafting immersive, high-performance websites with motion and purpose.",
    image: "`${import.meta.env.BASE_URL}/images/p1.png`",
  },
  {
    id: "02",
    title: "Digital Products",
    description:
      "Crafting immersive, high-performance websites with motion and purpose.",
    image: "`${import.meta.env.BASE_URL}/images/p2.png`",
  },
  {
    id: "03",
    title: "Branding",
    image: "`${import.meta.env.BASE_URL}/images/p3.png`",
  },
];

export default function Projects() {
  useEffect(() => {
    gsap.set(".container img.swipeimage", { yPercent: -50, xPercent: -50 });

    let firstEnter;

    gsap.utils.toArray(".container").forEach((el) => {
      const image = el.querySelector("img.swipeimage"),
        setX = gsap.quickTo(image, "x", { duration: 0.4, ease: "power3" }),
        setY = gsap.quickTo(image, "y", { duration: 0.4, ease: "power3" }),
        align = (e) => {
          if (firstEnter) {
            setX(e.clientX, e.clientX); //https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#optionally-define-a-start-value
            setY(e.clientY, e.clientY);
            firstEnter = false;
          } else {
            setX(e.clientX);
            setY(e.clientY);
          }
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          duration: 0.1,
          onReverseComplete: stopFollow,
        });

      el.addEventListener("mouseenter", (e) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });
  }, []);

  return (
    <section
      id="projects"
      className="bg-black text-[var(--color-white)] min-h-1/3 md:min-h-dvh px-10 py-24 noisy"
    >
      <div className="max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" group border-b border-grey-500/40 py-14 cursor-pointer"
          >
            <div className="container flex items-start gap-10">
              {/*Image*/}
              <img src={item.image} className="swipeimage" />
              {/* Number */}
              <span className="text-sm text-[var(--color-white)] tracking-widest mt-4">
                [{item.id}]
              </span>

              {/* Title */}
              <h2 className="text-[7vw] leading-none font-medium transition-all duration-300 group-hover:translate-x-6">
                {item.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
