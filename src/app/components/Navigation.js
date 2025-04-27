"use client";

import { useState } from "react";
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
  
  const menuItems = [
    { name: "About Us", link: "/" },
    { name: "Core Values", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/contact" },
    { name: "Certificate", link: "/contact" },
    { name: "Our Policies", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={menuItems} />
        <NavbarButton href="/get-started">
          Contact Us
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
              href={item.link}
              className="w-full px-4 py-2 text-neutral-600 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton 
            href="/get-started"
            className="mt-4 w-full"
          >
            Contact Us
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}