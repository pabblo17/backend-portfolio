"use client";

import {
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  Briefcase,
  Code,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

export default function ContactPage() {
  const { language } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description:
        language === "es"
          ? "Para consultas generales y proyectos."
          : "For general inquiries and projects.",
      value: "contacto@ejemplo.com",
      link: "mailto:contacto@ejemplo.com",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description:
        language === "es"
          ? "Para consultas rápidas y directas."
          : "For quick and direct inquiries.",
      value: "+504 3175 1455",
      link: "https://wa.me/50431751455",
      color: "green",
    },
    {
      icon: Briefcase,
      title: "LinkedIn",
      description:
        language === "es"
          ? "Conecta profesionalmente."
          : "Connect professionally.",
      value: language === "es" ? "Ver perfil" : "View profile",
      link: "https://linkedin.com/in/ejemplo",
      color: "blue",
    },
    {
      icon: Code,
      title: "GitHub",
      description:
        language === "es"
          ? "Explora mi código y proyectos."
          : "Explore my code and projects.",
      value: language === "es" ? "Ver repositorios" : "View repositories",
      link: "https://github.com/ejemplo",
      color: "gray",
    },
    {
      icon: MapPin,
      title: language === "es" ? "Ubicación" : "Location",
      description:
        language === "es" ? "Base de operaciones." : "Base of operations.",
      value: "Honduras, C.A.",
      link: null,
      color: "purple",
    },
    {
      icon: Calendar,
      title: language === "es" ? "Agenda" : "Schedule",
      description:
        language === "es" ? "¿Listo para iniciar?" : "Ready to start?",
      value: language === "es" ? "Solicitar reunión" : "Request meeting",
      link: "https://calendly.com/ejemplo",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { icon: string; hover: string } } = {
      blue: { icon: "text-blue-400", hover: "hover:border-blue-400" },
      green: { icon: "text-green-400", hover: "hover:border-green-400" },
      gray: { icon: "text-gray-400", hover: "hover:border-gray-400" },
      purple: { icon: "text-purple-400", hover: "hover:border-purple-400" },
      orange: { icon: "text-orange-400", hover: "hover:border-orange-400" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header simple */}
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:text-blue-400 transition">
            ← {language === "es" ? "Volver" : "Back"}
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {language === "es" ? "Hablemos" : "Let's Talk"}
            </h1>
            <p className="text-gray-400 text-lg">
              {language === "es"
                ? "¿Tienes una idea innovadora o necesitas ayuda con un proyecto técnico? Estoy listo para escuchar y colaborar."
                : "Have an innovative idea or need help with a technical project? I'm ready to listen and collaborate."}
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const colors = getColorClasses(method.color);
              const CardWrapper = method.link ? "a" : "div";
              const cardProps = method.link
                ? {
                    href: method.link,
                    target: method.link.startsWith("http")
                      ? "_blank"
                      : undefined,
                    rel: method.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};

              return (
                <CardWrapper
                  key={idx}
                  {...cardProps}
                  className={`bg-gray-800/50 rounded-lg border border-gray-700 p-6 transition-all duration-300 ${colors.hover} ${method.link ? "cursor-pointer hover:shadow-lg" : ""}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center mb-4`}
                    >
                      <Icon className={`${colors.icon}`} size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>
                    <p className={`${colors.icon} font-medium`}>
                      {method.value}
                    </p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              {language === "es"
                ? "Normalmente respondo en menos de 24 horas."
                : "I usually respond within 24 hours."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
