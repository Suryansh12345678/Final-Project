
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARACTERS = [
  "NARUTO UZUMAKI",
  "SASUKE UCHIHA",
  "SAKURA HARUNO",
  "KAKASHI HATAKE",
  "ITACHI UCHIHA",
  "GAARA",
  "JIRAIYA",
  "SHIKAMARU NARA"
];

const LoadingScreen: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CHARACTERS.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Swirling Chakra */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-56 h-56 rounded-full border-4 border-naruto-orange border-t-transparent border-b-transparent opacity-60 blur-md"
        />
        
        {/* Center Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-naruto-red font-naruto text-7xl drop-shadow-[0_0_20px_rgba(211,47,47,0.8)]"
          >
            忍
          </motion.div>
        </div>
      </div>

      <div className="mt-12 h-10 overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={CHARACTERS[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="font-naruto text-naruto-gold text-2xl tracking-[0.2em]"
          >
            {CHARACTERS[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 font-playfair italic text-white/40 text-sm tracking-widest"
      >
        Synchronizing Chakra Reserves...
      </motion.p>

      {/* Floating Shuriken Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 10, 
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: -100, 
            opacity: [0, 0.5, 0],
            rotate: 360,
            x: (Math.random() - 0.5) * 400 + window.innerWidth / 2 
          }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="absolute text-white/10 text-xs"
        >
          ✦
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
