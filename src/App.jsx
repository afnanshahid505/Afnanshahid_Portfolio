import "./App.css"
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certificate";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Certifications/>
    <Projects/>
    <Contact/>
    </>
  );
}
export default App;