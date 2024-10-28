'use client';

import React from 'react';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../Navbar'; // Asegúrate de que la ruta sea correcta

const Services = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert('Formulario enviado!');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
   
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-pink-950 rounded p-4 shadow-lg">
    <h2 className="text-2xl font-bold text-white">Desarrollo Web Personalizado</h2>
    <p className="text-gray-100">
      Desarrollo de paginas web personalizadas y adaptadas a las necesidades
      de tu empresa.
    </p>
  </div>
  <div className="bg-gradient-to-r from-blue-950 via-green-950 to-yellow-950 rounded p-4 shadow-lg">
    <h2 className="text-2xl font-bold text-white">Aplicaciones Multiplataforma</h2>
    <p className="text-gray-100">
      Desarrollo de aplicaciones para diferentes plataformas como Android,
      iOS y Web.
    </p>
  </div>
  <div className="bg-gradient-to-r from-red-950 via-orange-950 to-blue-950 rounded p-4 shadow-lg">
    <h2 className="text-2xl font-bold text-white">Scripting</h2>
    <p className="text-gray-100">
      Desarrollo de scripts para automatizar tareas y mejorar la eficiencia
      de tu empresa.
    </p>
  </div>

  <div className="bg-gradient-to-r from-purple-950 via-pink-950 to-indigo-950 rounded p-4 shadow-lg">
    <h2 className="text-2xl font-bold text-white">Diseño UI/UX</h2>
    <p className="text-gray-100">
      Diseño de interfaces de usuario y diseño de experiencia de usuario para
      tus aplicaciones.
    </p>
  </div>

  <div className="bg-gradient-to-r from-yellow-950 via-gray-950 to-black-950 rounded p-4 shadow-lg">
    <h2 className="text-2xl font-bold text-white">Electricista</h2>
    <p className="text-gray-100">
      Tengo también experiencia en trabajos de electricista, ofreciendo soluciones eficientes y seguras para tus necesidades eléctricas.
    </p>
  </div>
</section>
    <Footer/>
  </div>
  );
};

export default Services;