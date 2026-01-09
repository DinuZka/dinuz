import { ArrowUpRight, PhoneCall } from "lucide-react";
import { LuLinkedin, LuGithub, LuFacebook } from "react-icons/lu";
import ButtonWithIcon from "../components/ButtonWithIcon";
import { navLinks } from "../components/NavList";
import DecryptedText from "../components/DecryptedText";

export default function Contact() {
  const goToWhatsapp = () => {
    window.open(
      "https://wa.me/0772468270?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.",
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen z-20 panel bg-black text-white px-8 py-20  flex flex-col justify-between overflow-hidden"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start mt-15">
        <div>
          <p data-aos="fade-up" className="text-sm mb-4">
            Let’s collaborate and make great stuff.
          </p>

          <ButtonWithIcon
            Name="Say Hello"
            Icon={ArrowUpRight}
            onClick={goToWhatsapp}
          />
        </div>

        <div
          data-aos="fade-up"
          className="text-sm hidden md:block md:flex md:flex-row items-center gap-2 opacity-80"
        >
          <PhoneCall size={14} />
          <a href="tel:0772468270">077 24 68 270</a>
        </div>
      </div>

      {/* Center Title */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-[19vw] leading-none font-bold tracking-tight">
          <div>
            <DecryptedText
              text="Let’s Talk!"
              animateOn="view"
              revealDirection="bottom"
            />
          </div>
        </h1>
      </div>

      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-center text-sm opacity-70">
        <div className="flex gap-10">
          {navLinks.slice(0, -1).map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/dinushka-madhushan-kumara-a40082281"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin size={24} />
          </a>
          <a href="https://github.com/dinuzka" target="_blank" rel="noreferrer">
            <LuGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085211013166"
            target="_blank"
            rel="noreferrer"
          >
            <LuFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-50">
        © 2026 Dinushka Madushan
      </p>
    </section>
  );
}
