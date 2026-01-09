import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Contact from "./pages/Contact";
import ScrollRevealPage from "./pages/ScrollRevealPage";
import Projects from "./pages/Projects";
import useStackedScroll from "./components/useStackedScroll";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader";

const App = () => {
  useStackedScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      document.fonts.ready,
      new Promise((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", resolve);
      }),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <main className="overflow-visible">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ScrollRevealPage />
      <Contact />
      <Cursor />
    </main>
  );
};

export default App;
