"use client";

import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Projects() {
  const { data, t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.projects.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:shadow-xl hover:border-gray-600 transition"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    {t.projects.keyHighlights}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">{t.projects.code}</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">{t.projects.demo}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
