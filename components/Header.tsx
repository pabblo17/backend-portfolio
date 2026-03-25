"use client";

import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  // smooth scroll to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold text-white">PCH</div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-medium">
                {language === "es" ? "Disponible" : "Available"}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.contact}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition"
              title={t.nav.language}
            >
              <Languages size={16} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.contact}
            </button>
            <div className="flex gap-4 pt-2 border-t border-gray-700 mt-2 pt-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Languages size={20} />
                <span className="text-sm">
                  {language === "en" ? "ES" : "EN"}
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
