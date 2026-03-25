"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import Link from "next/link";

export default function BlogPage() {
  const { c, language } = useTranslation();

  // Artículo de ejemplo con nota de IA
  const blogPosts = [
    {
      id: 1,
      title: c.blog.samplePost.title,
      excerpt: c.blog.samplePost.excerpt,
      date: "2024-03-15",
      readTime: "5 min",
      aiAssisted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header simple */}
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white hover:text-blue-400 transition">
            ← {c.blog.backButton}
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {c.blog.title}
              </h1>
              <p className="text-gray-400 text-lg">{c.blog.description}</p>
            </div>

            {/* Blog posts */}
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                >
                  <div className="flex flex-col gap-4">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {new Date(post.date).toLocaleDateString(
                            language === "es" ? "es-ES" : "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>
                          {post.readTime}{" "}
                          {language === "es" ? "lectura" : "read"}
                        </span>
                      </div>
                      {post.aiAssisted && (
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-500/20">
                          {language === "es"
                            ? "✨ Escrito con ayuda de IA"
                            : "✨ AI-assisted"}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
                      >
                        {language === "es" ? "Leer más" : "Read more"}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state message */}
            {blogPosts.length === 1 && (
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                  {language === "es"
                    ? "Más artículos próximamente..."
                    : "More articles coming soon..."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
