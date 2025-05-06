import React from 'react'
import Image from 'next/image'

export default function CoreValues() {
  return (
    <div className="container mx-auto px-7 py-4">
                  <h2 data-aos="fade-up" className="sm:text-5xl text-4xl uppercase font-bold text-white">
            + Our Core Values
          </h2>
      <div className="flex flex-col lg:flex-row items-start py-7 gap-12">
       
        <div className="lg:w-2/5 space-y-6">
          <p  data-aos="fade-up" className="text-lg  text-white">
          Our core values include integrity, excellence, innovation, and teamwork, which drive our commitment to delivering the best possible products and services to our clients.
          </p>
          <ul className="space-y-4" >
            {[
              'INCLUSIVE DIVERSITY ',
              'INTEGRITY & QUALITY',
              'OBJECTIVITY',
              'FUN',
              'PERSONAL REWARD'
            ].map((value, index) => (
              <li key={index} className="flex items-center gap-3" data-aos="fade-right" data-aos-offset="100">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <span className="backdrop-blur-sm bg-white/5 px-3 py-3 w-[300px] text-lg text-gray-300/90 leading-relaxed rounded-lg border border-cyan-500/20">{value}</span>
              </li>
            ))}
          </ul>
        </div>

    
        <div data-aos="fade-up" data-aos-offset="200" className="lg:w-3/5 relative h-[260px] sm:h-[448px] w-full rounded-2xl shadow-[3px 4px 13px #232323d6;] overflow-hidden">
          <Image
            src="/images/core-values.png"
            alt="Core Values Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
