"use client";

import { personalInfo } from "@/lib/data";
import { Mail, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
        body: JSON.stringify(formData)
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
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
              >
                <Mail className="text-blue-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
              >
                <ExternalLink className="text-blue-400" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
              >
                <ExternalLink className="text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-white mb-2">
                Open to Opportunities
              </h4>
              <p className="text-gray-300 text-sm">
                I&apos;m currently open to backend development opportunities, consulting projects, and collaborations. Feel free to reach out!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-700 text-white"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={18} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
