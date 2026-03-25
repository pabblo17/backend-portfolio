// Componente interactivo de iconos tecnológicos con animaciones

"use client";

import { useState } from "react";
import { techIconMap } from "./TechSvgIcons";

interface InteractiveTechIconProps {
  tech: string;
  size?: number;
}

export function InteractiveTechIcon({ tech, size = 48 }: InteractiveTechIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = techIconMap[tech];
  
  if (!IconComponent) {
    return (
      <div 
        className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400 transition-all duration-300 ${
          isHovered ? 'scale-110 border-green-400' : 'scale-100 border-gray-600'
        } border`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {tech.slice(0, 3)}
      </div>
    );
  }

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icono SVG */}
      <IconComponent 
        size={size} 
        className={`${isHovered ? 'drop-shadow-lg' : ''}`}
      />
      
      {/* Tooltip */}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {tech}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
      
      {/* Efecto de brillo */}
      {isHovered && (
        <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}

interface TechGridProps {
  technologies: string[];
  title: string;
}

export function TechGrid({ technologies, title }: TechGridProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
      <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        {title}
      </h3>
      
      {/* Grid de iconos interactivos */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {technologies.map((tech, idx) => (
          <InteractiveTechIcon 
            key={`${tech}-${idx}`} 
            tech={tech} 
            size={48}
          />
        ))}
      </div>
    </div>
  );
}
