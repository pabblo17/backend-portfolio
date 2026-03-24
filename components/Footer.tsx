"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Footer() {
  const { data, t } = useTranslation();

  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} {data.personalInfo.name}.{" "}
          {t.footer.rights}
        </p>
        <p className="text-sm text-gray-500">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
