import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}
