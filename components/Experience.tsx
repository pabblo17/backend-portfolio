"use client";

import { Briefcase, Award } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Experience() {
  const { data, t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Briefcase className="text-gray-400 mb-4" size={48} />
          <h2 className="text-4xl font-bold text-center text-white">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1 bg-blue-400 mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            {/* Timeline Container */}
            <div className="relative">
              {/* Línea vertical del timeline */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-8">
                    {/* Nodo del timeline */}
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-900"></div>

                    {/* Content Card */}
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
                      {/* Header con período */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="text-xl font-bold text-white">
                          {exp.position}
                        </h4>
                        <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company */}
                      <p className="text-gray-300 mb-4 flex items-center gap-2">
                        {exp.company}
                        <span className="text-gray-500">→</span>
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-medium border border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <Award className="text-green-400" />
              {t.experience.certifications}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-gray-800 to-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-400/30 transition-colors">
                      <Award size={16} className="text-green-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
