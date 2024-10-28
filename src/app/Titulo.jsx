"use client"

import React, { useState, useCallback } from 'react';

const InteractiveHeading = ({ 
  text = "RabuDev", 
  baseColor = "text-gray-800", 
  hoverColor = "text-blue-600",
  depthColor = "text-gray-400",
  layers = 60
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Limitamos el ángulo máximo para reducir el efecto de "temblor"
    const maxRotation = 45;
    const angleX = (distanceY / (rect.height / 2)) * maxRotation;
    const angleY = -(distanceX / (rect.width / 2)) * maxRotation;

    setRotation({ x: angleX, y: angleY });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const layerElements = Array.from({ length: layers }, (_, index) => (
    <span
      key={index}
      className={`absolute inset-0 ${depthColor}`}
      style={{
        transform: `translateZ(${index * -1}px)`,
        textShadow: `1px 1px 0px rgba(0,0,0,0.1)`,
        opacity: (layers - index) / layers
      }}
    >
      {text}
    </span>
  ));

  return (
    <div 
      className={`relative text-5xl sm:text-7xl p-8 font-extrabold text-center cursor-pointer 
                  transition-all duration-300 ease-out ${isHovered ? hoverColor : baseColor}`}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
        width: '100%', // Ancho del 25% más
        height: '100%'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative inline-block transform transition-transform duration-300 ease-out hover:scale-110">
        {layerElements}
        <span className="relative">{text}</span>
      </span>
    </div>
  );
};

export default InteractiveHeading;


