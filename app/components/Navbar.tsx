'use client';

import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Aman.dev</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}