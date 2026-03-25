"use client";

import {
  Briefcase,
  Award,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useState } from "react";

export default function Experience() {
  const { data, t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id],
    );
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.experience.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-400" />
              {t.experience.workExperience}
            </h3>

            {/* Timeline Container */}
            <div className="relative">
              {/* Línea central del timeline */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-400 to-green-600"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {data.experience.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Nodo del timeline */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 z-10">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                    >
                      <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 overflow-hidden">
                        {/* Header - Siempre visible */}
                        <div
                          className="p-6 cursor-pointer select-none"
                          onClick={() => toggleCard(exp.id)}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-2">
                                {exp.position}
                              </h4>
                              <p className="text-blue-400 font-medium text-lg mb-3">
                                {exp.company}
                              </p>

                              {/* Meta Info */}
                              <div
                                className={`flex flex-wrap gap-4 text-sm text-gray-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                              >
                                <div className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  <span>{exp.location || "Remote"}</span>
                                </div>
                              </div>
                            </div>

                            {/* Toggle Button */}
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center text-green-400 hover:bg-green-400/30 transition-colors">
                                {expandedCards.includes(exp.id) ? (
                                  <ChevronUp size={16} />
                                ) : (
                                  <ChevronDown size={16} />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Desplegable */}
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            expandedCards.includes(exp.id)
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="px-6 pb-6 border-t border-gray-700">
                            {/* Description */}
                            <div className="pt-4 mb-4">
                              <p className="text-gray-300 leading-relaxed">
                                {exp.description}
                              </p>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-gray-400 mb-3">
                                {t.experience.achievements ||
                                  "Logros destacados"}
                              </p>
                              {exp.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-sm text-gray-300 leading-relaxed">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
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
