"use client";

import { Mail, Menu, X, Languages, ExternalLink } from "lucide-react";
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
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            {data.personalInfo.name}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition px-3 py-1 rounded-lg hover:bg-gray-800"
              title={
                language === "en" ? "Cambiar a Español" : "Switch to English"
              }
            >
              <Languages size={20} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>
            <a
              href={data.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
              title="LinkedIn"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={data.personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition"
              title="Instagram"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={data.personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
              title="Facebook"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={data.personalInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition"
              title="TikTok"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href={`mailto:${data.personalInfo.email}`}
              className="text-gray-300 hover:text-white transition"
              title="Email"
            >
              <Mail size={20} />
            </a>
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
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-left text-gray-300 hover:text-white transition"
            >
              {t.nav.experience}
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
              <a
                href={data.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                title="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={data.personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition"
                title="Instagram"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={data.personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition"
                title="Facebook"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={data.personalInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition"
                title="TikTok"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={`mailto:${data.personalInfo.email}`}
                className="text-gray-300 hover:text-white transition"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
