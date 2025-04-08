'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 text-center border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Aman Sharma. All rights reserved.
        </h3>

        <div className="flex gap-6 text-xl text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/aman-sharma123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-sharma-shadowk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amanshpq123@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
