import { motion } from "framer-motion";
import { PiLinkedinLogo } from "react-icons/pi";
import { SiReaddotcv } from "react-icons/si";
import { LiaGithubSquare, LiaFacebookSquare } from "react-icons/lia";
import CopyText from "./CopyText";
import DownloadCVButton from "./DownloadedButton";
// About.jsx
// - Tailwind CSS based responsive About section matching the provided design
// - Default export a React component
// - Props: imageSrc (string), socials (array of {label, href}), email
// Usage: import About from './About.jsx' and include <About /> in your page

function About({
  socials = [
    {
      label: "LinkedIn",
      href: "www.linkedin.com/in/dinushka-madhushan-kumara-a40082281",
      text: "/dinushka-madhushan-kumara",
      icon: <PiLinkedinLogo size={25} className="ml-2" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/dinuzka",
      text: "/DinuZka",
      icon: <LiaGithubSquare size={25} className="ml-2" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100085211013166",
      text: "/Dinushka",
      icon: <LiaFacebookSquare size={25} className="ml-2" />,
    },
  ],
  email = <CopyText email="dinushkamadushan440@gmail.com" />,
}) {
  return (
    <section
      id="about"
      className="noisy w-full min-h-dvh text-white py-10 px-1 md:px-1"
    >
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start  justify-around gap-5 lg:gap-100 md:gap-10 px-5 md:px-0">
        {/* Left column: image + contacts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="px-2 ">
            <div className="w-full aspect-square overflow-hidden md:size-100 size-80 lg:size-125">
              <img
                src="/images/me.jpg"
                alt="Dinushka"
                className="w-full h-full object-cover block filter grayscale-[20%] mix-blend-normal"
              />
            </div>

            <div className="mt-6 text-sm text-gray-300">
              <div className="grid grid-cols-1 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between hover:text-white"
                  >
                    <span className="font-medium text-gray-200 flex items-center hover:text-[var(--color-blue)] transition-all duration-200">
                      {s.label} {s.icon}
                    </span>
                    <span className="text-sm text-gray-400 hover:text-white transition-all duration-200">
                      {s.text}
                    </span>
                  </a>
                ))}

                <div className="pt-2 border-t border-[#222]">
                  <div className="text-xs text-gray-400">Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="block mt-1 text-sm break-all text-gray-300 hover:text-white"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column: heading + paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="md:col-span-7 flex flex-col justify-start"
        >
          <div>
            <h2 className="text-[120px] leading-[0.9] font-bold tracking-tight text-white md:mb-6 hidden md:block">
              INFO
            </h2>

            <div className="md:mt-0 w-full flex flex-col items-center md:items-start">
              <p className="mt-20 text-lg md:text-[23px] text-gray-100 max-w-prose">
                I’m <strong>Dinushka</strong>, a Computer Science undergraduate
                at <strong>UCSC</strong>, passionate about building functional
                and visually appealing web experiences.
              </p>

              <p className="mt-6 text-lg md:text-[23px] text-gray-100 max-w-prose">
                Skilled in <strong>HTML, CSS, JavaScript, Python, PHP,</strong>{" "}
                and <strong>React</strong>.
              </p>

              <p className="mt-8 text-lg md:text-[23px] font-semibold text-gray-100 max-w-prose">
                I continuously learn and create to grow as a software engineer
                building impactful digital products.
              </p>

              <div className="mt-8">
                <DownloadCVButton />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
