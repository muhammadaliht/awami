'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certifications = [
  {
    id: 1,
    image: "images/certificate/fbr.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-NTN-Certificate.pdf",
  },
  {
    id: 2,
    image: "images/certificate/pta.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-CVAS-Certificate.pdf",
  },
  {
    id: 3,
    image: "images/certificate/srb.jpg",
    pdfLink: "https://ast.com.pk/Certificates/AST-SRB(Taxpayer-Registration-Certificate).pdf",
  },
  {
    id: 4,
    image: "images/certificate/pra.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-PRA(Taxpayer-REgistration-Certificate).pdf",
  },
  {
    id: 5,
    image: "images/certificate/kpra.jpg",
    pdfLink: "https://ast.com.pk/Certificates/AST-KPRA(REgisartion-Certificate).pdf",
  },
  {
    id: 6,
    image: "images/certificate/bra.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-BRA-(Regisartion-Certificate).pdf",
  },
  {
    id: 7,
    image: "images/certificate/icoc.jpg",
    pdfLink: "https://ast.com.pk/Certificates/ICCI-Certificate.jpeg",
  },
  {
    id: 8,
    image: "images/certificate/iso.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-ISO-9001-Certificate1.pdf",
  },
  {
    id: 9,
    image: "images/certificate/pak-soft.png",
    pdfLink: "https://ast.com.pk/Certificates/AST%20-%20PSEB-Company-Certificate%20upto%20May%202025.pdf",
  },
  {
    id: 10,
    image: "images/certificate/pasha.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-PASHA-MEMBERSHIP.pdf",
  },
  {
    id: 11,
    image: "images/certificate/pec.png",
    pdfLink: "https://ast.com.pk/Certificates/AST-PEC-CERTIFICATE.pdf",
  },
  {
    id: 12,
    image: "images/certificate/excise.jpg",
    pdfLink: "https://ast.com.pk/Certificates/AST-PROFESSIONAL-TAX-CERTIFICATE.png",
  },
  {
    id: 13,
    image: "images/certificate/dun-b.webp",
    pdfLink: "https://ast.com.pk/Certificates/DUNS%20NUMBR%20-%20AWAMI%20SYSTEMS%20TECHNOLOGIES%20PVT%20LIMITED.pdf",
  },
  {
    id: 14,
    image: "images/certificate/iqra.png",
    pdfLink: "https://ast.com.pk/Certificates/AST%20-%20ISO%2027001%20Certifiacte.pdf",
  },


];

export default function Certifications() {
  return (
    <div className="container mx-auto px-7 py-4">
    <h2 data-aos="fade-up" className="sm:text-5xl text-4xl uppercase font-bold text-white mb-8">
   + Certifications & Licenses
    </h2>
    <p data-aos="fade-up" className="text-lg text-white mb-12">
    Our company holds a wide range of certifications and licenses to ensure the highest level of quality and compliance in our products and services.
    </p>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="certifications-swiper"
      >
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-4"
            >
              <a 
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[200px] bg-white object-contain p-6 transition-transform 
                      duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium">
                      View Certificate
                    </span>
                  </div>
                </div>

              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
