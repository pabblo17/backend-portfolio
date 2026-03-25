"use client";

import { ExternalLink, Folder } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Projects() {
  const { data, t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header con icono */}
        <div className="flex flex-col items-center mb-12">
          <Folder className="text-gray-400 mb-4" size={48} />
          <h2 className="text-4xl font-bold text-center text-white">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-blue-400 mt-4"></div>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
            >
              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-medium border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>{t.projects.code}</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>{t.projects.demo}</span>
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Card placeholder para tercer proyecto */}
          <div className="bg-gray-800/30 rounded-lg border border-dashed border-gray-600 p-6 flex flex-col items-center justify-center min-h-[280px]">
            <Folder className="text-gray-600 mb-3" size={40} />
            <p className="text-gray-500 text-sm text-center">
              Próximo proyecto
            </p>
          </div>
        </div>

        {/* Enlace a más proyectos en GitHub */}
        <div className="text-center mt-12">
          <a
            href={data.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300"
          >
            <ExternalLink size={20} />
            <span>Ver más proyectos en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
