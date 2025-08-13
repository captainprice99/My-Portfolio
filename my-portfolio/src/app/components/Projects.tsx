'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "This site: a vibrant single‑page portfolio built with Next.js 15, Tailwind CSS, Framer Motion animations, and tsparticles background. Smooth scroll navigation, responsive layout, EmailJS contact form, and deployed on Vercel.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "tsparticles", "EmailJS", "Vercel"],
      github: "https://github.com",
      demo: "#",
      featured: true
    },
    {
      title: "News Article Logical Fallacy Detector AI Agent",
      description:
        "Python-based agent using LangChain + RAG to analyze articles for logical fallacies. Pulls live news via SerperAPI, enriches context with Wikipedia scraping, and runs a two‑stage LLM chain to produce fallacy and counterfactual reports.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "LangChain", "RAG", "SerperAPI", "BeautifulSoup", "GPT-4.1-mini"],
      github: "https://github.com",
      demo: "#",
      featured: true
    },
    {
      title: "VoyageWatch – Sea of Thieves Event Tracker",
      description:
        "Multiplayer web app for posting and editing in‑game events on a live Leaflet map. Real‑time updates with Socket.IO, Spring Boot backend with REST + WebSockets, MongoDB storage, Redis TTL caching, and Dockerized services.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Leaflet.js", "Socket.IO", "Spring Boot", "MongoDB", "Redis", "Docker"],
      github: "https://github.com",
      demo: "#",
      featured: true
    },
    {
      title: "Star Wars: Dataverse",
      description:
        "Star Wars encyclopedia and battle simulator. SWAPI-powered searches, live character duels with Socket.IO, animated with Framer Motion, secure auth via Firebase, state with Zustand, routing via React Router, and Material UI styling.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.IO", "Framer Motion", "SWAPI", "Firebase", "Zustand", "React Router", "Material UI"],
      github: "https://github.com",
      demo: "#",
      featured: false
    },
    {
      title: "Functional Prosthetic Hand with Real-Time Feedback",
      description:
        "Built a functional prosthetic hand prototype with real‑time gesture recognition (Python, OpenCV). Implemented precise motor control in C++ and TensorFlow models to adapt grip strength from user feedback. Frontend control interface in React + TypeScript; deployed services on AWS EC2 with Docker; styled UI with Bootstrap and used Jupyter for data analysis/model tuning.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "OpenCV", "C++", "TensorFlow", "React", "TypeScript", "AWS EC2", "Docker", "Bootstrap", "Jupyter"],
      github: "https://github.com",
      demo: "#",
      featured: false
    },
    {
      title: "SonicDB – Music Industry Insights Engine",
      description:
        "Designed a relational schema in PostgreSQL for artists/albums/genres. Integrated Kaggle + web‑scraped datasets; developed optimized SQL to extract insights on performance, trends, and sales. Used pgAdmin for administration, modeling, and query optimization to ensure consistency and performance.",
      image: "/api/placeholder/400/250",
      technologies: ["PostgreSQL", "SQL", "pgAdmin", "Data Modeling", "ETL", "Web Scraping"],
      github: "https://github.com",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my work, creativity, and technical skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
                  project.featured ? 'ring-2 ring-purple-500/20' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCode className="text-6xl text-white/80" />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            <FaGithub />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
