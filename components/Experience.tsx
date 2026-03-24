"use client";

import { Briefcase, Award } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Experience() {
  const { data, t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t.experience.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-400" />
              {t.experience.workExperience}
            </h3>
            <div className="space-y-8">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-4 border-blue-400 pl-6 pb-6"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {exp.position}
                      </h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Award className="text-blue-400" />
              {t.experience.certifications}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                >
                  <p className="text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
