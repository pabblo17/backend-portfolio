"use client";

import { Mail, FileDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

export default function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "es"
              ? "¿Listo para trabajar juntos?"
              : "Ready to work together?"}
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            {language === "es"
              ? "Estoy disponible para nuevos proyectos y colaboraciones. Si buscas un desarrollador comprometido con la calidad y los resultados, hablemos."
              : "I'm available for new projects and collaborations. If you're looking for a developer committed to quality and results, let's talk."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg"
            >
              <Mail size={24} />
              <span>{language === "es" ? "Contáctame" : "Contact Me"}</span>
            </Link>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300 font-medium text-lg"
            >
              <FileDown size={24} />
              <span>{language === "es" ? "Descargar CV" : "Download CV"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
