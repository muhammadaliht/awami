'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Animal Vaccination System",
    tags: ["React", "Node.js", "MongoDB"],
    image: "images/project/animal_vaccination_system.jpeg",
    description: "Streamlined system for tracking and managing animal vaccination records and schedules",
    featured: true
  },
  {
    id: 2,
    title: "Animal Census System",
    tags: ["React Native", "Firebase", "Mobile Development"],
    image: "images/project/animal_census_managment.jpeg",
    description: "Mobile application for conducting and managing animal population surveys",
    featured: true
  },
  {
    id: 3,
    title: "Slaughter Management System for PAMCO",
    tags: ["React", "Node.js", "Process Management"],
    image: "images/project/slaughter_management_system.jpeg",
    description: "Comprehensive system for managing slaughter operations and compliance tracking",
    featured: false
  },
  {
    id: 4,
    title: "PIU – Punjab (Project Monitoring Dashboard & Mobile APPs)",
    tags: ["React", "React Native", "Data Analytics"],
    image: "images/project/project_monitoring_dashboard_mobile_apps.jpeg",
    description: "Integrated dashboard and mobile apps for real-time project monitoring and reporting",
    featured: false
  },
  {
    id: 5,
    title: "Performance Monitoring System",
    tags: ["React", "Redux", "Data Visualization"],
    image: "images/project/performance_monitoring_system.jpeg",
    description: "Real-time performance tracking and analytics dashboard for organizational metrics",
    featured: false
  },
  {
    id: 6,
    title: "Field Inspection and reporting system (Geo-Tag)",
    tags: ["React Native", "Maps API", "Location Services"],
    image: "images/project/field_inspection_and_reporting_system_geo_tag.jpeg",
    description: "Mobile-based inspection system with geo-tagging and real-time reporting capabilities",
    featured: true
  },
  {
    id: 7,
    title: "Executive Dashboard & MIS",
    tags: ["React", "D3.js", "Business Intelligence"],
    image: "images/project/executive_dashboard_mis.jpeg",
    description: "Executive-level dashboard for strategic decision making and business intelligence",
    featured: false
  },
  {
    id: 8,
    title: "Website Development for CPPA",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
    image: "images/project/website_development_for_cppa.jpeg",
    description: "Modern, responsive website with content management system for CPPA",
    featured: false
  },
  {
    id: 9,
    title: "Webinar Management for SAARC Energy",
    tags: ["WebRTC", "Node.js", "Real-time Communication"],
    image: "images/project/online_webinar.jpeg",
    description: "Complete webinar management solution with live streaming and participant interaction",
    featured: true
  },
  {
    id: 10,
    title: "24/7 Contact and Communication Center",
    tags: ["VoIP", "CRM", "Real-time Analytics"],
    image: "images/project/24_7_contact_and_communication_center.jpeg",
    description: "Integrated contact center solution with multi-channel communication support",
    featured: false
  },
  {
    id: 11,
    title: "Database Management and Operational Support",
    tags: ["MongoDB", "PostgreSQL", "System Administration"],
    image: "images/project/database_management.jpeg",
    description: "Comprehensive database management and operational support system",
    featured: false
  },
  {
    id: 12,
    title: "ERP Solution for Petrol Pump Management – WAPAD Foundation",
    tags: ["React", "Node.js", "ERP"],
    image: "images/project/erp_solution_for_petrol_pump_management.jpeg",
    description: "Custom ERP solution for managing petrol pump operations and inventory",
    featured: false
  },
  {
    id: 13,
    title: "Animal Disease Diagnostic Reporting and Surveillance System",
    tags: ["React", "Machine Learning", "Data Analysis"],
    image: "images/project/animal_disease_diagnostic_reporting_and_surveillance_system.jpeg",
    description: "Advanced system for disease tracking, diagnosis reporting and surveillance",
    featured: false
  },
  {
    id: 14,
    title: "LIMS – Livestock Initiative Management System",
    tags: ["React", "Node.js", "Agriculture Tech"],
    image: "images/project/lims_livestock_initiative_management_system.jpeg",
    description: "Comprehensive livestock management and tracking system",
    featured: true
  },
  {
    id: 15,
    title: "Smart Utility Management System (SUMS)",
    tags: ["IoT", "React", "Real-time Monitoring"],
    image: "images/project/smart_utility.jpeg",
    description: "Smart solution for monitoring and managing utility consumption and costs",
    featured: true
  },
  {
    id: 16,
    title: "Campus Management System",
    tags: ["React", "Node.js", "Education Tech"],
    image: "images/project/campus_management.jpeg",
    description: "Complete campus management solution for educational institutions",
    featured: false
  },
  {
    id: 17,
    title: "MyTax – E-Filing System",
    tags: ["React", "Security", "Payment Integration"],
    image: "images/project/tax.jpeg",
    description: "Secure and user-friendly tax e-filing and management system",
    featured: true
  },
  {
    id: 18,
    title: "Farmer Registration System",
    tags: ["React Native", "Node.js", "Agriculture"],
    image: "images/project/farmer_registration_system.jpeg",
    description: "Mobile-first solution for farmer registration and management",
    featured: false
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('featured'); // Changed default from 'all' to 'featured'
  const [hoveredId, setHoveredId] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const tabs = [
    { id: 'featured', label: 'Featured' }, // Reordered to put Featured first
    { id: 'all', label: 'All Work' }
  ];

  const getFilteredProjects = () => {
    switch (activeTab) {
      case 'featured':
        return projectData.filter(p => p.featured);
      default:
        return projectData;
    }
  };

  return (
    <div className="container mx-auto px-7 pb-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col mb-12"
      >
        <motion.h2 
          className="sm:text-5xl text-4xl uppercase font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          + Our Projects
        </motion.h2>

        
        {/* Modern Tab Navigation */}
        <div className="flex gap-3 px-7">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-lg font-medium ${
                activeTab === tab.id ? 'text-blue-400' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max"
      >
        <AnimatePresence mode="popLayout">
          {getFilteredProjects().map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-xl overflow-hidden aspect-[3/4]"
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end
                  lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  opacity-100 translate-y-0"
                initial={false} // Remove initial animation
                animate={{ 
                  opacity: isLargeScreen ? (hoveredId === project.id ? 1 : 0) : 1,
                  y: isLargeScreen ? (hoveredId === project.id ? 0 : 20) : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>
                
                <motion.button
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium
                    flex items-center justify-center gap-2 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
