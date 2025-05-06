import React from 'react'
import { Meteors } from "../components/Meteors";

export default function Services() {
  const services = [
    {
      title: "App Development",
      description: "Meticulous attention to app functionality and user experience.",
      icon: "📱"
    },
    {
      title: "Web Development",
      description: "Meticulous attention to Web functionality and user experience.",
      icon: "💻"
    },
    {
      title: "Design Studio",
      description: "Hook your potential customers with awesome website designs.",
      icon: "🎨"
    },
    {
      title: "Quality Assurance",
      description: "Thriving businesses with our cost effective, error free solutions.",
      icon: "🛡️"
    }
  ];
  
  return (
    <div className="container mx-auto px-7 py-4">
      <h2 data-aos="fade-up" className="sm:text-5xl text-4xl uppercase font-bold text-white mb-8">
        + Information Technology Services
      </h2>
      <p data-aos="fade-up" className="text-lg text-white mb-12">
        We operate as One Stop Shop for our customers and provide end-to-end solutions. Starting from feasibility studies, passing through the analysis, process simplification & re-engineering, system design, and development for successful implementation are the primary services.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full blur-3xl" />
            <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border bg-cyan-950/30 border-cyan-500/30 px-4 py-8 shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 text-2xl">
                {service.icon}
              </div>

              <h3 className="relative z-50 mb-4 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-400">
                {service.description}
              </p>

              <button className="rounded-lg border border-cyan-500/30 hover:scale-104 hover:bg-cyan-800 cursor-none hover:ease-in-out px-4 py-1 text-gray-300 bg-cyan-900 transition-colors">
                Learn More
              </button>

              <Meteors number={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
