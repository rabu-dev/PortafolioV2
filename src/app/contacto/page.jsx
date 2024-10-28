"use client";
import { useState } from 'react';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../Navbar'; 

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mesague: '', // Cambié a "mesague"
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('http://localhost:1337/api/contactos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            date: new Date().toISOString(),
            mesague: formData.mesague, // Usando "mesague" en el payload
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Detalles del error:', errorData);
        throw new Error(`Error en el envío: ${response.status} ${response.statusText}`);
      }

      setStatus('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', mesague: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un error al enviar el mensaje.');
    }
  };

  return (
    <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
     
     
      <main>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-white text-3xl font-bold mb-4">Contáctame</h2>
          <div className="flex flex-col mb-4">
            <label className="text-white">Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white">Mensaje:</label>
            <textarea
              name="mesague"
              value={formData.mesague}
              onChange={handleChange}
              className="bg-gray-800 text-white p-2 rounded-md"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Enviar</button>
          <p className="text-white text-center mt-4">{status}</p>
        </form>
    </main>
      <Footer/>
      </div>
    
    </>
  );
}
