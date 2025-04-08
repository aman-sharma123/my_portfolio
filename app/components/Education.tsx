'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-600 mb-8 text-center"
        >
          <GraduationCap className="inline-block mr-2 mb-1" />
          Education
        </motion.h2>

        <div className="space-y-8">
          {/* Entry 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">B.Tech in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-300">XYZ University, India</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Graduated with a focus on Full Stack Development, AI, and Game Development fundamentals.
            </p>
          </motion.div>

          {/* You can add more entries like this if needed */}
        </div>
      </div>
    </section>
  );
}
