import HeroSection from "./components/HeroSection";
import About from "./sections/about/About";
import ScrollVelocity from "./sections/ScrollVelocity/ScrollVelocity";
export default function Home() {
  return (
   <>
  <HeroSection />


<div className="gradient-background">
  <div className="py-8">
  <ScrollVelocity
  texts={[" - Web Development - App Development - Design Studio - Quality Assurance",'Empower Yourself Through Technology With Us']} 
  velocity={70} 
  className="custom-scroll-text text-9xl text-transparent py-4"
/>
</div>

<About/>

 </div>    
   </>
  );
}
