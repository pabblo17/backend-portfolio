"use client";

import { MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { data, t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Foto Profile */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-700 border-4 border-blue-500 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder para foto - reemplazar con imagen real */}
              <div className="text-center">
                <div className="text-6xl text-gray-400 mb-2">👨‍💻</div>
                <p className="text-gray-400 text-sm">Profile Photo</p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {data.personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
              {data.personalInfo.role}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {data.personalInfo.bio}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 mb-8">
              <MapPin size={20} />
              <span>{data.personalInfo.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                {t.hero.getInTouch}
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-gray-800 transition font-medium"
              >
                {t.hero.viewProjects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
