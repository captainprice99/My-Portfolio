'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin className="text-xl" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaEnvelope className="text-xl" />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-purple-900/95 backdrop-blur-lg shadow-2xl border-b border-purple-500/20' 
          : 'bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-purple-900/20 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#" 
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
            >
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-gray-200 hover:text-white font-medium transition-all duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
              </motion.button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-purple-500/30">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-white hover:bg-purple-600/20 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-300 hover:text-white hover:bg-purple-600/20 rounded-lg focus:outline-none transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-purple-900/98 backdrop-blur-lg border-t border-purple-500/20"
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3 text-lg font-medium text-white hover:bg-purple-700/50 rounded-lg transition-all duration-300"
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: isOpen ? 0 : -50, 
                opacity: isOpen ? 1 : 0 
              }}
              transition={{ 
                delay: isOpen ? index * 0.1 : 0,
                duration: 0.3 
              }}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.name}
            </motion.button>
          ))}
          
          {/* Mobile Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 pt-6 mt-6 border-t border-purple-500/30"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isOpen ? 0 : 20, 
              opacity: isOpen ? 1 : 0 
            }}
            transition={{ delay: isOpen ? 0.4 : 0, duration: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 hover:text-white hover:bg-purple-600/30 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;