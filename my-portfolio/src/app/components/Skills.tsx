'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt,
  FaGitAlt, FaDocker, FaAws, FaJava, FaMicrosoft 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb,
  SiPostgresql, SiExpress,
  SiC, SiCplusplus, SiR, SiDotnet, SiOcaml,
  SiDjango, SiNumpy, SiPandas, SiGraphql,
  SiScikitlearn, SiJenkins, SiMysql
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  const skills = [
    // Languages
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400', delay: 0.1 },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', delay: 0.15 },
    { name: 'Python', icon: FaPython, color: 'text-green-400', delay: 0.2 },
    { name: 'Java', icon: FaJava, color: 'text-red-500', delay: 0.22 },
    { name: 'C', icon: SiC, color: 'text-blue-500', delay: 0.24 },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-400', delay: 0.26 },
    { name: 'C#', icon: TbBrandCSharp, color: 'text-purple-400', delay: 0.28 },
    { name: 'R', icon: SiR, color: 'text-sky-500', delay: 0.3 },
    { name: 'OCaml', icon: SiOcaml, color: 'text-orange-400', delay: 0.32 },
    // Frontend
    { name: 'React', icon: FaReact, color: 'text-blue-400', delay: 0.25 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', delay: 0.3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', delay: 0.35 },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', delay: 0.4 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', delay: 0.45 },
    // Backend & Databases
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', delay: 0.5 },
    { name: 'Express.js', icon: SiExpress, color: 'text-white', delay: 0.55 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', delay: 0.6 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', delay: 0.65 },
    { name: 'MySQL', icon: SiMysql, color: 'text-teal-300', delay: 0.66 },
    // More Languages / Runtimes
    { name: '.NET', icon: SiDotnet, color: 'text-indigo-400', delay: 0.67 },
    // Data / ML Frameworks
    { name: 'NumPy', icon: SiNumpy, color: 'text-blue-300', delay: 0.76 },
    { name: 'Pandas', icon: SiPandas, color: 'text-emerald-300', delay: 0.78 },
    { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-orange-300', delay: 0.82 },
    { name: 'Django', icon: SiDjango, color: 'text-green-400', delay: 0.84 },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-400', delay: 0.88 },
    // DevOps & Cloud
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', delay: 0.7 },
    { name: 'Docker', icon: FaDocker, color: 'text-sky-400', delay: 0.75 },
    { name: 'AWS', icon: FaAws, color: 'text-amber-300', delay: 0.8 },
    { name: 'Azure', icon: FaMicrosoft, color: 'text-blue-400', delay: 0.84 },
    // Developer Tools
    { name: 'Jenkins', icon: SiJenkins, color: 'text-red-400', delay: 1.0 },
  ];

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {(showMore ? skills : skills.slice(0, 18)).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: skill.delay }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="relative mb-4">
                  <skill.icon className={`text-4xl sm:text-5xl ${skill.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: skill.delay + 0.5, duration: 0.3 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <h3 className="text-white font-semibold text-base sm:text-lg mb-3">{skill.name}</h3>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: skill.delay + 0.3 }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
                />
              </div>

              {/* Hover label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-sm px-3 py-1 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {skill.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="px-4 py-2 rounded-md border border-slate-600 bg-slate-800/50 text-gray-200 hover:bg-slate-700/60 hover:border-slate-500 transition-colors"
            aria-expanded={showMore}
            aria-controls="skills-grid"
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay at the forefront of innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
