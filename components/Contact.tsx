"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
} from "./icons/SocialIcons";

export default function Contact() {
  const { data, t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: add proper error handling and validation
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.contact.title}
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t.contact.contactInfo}
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${data.personalInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <Mail className="text-blue-400" />
                <span>{data.personalInfo.email}</span>
              </a>
              <a
                href={data.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
              >
                <LinkedInIcon size={20} className="text-blue-400" />
                <span>{t.contact.linkedinProfile || "LinkedIn Profile"}</span>
              </a>
              <a
                href={data.personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition"
              >
                <InstagramIcon size={20} className="text-blue-400" />
                <span>{t.contact.instagramProfile || "Instagram Profile"}</span>
              </a>
              <a
                href={data.personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition"
              >
                <FacebookIcon size={20} className="text-blue-400" />
                <span>{t.contact.facebookProfile || "Facebook Profile"}</span>
              </a>
              <a
                href={data.personalInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition"
              >
                <TikTokIcon size={20} className="text-blue-400" />
                <span>{t.contact.tiktokProfile || "TikTok Profile"}</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2">
                {t.contact.openToOpportunities}
              </h4>
              <p className="text-gray-300 text-sm">
                {t.contact.opportunitiesText}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t.contact.sendMessage}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={18} />
                {status === "sending" ? t.contact.sending : t.contact.send}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  {t.contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  {t.contact.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
