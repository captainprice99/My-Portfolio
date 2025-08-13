'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaDatabase 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, 
  SiPostgresql, SiExpress, SiFirebase, SiVercel 
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400', delay: 0.1 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', delay: 0.2 },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', delay: 0.3 },
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400', delay: 0.4 },
    { name: 'Python', icon: FaPython, color: 'text-green-400', delay: 0.5 },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', delay: 0.6 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', delay: 0.7 },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', delay: 0.8 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', delay: 0.9 },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', delay: 1.0 },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', delay: 1.1 },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', delay: 1.2 },
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
          {skills.map((skill, index) => (
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
