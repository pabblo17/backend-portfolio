"use client";

import { Mail, FileDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";

export default function Contact() {
  const { c } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg"
            >
              <Mail size={24} />
              <span>{c.contactCTA.contactButton}</span>
            </Link>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg border border-gray-700 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300 font-medium text-lg"
            >
              <FileDown size={24} />
              <span>{c.contactCTA.downloadCV}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
