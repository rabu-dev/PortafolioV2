"use client";
import React from 'react';
import { useState, useEffect } from 'react';
/*


*/
const ImageComponent = ({ 
  imageId, 
  size = 'thumbnail',
  className = '',
  fallbackText = 'Cargando imagen...'
}) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('http://localhost:1337/api/upload/files');
        
        if (!response.ok) {
          throw new Error(`¡Error HTTP! estado: ${response.status}`);
        }
        
        const responseData = await response.json();
        console.log('Respuesta completa:', responseData);

        // Verifica si responseData es un array directamente o está dentro de una propiedad
        let images = Array.isArray(responseData) ? responseData : responseData.data;
        
        if (!Array.isArray(images)) {
          console.error('Estructura de respuesta inesperada:', responseData);
          throw new Error('Formato de respuesta inválido');
        }

        const imageData = images.find(img => img.id === imageId);
        console.log('Imagen encontrada:', imageData);
        
        if (!imageData) {
          throw new Error('Imagen no encontrada');
        }
        
        setImage(imageData);
      } catch (error) {
        console.error('Error completo:', error);
        setError(error instanceof Error ? error.message : 'Error al cargar la imagen');
      } finally {
        setIsLoading(false);
      }
    };

    if (imageId) {
      fetchImage();
    }
  }, [imageId]);

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-md w-full h-48 flex items-center justify-center">
        <p className="text-gray-500">{fallbackText}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-700">
          {error}
        </p>
      </div>
    );
  }

  // Verifica la estructura de la imagen antes de renderizar
  const imageUrl = image?.url || image?.formats?.[size]?.url;
  
  if (!imageUrl) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-yellow-700">
          Imagen o tamaño solicitado no disponible
        </p>
      </div>
    );
  }

  return (
    <img
      src={`http://localhost:1337/${imageUrl}`}
      alt={image.name || 'Imagen'}
      className={`rounded-md object-cover ${className}`}
      loading="lazy"
    />
  );
};

export default ImageComponent;