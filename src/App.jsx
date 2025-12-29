import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Cursor />
    </main>
  );
};

export default App;
