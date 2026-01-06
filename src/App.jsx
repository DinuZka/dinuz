import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Contact from "./pages/Contact";
import ScrollRevealPage from "./pages/ScrollRevealPage";
import Projects from "./pages/Projects";
import useStackedScroll from "./components/useStackedScroll";

const App = () => {
  useStackedScroll();
  return (
    <main className="overflow-visible ">
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
