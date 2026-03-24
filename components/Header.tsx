"use client";

import { Mail, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            {personalInfo.name}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-gray-300 hover:text-white transition">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-gray-300 hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-gray-300 hover:text-white transition">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition">
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-left text-gray-300 hover:text-white transition">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-left text-gray-300 hover:text-white transition">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-left text-gray-300 hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-left text-gray-300 hover:text-white transition">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-gray-300 hover:text-white transition">
              Contact
            </button>
            <div className="flex gap-4 pt-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                <Mail size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                <Mail size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
