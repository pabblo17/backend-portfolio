import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with Next.js 14, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
