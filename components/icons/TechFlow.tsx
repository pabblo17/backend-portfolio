// Componente de flujo de iconos tecnológicos con animaciones direccionales

"use client";

import { useState, useEffect } from "react";
import { techIconMap } from "./TechSvgIcons";

interface MovingIconProps {
  tech: string;
  direction: "up" | "down" | "left" | "right" | "diagonal-up" | "diagonal-down";
  delay: number;
  duration: number;
  size?: number;
}

function MovingIcon({
  tech,
  direction,
  delay,
  duration,
  size = 40,
}: MovingIconProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moves = {
      up: { x: 0, y: -80 },
      down: { x: 0, y: 80 },
      left: { x: -80, y: 0 },
      right: { x: 80, y: 0 },
      "diagonal-up": { x: 60, y: -60 },
      "diagonal-down": { x: -60, y: 60 },
    };

    const animateIcon = () => {
      setPosition(moves[direction]);

      setTimeout(() => {
        setPosition({ x: 0, y: 0 });
      }, duration);
    };

    const startAnimation = setTimeout(() => {
      animateIcon();

      // Bucle infinito
      const interval = setInterval(() => {
        animateIcon();
      }, duration + 1000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startAnimation);
  }, [direction, delay, duration]);

  const IconComponent = techIconMap[tech];

  return (
    <div
      className="absolute transition-all ease-in-out opacity-80 hover:opacity-100"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {IconComponent ? (
        <IconComponent
          size={size}
          className="hover:scale-125 transition-transform duration-300"
        />
      ) : (
        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400">
          {tech.slice(0, 3)}
        </div>
      )}
    </div>
  );
}

interface TechFlowProps {
  technologies: string[];
  title: string;
  flowDirection: "mixed" | "circular" | "wave";
}

export function TechFlow({
  technologies,
  title,
  flowDirection = "mixed",
}: TechFlowProps) {
  const directions: MovingIconProps["direction"][] = [
    "up",
    "down",
    "left",
    "right",
    "diagonal-up",
    "diagonal-down",
  ];

  const getDirectionForIndex = (
    index: number,
  ): MovingIconProps["direction"] => {
    if (flowDirection === "mixed") {
      return directions[
        index % directions.length
      ] as MovingIconProps["direction"];
    } else if (flowDirection === "circular") {
      const circularDirections: MovingIconProps["direction"][] = [
        "right",
        "diagonal-down",
        "down",
        "diagonal-up",
        "left",
        "diagonal-up",
      ];
      return circularDirections[index % circularDirections.length];
    } else if (flowDirection === "wave") {
      const waveDirections: MovingIconProps["direction"][] = [
        "up",
        "diagonal-up",
        "right",
        "diagonal-down",
        "down",
        "diagonal-down",
        "left",
        "diagonal-up",
      ];
      return waveDirections[index % waveDirections.length];
    }
    return "right";
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 overflow-hidden">
      <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        {title}
      </h3>

      {/* Contenedor de flujo */}
      <div className="relative h-64 bg-gray-900/50 rounded-lg overflow-hidden">
        {/* Iconos en movimiento */}
        {technologies.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="absolute"
            style={{
              left: `${20 + (idx % 4) * 20}%`,
              top: `${20 + Math.floor(idx / 4) * 25}%`,
            }}
          >
            <MovingIcon
              tech={tech}
              direction={getDirectionForIndex(idx)}
              delay={idx * 200}
              duration={3000 + idx * 200}
              size={36}
            />
          </div>
        ))}

        {/* Indicadores de dirección */}
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Leyenda */}
      <div className="mt-4 text-center text-xs text-gray-400">
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>Tecnologías en flujo continuo</span>
        </div>
      </div>
    </div>
  );
}
