'use client'
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import StyledComponentsRegistry from './registry'

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,
    });

    // Set timer for loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png"></link>
        <title>Awami Systems Technologies (AST)</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          {loading ? (
            <div style={{
              height: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background:'#000428',
              cursor:'pointer'
            }}>
              <Loader />
            </div>
          ) : (
            <>
              <Navigation />
              {children}
            </>
          )}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
