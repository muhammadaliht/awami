import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Awami Systems Technologies</h3>
            <p className="text-gray-400">
            Empower Yourself Through Technology With Us.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400">
                <FaFacebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/web-development" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link href="/mobile-apps" className="text-gray-400 hover:text-white">Mobile Apps</Link></li>
              <li><Link href="/ui-ux" className="text-gray-400 hover:text-white">UI/UX Design</Link></li>
              <li><Link href="/consulting" className="text-gray-400 hover:text-white">Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="text-gray-400 space-y-2">
              <p>Mb city mall, I-8 Markaz</p>
              <p>Islamabad, Pakistan</p>
              <p>Phone: (051) 8448730</p>
              <p>Email: info@awami.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Awami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
