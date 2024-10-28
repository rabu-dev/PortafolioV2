'use client';

import React from 'react';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../Navbar'; // Asegúrate de que la ruta sea correcta
import Foto from './Foto';

const About = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    alert('Formulario enviado!');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  <Foto/>
  <h1 className="text-3xl font-bold text-left sm:text-left mx-auto">Sobre Mí</h1>
  <p className="text-lg text-gray-100 text-center max-w-prose">
    ¡Hola! Soy un desarrollador multiplataforma apasionado con experiencia en la creación de aplicaciones modernas y eficientes. Me encanta aprender nuevas tecnologías y mejorar mis habilidades constantemente. Mi objetivo es construir soluciones que no solo sean funcionales, sino también estéticamente agradables y fáciles de usar.
  </p>
  <p className="text-lg text-gray-100 text-center max-w-prose">
    Cuando no estoy codificando, disfruto de la fotografía y explorar nuevos lugares. Siempre estoy buscando oportunidades para colaborar en proyectos interesantes y desafiantes.
  </p>
</main>
   
    <Footer/>
  </div>
  );
};

export default About;