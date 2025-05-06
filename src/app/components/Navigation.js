"use client";

import { useState, useEffect } from "react";
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "./Navbar";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const menuItems = [
    { name: "About Us", link: "about" },
    { name: "Core Values", link: "core-values" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Certificate", link: "certifications" },
    { name: "Our Policies", link: "policies" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection?.getBoundingClientRect().height || 0;
      
      // If we're in the hero section or at the very top
      if (scrollPosition <= heroHeight) {
        setActiveSection("");
        return;
      }

      // Find which section is currently in view
      let currentSection = "";
      for (const item of menuItems) {
        const section = document.getElementById(item.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          
          // Section is considered "active" when its top is near the viewport top
          if (scrollPosition >= sectionTop - (window.innerHeight / 3)) {
            currentSection = item.link;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleItemClick = (e, link) => {
    e.preventDefault();
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems 
          items={menuItems} 
          className="mr-6" 
          activeSection={activeSection}
          handleItemClick={handleItemClick}
        />
        <NavbarButton href="#contact">
          Contact
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle 
            isOpen={isOpen} 
            onClick={() => setIsOpen(!isOpen)} 
          />
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isOpen}>
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.link}`}
              onClick={(e) => handleItemClick(e, item.link)}
              className={`w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 ${
                activeSection === item.link 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton 
            href="#contact"
            className="mt-4 w-full"
          >
            Contact Us
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}