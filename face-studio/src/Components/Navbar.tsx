import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link'; // Import Link from next/link

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null); // Reference for the entire navbar

  useEffect(() => {
    // Ensure navbarRef is available
    if (navbarRef.current) {
      // Animate everything together
      gsap.fromTo(
        navbarRef.current.children,
        { opacity: 0, y: -50 }, // Start from off-screen at the top
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2, // Delay between each element (logo and links)
        }
      );
    }
  }, []);

  return (
    <div ref={navbarRef} className="border-1 p-3 bg-white text-black flex flex-row items-center justify-between">
      {/* Logo */}
      <img src="/walee-logo.png" className="w-[10%] h-[10%]" alt="Logo" />
    </div>
  );
};

export default Navbar;
