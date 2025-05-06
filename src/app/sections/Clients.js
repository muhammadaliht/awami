import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Clients() {
  // Add client logos array
  const clientLogos = [
    '/images/nepra-logo.png',
    '/images/saarc-logo.png',
    '/images/gb-logo.png',
    '/images/wapda-logo.png',
    '/images/catlelahore-logo.jpg',
    '/images/cleanLahore-logo.webp',
    '/images/piu-logo.jpg',
    '/images/rda-logo.png',
    '/images/wwf-logo.jpeg',
    '/images/livestock-logo.jpg',
  ]

  return (
    <div className="container mx-auto px-7 py-4">
      <h2 data-aos="fade-up" className="sm:text-5xl text-4xl uppercase font-bold text-white mb-8">
        + Our Clients
      </h2>
      <p data-aos="fade-up" className="text-lg text-white mb-12">
        We have served a diverse range of clients across various industries and are committed to providing exceptional customer satisfaction.
      </p>

      <div className="relative pb-5">
        {/* Left shadow with theme-aware gradient - keep as is */}
        <div className="absolute sm:flex hidden left-0 top-0 w-32 h-full z-10 bg-gradient-to-r from-[#00366f] via-[#00356e]/90 to-transparent"></div>
        
        {/* Right shadow with corrected color to match #004484 background */}
        <div className="absolute sm:flex hidden right-0 top-0 w-32 h-full z-10 bg-gradient-to-l from-[#004484] via-[#004484]/90 to-transparent"></div>
        
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="py-5"
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="mx-6 cursor-pointer">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-25 w-auto hover:scale-105 ease-in-out duration-300 rounded-xl bg-white"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
