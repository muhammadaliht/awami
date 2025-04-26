import HeroSection from "./components/HeroSection";
import ScrollVelocity from "./sections/ScrollVelocity/ScrollVelocity";
export default function Home() {
  return (
   <>
  <HeroSection />


  <div className="py-8 gradient-background">
  <ScrollVelocity
  texts={['Empower Yourself Through Technology With Us', 'Empower Yourself Through Technology With Us']} 
  velocity={70} 
  className="custom-scroll-text text-9xl text-transparent py-4"
/>
</div>
     
   </>
  );
}
