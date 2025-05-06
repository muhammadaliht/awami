import React from 'react'
import { Meteors } from "../components/Meteors";


  const services = [
    {
      title: "Technical Support",
      description: "The perfect customer centric solution for all your applications and systems running onsite or remote.",
      icon: "🛠️"  // Changed to wrench/tools icon
    },
    {
      title: "Call Center",
      description: "Uplift your brand image, extent into new markets and maintain strong customer support with the help of our skilled agents.",
      icon: "📞"  // Changed to telephone icon
    },
    {
      title: "Client Success",
      description: "Empasize on building stronger relationship with you'r clientele and improve the implementation of your products/services.",
      icon: "🎯"  // Changed to handshake icon
    },
  ];

export default function Outsourcing() {
  return (
    <div className="container mx-auto px-7 py-4">
    <h2 data-aos="fade-up" className="sm:text-5xl text-4xl uppercase font-bold text-white mb-8">
    + Business Process Outsourcing
    </h2>
    <p data-aos="fade-up" className="text-lg text-white mb-12">
    Call Centre,Technical Support,Client Success, document imagining/ management, archival, and data entry are provided as data readiness and post-implementation support services. We also provide other related services like change management, training, and capacity building which are essential for sustainable system implementations.
    </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <Meteors number={15} />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
