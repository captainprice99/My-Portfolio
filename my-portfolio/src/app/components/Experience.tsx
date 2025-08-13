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
      title: "Software Engineer Intern",
      company: "Calero",
      location: "Rochester, NY",
      period: "Sep 2025 – Dec 2025",
      description:
        "Joining Calero this fall to build full‑stack features: C#/.NET services on the backend, React on the frontend, and Azure cloud services. Contributing within agile ceremonies and shipping production‑grade code.",
      skills: ["C#", ".NET", "React", "Azure", "Agile"],
      isPlaceholder: false
    },
    {
      title: "DigITal Accelerator Development Program Intern – Enterprise IT",
      company: "Bristol Myers Squibb (Translational Medicine & Semantic Data Products Team)",
      location: "Lawrenceville, NJ",
      period: "Jun 2025 – Aug 2025",
      description:
        "Built a clinical trial analytics dashboard (20M+ entries, 30+ SEND datasets) using Spotfire, AWS Athena, PostgreSQL, and Python; shipped an automated data access tool with JS SDKs and custom MCP servers integrated with GPT‑4.1; owned unit tests and LLM prompt eval in SDLC using AWS Lambda/CloudWatch and pytest.",
      skills: ["Spotfire", "AWS Athena", "PostgreSQL", "Python", "AWS Lambda", "CloudWatch", "Pytest", "GPT-4.1", "MCP"],
      isPlaceholder: false
    },
    {
      title: "Software Engineer Lead",
      company: "Campus Coders Crew",
      location: "College Park, MD",
      period: "Feb 2025 – Present",
      description:
        "Led full‑stack builds for 10+ student orgs supporting 8,000+ students. Coordinated agile workflows for 70+ developers across 9 teams; standardized PRs and lifecycles. Delivered MERN apps on AWS/MongoDB Atlas with resilient REST APIs.",
      skills: ["React", "Node.js", "Express", "MongoDB Atlas", "AWS", "REST APIs", "Agile"],
      isPlaceholder: false
    },
    {
      title: "Teaching Assistant",
      company: "University of Maryland Department of Computer Science",
      location: "College Park, MD",
      period: "Aug 2024 – Dec 2024",
      description:
        "Mentored students in office hours; evaluated exams/coursework with detailed feedback; proctored quizzes/exams while upholding academic integrity.",
      skills: ["Mentorship", "Teaching", "Assessment", "Communication"],
      isPlaceholder: false
    },
    {
      title: "Data Science / Machine Learning Intern",
      company: "Sensable Inc.",
      location: "Baltimore, MD",
      period: "Jun 2024 – Aug 2024",
      description:
        "Architected CI/CD with Jenkins + Kubernetes for mobile app deployments; designed CNN/LSTM models for physiological signals (+26% accuracy over baseline); optimized MySQL schemas to cut query time 30% and 2x throughput.",
      skills: ["Jenkins", "Kubernetes", "CNN", "LSTM", "Python", "MySQL", "Data Engineering"],
      isPlaceholder: false
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Bill Fagan Lab",
      location: "College Park, MD",
      period: "Jan 2024 – May 2024",
      description:
        "Analyzed antelope heart‑rate datasets in Python/Pandas; detected and mitigated biologger errors to improve data accuracy by 32%. Built multithreaded NumPy parsers (+125% parsing speed). Collaborated with Dr. William Fagan using Jupyter for analysis/visualization.",
      skills: ["Python", "Pandas", "NumPy", "Multithreading", "Jupyter"],
      isPlaceholder: false
    },
    {
      title: "Programming Instructor (Volunteer)",
      company: "T20 Prep",
      location: "Edison, NJ (Remote)",
      period: "Oct 2023 – Dec 2023; Aug 2024 – Present",
      description:
        "Taught introductory Java to high school students; guided project development and exam preparation in a remote setting.",
      skills: ["Java", "Instruction", "Curriculum", "Remote Teaching"],
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
