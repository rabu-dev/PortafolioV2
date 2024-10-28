'use client';

import React from 'react';
import Footer from '../../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../../Navbar'; // Asegúrate de que la ruta sea correcta

const Prochects = () => {
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg shadow-gray-800">
      <h1 className="text-3xl font-bold text-left sm:text-left mx-auto">RapidTickets</h1>
      <p className="text-lg text-gray-900 dark:text-gray-100 text-center max-w-prose">
        Un sistema web para recibir ayuda en lo que necesites.
      </p>
      <p className="text-lg text-gray-900 dark:text-gray-100 text-center max-w-prose">
        Cualquier persona puede abrir un ticket y un administrador puede gestionar todos los tickets.
      </p>

      <h2 className="text-2xl font-bold text-left sm:text-left mx-auto mt-12">Tutorial</h2>
      <ol className="list-decimal text-lg text-gray-900 dark:text-gray-100 text-left max-w-prose list-inside space-y-4">
        <li className="flex items-start">
          <span className="w-6 h-6 mr-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          Primero debes clonar el repositorio con <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">git clone https://github.com/RabuDev/rapidtickets.git</code>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 mr-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          Luego debes instalar las dependencias con <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">npm install</code>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 mr-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          Despu s debes configurar tu base de datos en el archivo <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">config/database.js</code>
        </li>
        <li className="flex items-start">
          <span className="w-6 h-6 mr-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <svg className="w-4 h-4 text-gray-900 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          Finalmente debes correr el proyecto con <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">npm run dev</code>
        </li>
      </ol>
      <p className="text-lg text-gray-900 dark:text-gray-100 text-center max-w-prose">
        Puedes ver el c digo fuente en <a className="text-blue-500 hover:text-blue-700" href="https://github.com/RabuDev/rapidtickets" target="_blank" rel="noopener noreferrer">Github</a>
      </p>
    </main>
   
    <Footer/>
  </div>
  );
};

export default Prochects;