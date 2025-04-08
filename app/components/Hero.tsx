'use client';

import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
            >
                Hi, I’m Aman Sharma
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl"
            >
                An Aspiring Full Stack Developer passionate about building sleek web experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <div className="mt-6">
                    <ResumeButton />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-6"
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                    View My Work
                </a>
            </motion.div>
        </section >
    );
}
