"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { data, t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contenido Principal - Diseño minimalista */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {data.personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
            {data.personalInfo.role}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {data.personalInfo.bio}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition font-medium"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
