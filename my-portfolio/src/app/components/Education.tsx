'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">B.S. in Computer Science</h3>
                  <p className="text-purple-400 font-semibold text-lg">Minor in General Business</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="text-purple-400 mr-3" />
                  <span className="text-base sm:text-lg">University of Maryland, College Park</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <FaCalendarAlt className="text-purple-400 mr-3" />
                  <span className="text-base sm:text-lg">Aug 2023 – May 2027</span>
                </div>

                <div className="pt-4 space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">GPA & Honors:</h4>
                    <p className="text-gray-300">GPA: 3.9/4.0 • Dean’s List (4x) • Computer Science Honors</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'OOP', 'Web Development', 'Computer Architecture', 'Compilers', 'Data Science', 'AI', 'Machine Learning', 'Computer Vision', 'Operating Systems', 'Databases', 'Discrete Math', 'Calculus III', 'Linear Algebra', 'Applied Probability & Statistics', 'Accounting', 'Management', 'Entrepreneurship'].map((course) => (
                        <span key={course} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </motion.div>

          {/* Honors & Affiliations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Honors & Affiliations</h3>
                  <p className="text-blue-400 font-semibold">Leadership & Involvement</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li>Teaching Assistant (Fall 2024)</li>
                  <li>Data Science Research Assistant (Spring 2024)</li>
                  <li>Campus Coders Crew</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Education is not just about degrees—it's about continuous growth, curiosity, and the pursuit of knowledge that drives innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
