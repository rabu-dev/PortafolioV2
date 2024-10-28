'use client';

import React from 'react';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../Navbar'; // Asegúrate de que la ruta sea correcta

const Prochects = () => {
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
   
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        {
          name: 'RapidTickets',
          description: 'una web de ayuda a usuario',
          link: 'http://localhost:3000/proyects/rapidtickets'
        },
        /*{
          name: '',
          description: '',
          link: 'https://example.com/ux-ui'
        },
        {
          name: '',
          description: '',
          link: 'https://example.com/tailwind'
        }*/
      ].map((proyect, index) => (
        <li key={index} className="bg-gray-900 rounded-lg shadow-lg p-4 hover:bg-gray-700 transition-colors">
          <a href={proyect.link} target="_blank" rel="noopener noreferrer" className="text-white flex items-center">
            <h3 className="font-bold mr-2 text-lg">{proyect.name}</h3>
            <span className="text-sm text-gray-100">{proyect.description}</span>
          </a>
        </li>
      ))}
    </ul>
    <Footer/>
  </div>
  );
};

export default Prochects;