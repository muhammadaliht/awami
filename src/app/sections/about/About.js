import React from 'react'
import SpotlightCard from './SpotlightCard';
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';



export default function About() {
  return (
    <>
      <div className='min-h-screen w-screen py-16 px-7 '>
        <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
          
          <h2 data-aos="fade-up" className={`bebas-neue sm:text-5xl text-4xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text`}>
            + ABOUT
          </h2>
          
          
          <div className='space-y-8 max-w-4xl'>
            <p data-aos="fade-up" className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300'>
              We believe that "for every problem, there is a solution" and we provide "IT Solutions" up to entire satisfaction of our customers.
            </p>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.3)">
            <div className='text-lg text-gray-300/90 leading-relaxed space-y-6'>
             
              <p  data-aos="fade-right" className='backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-cyan-500/20'>
                Awami Systems Technologies (AST) provides end-to-end solutions related to Information Technology to our customers, which makes us One-Stop solution provider.
              </p>
              
              <p data-aos="fade-right" className='backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-cyan-500/20'>
                <span className='text-cyan-400 font-medium'>AWAMI</span> is an Urdu word, which means "People's". Our focus at Awami Systems is to implement IT Solutions for Security & Facilitation of the citizen and provide enabling environment of E-Governance for public and private sector organizations dealing with the citizens and customers.
              </p>
            </div>
            </SpotlightCard>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <SpotlightCard 
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaRocket className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80">We have experienced that the users of IT Systems want to be empowered, instead of being just IT followers. Therefore, we are determined to “Empowering through Technology.</p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaLightbulb className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80">Our vision is to be a leader in our industry by providing innovative solutions and exceptional customer experiences that exceed expectations.</p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaHandshake className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-white/80">We believe that leadership is the key to success. Under the able leadership; teams nurture, bring innovation and deliver quality products with professional excellence through best coordination with customers.</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  )
}
