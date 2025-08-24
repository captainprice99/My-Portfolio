'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Engineer Co-Op",
      company: "Calero",
      location: "Rochester, NY",
      period: "Sep 2025 – Dec 2025",
      points: [
        "Build full‑stack features across C#/.NET services (backend) and React (frontend)",
        "Leverage Azure cloud services; contribute within agile ceremonies",
        "Ship production‑grade code with code reviews and CI/CD"
      ],
      skills: ["C#", ".NET", "React", "Azure", "Agile"],
      isPlaceholder: false
    },
    {
      title: "DigITal Accelerator Development Program Intern – Enterprise IT",
      company: "Bristol Myers Squibb (Translational Medicine & Semantic Data Products Team)",
      location: "Lawrenceville, NJ",
      period: "Jun 2025 – Aug 2025",
      points: [
        { text: "Built clinical trial analytics dashboard (20M+ entries, 30+ SEND) with Spotfire, AWS Athena, PostgreSQL, Python", subs: [
          "Accelerated drug development for 70+ scientists",
          "Partnered with stakeholders to iteratively refine KPIs, filters, and UX"
        ]},
        { text: "Wrote LLM prompts for database auto access provisioning; saves 5+ hrs/week of manual approvals", subs: [
          "Reduced consumer access wait time from hours to <5 minutes"
        ]},
        "Shipped automated data access tool (JS SDKs + custom MCP servers, GPT‑4.1) used by 15,000+ employees for daily tasks",
        {
          text: "Conducted unit testing and LLM prompt evaluation as part of SDLCs (AWS Lambda, CloudWatch, pytest)", subs: [
            "Ensured streamlined data access for 2000+ internal users"
          ]
        }
      ],
      skills: ["Spotfire", "AWS Athena", "PostgreSQL", "Python", "AWS Lambda", "CloudWatch", "Pytest", "GPT-4.1", "MCP"],
      isPlaceholder: false
    },
    {
      title: "Software Engineer Lead",
      company: "Campus Coders Crew",
      location: "College Park, MD",
      period: "Feb 2025 – Present",
      points: [
        "Led full‑stack builds for 10+ orgs supporting 8,000+ students",
        "Coordinated agile workflows for 70+ developers across 9 teams",
        "Standardized PRs, branching, and release lifecycles",
        "Delivered MERN apps on AWS/MongoDB Atlas with resilient REST APIs"
      ],
      skills: ["React", "Node.js", "Express", "MongoDB Atlas", "AWS", "REST APIs", "Agile"],
      isPlaceholder: false
    },
    {
      title: "Teaching Assistant",
      company: "University of Maryland Department of Computer Science",
      location: "College Park, MD",
      period: "Aug 2024 – Dec 2024",
      points: [
        "Mentored students in office hours (concepts, debugging, project guidance)",
        "Evaluated exams and coursework with detailed feedback",
        "Proctored quizzes/exams; upheld academic integrity"
      ],
      skills: ["Mentorship", "Teaching", "Assessment", "Communication"],
      isPlaceholder: false
    },
    {
      title: "Data Science / Machine Learning Intern",
      company: "Sensable Inc.",
      location: "Baltimore, MD",
      period: "Jun 2024 – Aug 2024",
      points: [
        "Architected CI/CD with Jenkins + Kubernetes for mobile deployments",
        "Designed CNN/LSTM for physiological signals (+26% accuracy vs baseline)",
        "Optimized MySQL schemas: −30% query time, 2× throughput"
      ],
      skills: ["Jenkins", "Kubernetes", "CNN", "LSTM", "Python", "MySQL", "Data Engineering"],
      isPlaceholder: false
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Bill Fagan Lab",
      location: "College Park, MD",
      period: "Jan 2024 – May 2024",
      points: [
        "Analyzed antelope heart‑rate datasets with Python/Pandas",
        "Detected/mitigated biologger errors → +32% data accuracy",
        "Built multithreaded NumPy parsers → +125% parsing speed",
        "Collaborated with Dr. William Fagan using Jupyter notebooks"
      ],
      skills: ["Python", "Pandas", "NumPy", "Multithreading", "Jupyter"],
      isPlaceholder: false
    },
    {
      title: "Programming Instructor (Volunteer)",
      company: "T20 Prep",
      location: "Edison, NJ (Remote)",
      period: "Oct 2023 – Dec 2023; Aug 2024 – Present",
      points: [
        "Taught introductory Java to high school students (remote)",
        "Guided project development and exam preparation",
        "Created supportive learning environment and resources"
      ],
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
                        <div className="w-12 h-12 mr-4">
                          {exp.company.includes('Bristol Myers Squibb') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/bmslogo.png" alt="Bristol Myers Squibb" width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : exp.company.includes('Calero') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/clogo.svg" alt="Calero" width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : exp.company.includes('Campus Coders Crew') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/ccclogo.jpg" alt="Campus Coders Crew" width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : exp.company.includes('University of Maryland Department of Computer Science') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/umcslogo.jpg" alt="UMD Computer Science" width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : exp.company.includes('Sensable') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/senslogo.jpg" alt="Sensable Inc." width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : exp.company.includes('Bill Fagan Lab') ? (
                            <span className="w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/90 flex items-center justify-center">
                              <Image src="/scilogo.jpg" alt="Research Lab" width={48} height={48} className="object-contain w-full h-full p-1" />
                            </span>
                          ) : (
                            <span className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              exp.isPlaceholder 
                                ? 'bg-gradient-to-br from-purple-600/50 to-pink-600/50' 
                                : 'bg-gradient-to-br from-purple-600 to-pink-600'
                            }`}>
                              <FaBriefcase className="text-white text-lg" />
                            </span>
                          )}
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

                    <ul className="text-gray-300 mb-4 leading-relaxed list-disc pl-5 space-y-1">
                      {(exp as any).points.map((pt: any, i: number) => (
                        <li key={i}>
                          {typeof pt === 'string' ? pt : pt.text}
                          {pt.subs && Array.isArray(pt.subs) && pt.subs.length > 0 && (
                            <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-400">
                              {pt.subs.map((sub: string, j: number) => (
                                <li key={j}>{sub}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>

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
