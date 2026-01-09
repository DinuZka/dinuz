import { gsap } from "gsap";

export default function Loader() {
  gsap.to(".loader", { y: "-100%", duration: 1.2, ease: "power4.inOut" });

  return (
    <div className="loader fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-white text-5xl font-bold">
        Dinushka<span className="opacity-50 ml-1">®</span>
      </div>
    </div>
  );
}
