'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Coming Soon",
      location: "TBD",
      period: "Summer 2025",
      description: "Exciting opportunities ahead! Currently seeking internship positions to apply my skills in real-world projects and contribute to innovative solutions.",
      skills: ["React", "Node.js", "Python", "AWS"],
      isPlaceholder: true
    },
    {
      title: "Research Assistant",
      company: "University of Maryland",
      location: "College Park, MD",
      period: "Fall 2024 - Present",
      description: "Working on cutting-edge research projects in computer science, contributing to academic publications and exploring new technologies.",
      skills: ["Python", "Machine Learning", "Data Analysis", "Research"],
      isPlaceholder: true
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2023 - Present",
      description: "Developing various web applications and contributing to open-source projects. Building modern, responsive applications with the latest technologies.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      isPlaceholder: false
    }
  ];

  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey and growth in the tech industry
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    className="w-full h-full bg-white rounded-full"
                  />
                </div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                      exp.isPlaceholder 
                        ? 'border-dashed border-purple-500/50 hover:border-purple-400 hover:shadow-purple-500/20' 
                        : 'border-slate-700/50 hover:border-purple-500/50 hover:shadow-purple-500/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          exp.isPlaceholder 
                            ? 'bg-gradient-to-br from-purple-600/50 to-pink-600/50' 
                            : 'bg-gradient-to-br from-purple-600 to-pink-600'
                        }`}>
                          <FaBriefcase className="text-white text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                          <p className="text-purple-400 font-semibold text-base sm:text-lg">{exp.company}</p>
                        </div>
                      </div>
                      {exp.isPlaceholder && (
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <FaMapMarkerAlt className="text-purple-400 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <FaCalendarAlt className="text-purple-400 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {exp.isPlaceholder && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl pointer-events-none" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Every experience is a stepping stone towards excellence. Ready to take on new challenges and make meaningful contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
