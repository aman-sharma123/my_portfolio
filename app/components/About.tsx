'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Text Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm Aman, a passionate Full Stack Developer focused on building smooth, responsive, and dynamic web experiences. I love clean code, modern UI, and solving real-world problems through tech.
          </p>
          <p className="text-gray-700 text-md mt-4">
            Currently sharpening my React, Next.js, and backend skills to land my first dev role. My ultimate mission? 🚀 Build one of the world’s biggest AI-powered game companies.
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src="/profile-pic.png"
            alt="Aman Full Stack"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover border-4 border-blue-200"
          />
        </motion.div>
      </div>
    </section>
  );
}
