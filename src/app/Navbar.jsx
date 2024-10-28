"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const router = useRouter();

  const handleContacto = () => {
    router.push('/contacto');
  };

  const handleHome = () => {
    router.push('/');
  };

  const handleProchets = () => {
    router.push('/proyects');
  };

  const handleServices = () => {
    router.push('/services');
  };

  const handleAbout =() => {
    router.push('/about');
  }

  return (
    <>
      <nav className="row-start-1 flex gap-6 flex-wrap items-center justify-between bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md lg:shadow-lg lg:dark:shadow-gray-800">
        <button
          className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-600 lg:hidden shadow-md lg:shadow-lg lg:dark:shadow-gray-800"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <div className={`flex flex-col lg:flex-row items-center gap-6 flex-wrap transition-all duration-300 transform origin-top ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <a
            className="text-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/"
          >
            Home
          </a>

          <a
            onClick={handleProchets}
            className="text-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/proyects"
          >
            Prochects
          </a>
          <a
            onClick={handleAbout}
            className="text-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/about"
          >
            About
          </a>
          <a
            onClick={handleServices}          
            className="text-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/services"
          >
            Services
          </a>
          <a href='/contacto' onClick={handleContacto} className="text-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          Contacto
          </a>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
