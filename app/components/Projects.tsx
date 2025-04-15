'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Dev Portfolio Website',
    description: 'Sleek personal portfolio built with Next.js, TailwindCSS, and Framer Motion.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    link: 'https://my-portfolio-chi-beryl-50.vercel.app/',
    github: 'https://github.com/aman-sharma123/my_portfolio.git',
  },
  {
    title: 'AI Content Generator',
    description: 'A full-stack web app to generate AI content, built using Next.js and TypeScript.',
    tech: ['PostgreSQL', 'Express', 'React', 'Node.js'],
    link: 'https://ai-content-generator-aman.vercel.app/',
    github: 'https://github.com/aman-sharma123/ai-content-generator',
  },
  {
    title: 'Simple Weather App',
    description: 'A basic weather application that fetches real-time weather data using the OpenWeatherMap API. Built with HTML5, CSS3, and JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'OpenWeatherMap API'],
    link: 'https://simple-weather-app-rho-ochre.vercel.app/', // <-- Replace with actual link if deployed
    github: 'https://github.com/aman-sharma123/simple_weather_app.git' // <-- Replace with actual repo link
  },  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6 text-sm">
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  className="text-gray-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
