'use client'
import React from 'react';
import { motion } from 'framer-motion';

const policies = [
  {
    id: 1,
    title: "Data Protection Policy",
    description: "Comprehensive guidelines on how we collect, store, and protect your sensitive data, ensuring compliance with international data protection standards.",
    icon: "🔒",
    pdfLink: "https://ast.com.pk/Policies/AST%20-%20Data%20Protection%20Policy%20-%20(2023).pdf"
  },
  {
    id: 2,
    title: "Information Security and Privacy Policy",
    description: "Detailed framework for maintaining information security, including cybersecurity measures, access controls, and data privacy protocols.",
    icon: "📋",
    pdfLink: "https://ast.com.pk/Policies/AST%20-%20Information%20Security%20and%20Privacy%20Policy%20(2023).pdf"
  }
];

export default function Policies() {
  return (
    <div className="container mx-auto px-7 py-16">
    <h2 data-aos="fade-up" className="sm:text-5xl text-center text-4xl uppercase font-bold text-white mb-8">
    + Our Policies
    </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {policies.map((policy) => (
          <motion.a
            key={policy.id}
            href={policy.pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30
                hover:border-blue-500/50 transition-all duration-300
                group-hover:shadow-2xl group-hover:shadow-blue-500/10
                h-full flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{policy.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {policy.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {policy.description}
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                <span>View Document</span>
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
