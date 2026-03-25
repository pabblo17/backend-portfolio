"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { data, t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contenido Principal - Estilo PCH con saludo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {language === "es" ? "Hola soy" : "Hi I'm"}{" "}
              {data.personalInfo.name}
            </h1>
          </div>

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
              className="px-8 py-3 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition font-medium"
            >
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
