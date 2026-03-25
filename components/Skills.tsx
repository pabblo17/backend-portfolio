"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { techIconMap } from "./icons/TechSvgIcons";

export default function Skills() {
  const { data, t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.skills.title}
        </h2>

        {/* Iconos simples por categoría */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                {skillGroup.category}
              </h3>

              {/* Grid de iconos */}
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((tech, techIdx) => {
                  const IconComponent = techIconMap[tech];
                  return (
                    <div key={techIdx} className="group relative" title={tech}>
                      {IconComponent ? (
                        <IconComponent
                          size={40}
                          className="hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400">
                          {tech.slice(0, 3)}
                        </div>
                      )}

                      {/* Tooltip simple */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {tech}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
