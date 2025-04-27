import React from 'react'
import SpotlightCard from './SpotlightCard';
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <div className='min-h-screen w-screen py-16 px-7 '>
        <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
          
          <h2 className='text-7xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>
            + ABOUT
          </h2>
          
          
          <div className='space-y-8 max-w-4xl'>
            <p className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 leading-relaxed'>
              We believe that "for every problem, there is a solution" and we provide "IT Solutions" up to entire satisfaction of our customers.
            </p>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.3)">
            <div className='text-lg text-gray-300/90 leading-relaxed space-y-6'>
             
              <p className='backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-cyan-500/20'>
                Awami Systems Technologies (AST) provides end-to-end solutions related to Information Technology to our customers, which makes us One-Stop solution provider.
              </p>
              
              <p className='backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-cyan-500/20'>
                <span className='text-cyan-400 font-medium'>AWAMI</span> is an Urdu word, which means "People's". Our focus at Awami Systems is to implement IT Solutions for Security & Facilitation of the citizen and provide enabling environment of E-Governance for public and private sector organizations dealing with the citizens and customers.
              </p>
            </div>
            </SpotlightCard>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <SpotlightCard
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaRocket className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80">To provide innovative IT solutions that empower businesses and enhance citizen services.</p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaLightbulb className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80">To become a leading force in digital transformation and e-governance solutions.</p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="p-[1px] rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
              spotlightColor="rgba(0, 229, 255, 0.3)"
            >
              <div className="p-6 rounded-xl backdrop-blur-sm bg-cyan-950/30 h-full">
                <FaHandshake className="text-4xl text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-white/80">Innovation, integrity, and commitment to excellence in every project we undertake.</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  )
}
