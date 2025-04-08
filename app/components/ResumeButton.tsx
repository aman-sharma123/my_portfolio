'use client';

import { FaDownload } from 'react-icons/fa';

export default function ResumeButton() {
  return (
    <a
      href="/Aman_Full_Stack.pdf"
      download
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
    >
      <FaDownload className="text-white" />
      Download Resume
    </a>
  );
}
