import HeroSection from "./sections/HeroSection";
import About from "./sections/about/About";
import CoreValues from "./sections/CoreValues";
import ScrollVelocity from "./sections/ScrollVelocity/ScrollVelocity";
import Services from "./sections/Services";
import Specialisation from "./sections/Specialisation";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Certifications from "./sections/Certifications";
import Policies from "./sections/Policies";
import Outsourcing from "./sections/Outsourcing";
import Footer from "./sections/Footer";


export default function Home() {
  return (
   <>
   <div id="hero">
  <HeroSection />
  </div>

<div className="gradient-background">
  <div className="py-8">
    <ScrollVelocity
      texts={[" - Web Development - App Development - Design Studio - Quality Assurance",'Empower Yourself Through Technology With Us']} 
      velocity={40} 
      className="custom-scroll-text text-9xl text-transparent py-4"
    />
  </div>

  <div id="about">
    <About/>
  </div>

  <div id="core-values">
    <CoreValues/>
  </div>

  <div id="services">
    <Services/>
  </div>

  <Outsourcing/>

  <Specialisation/>

  <div id="projects">
    <Projects/>
  </div>

   <Clients/>

  <div id="certifications">
    <Certifications/>
  </div>

  <div id="policies">
    <Policies/>
  </div>

  <Footer/>
</div>    
   </>
  );
}
