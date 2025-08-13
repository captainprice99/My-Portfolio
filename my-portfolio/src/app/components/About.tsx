'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Arnav Doshi, a Computer Science student at the University of Maryland (Minor in General Business),
              GPA 3.9/4.0, Dean’s List 4x, and CS Honors. I love turning complex problems into clean, high-impact
              software across full‑stack, ML/AI, and cloud.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Experience includes Bristol Myers Squibb (Enterprise IT, Semantic Data Products), Software Engineer Lead at
              Campus Coders Crew (supporting 8,000+ students), and a Data Science/ML Internship at Sensable Inc. I work with
              React/Next.js, TypeScript, Python, Java, Node/Express, Docker, and AWS/GCP/Azure to deliver scalable products.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full"
              >
                <span className="text-purple-300 font-medium text-sm sm:text-base">Problem Solver</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full"
              >
                <span className="text-blue-300 font-medium text-sm sm:text-base">Team Player</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full"
              >
                <span className="text-green-300 font-medium text-sm sm:text-base">Lifelong Learner</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <div className="w-full h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold">Ready to Launch</p>
                  <p className="text-sm opacity-80">Into the Future of Tech</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl"
            >
              💡
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl"
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
