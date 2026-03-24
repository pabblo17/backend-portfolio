"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Skills() {
  const { data, t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.skills.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:shadow-lg hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
