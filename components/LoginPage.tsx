
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginPanel from './LoginPanel';

const LoginPage: React.FC<{ onLogin: (name: string) => void; isTransitioning: boolean }> = ({ onLogin, isTransitioning }) => {
  const [videoStage, setVideoStage] = useState(0);

  useEffect(() => {
    const sequence = [
      { delay: 1500, next: 1 }, // Phase 1
      { delay: 3000, next: 2 }, // Phase 2
      { delay: 4500, next: 3 }, // Phase 3
    ];

    let timers: any[] = [];
    sequence.forEach((s) => {
      timers.push(setTimeout(() => setVideoStage(s.next), s.delay));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background Cinematic Layers */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {!isTransitioning && (
            <>
              {videoStage === 0 && (
                <motion.div
                  key="stage0"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(211,47,47,0.3)_0%,transparent_70%)]" />
                  {/* Updated text as requested */}
                  <div className="absolute font-naruto text-naruto-red text-6xl md:text-9xl opacity-20 select-none text-center px-4 uppercase">
                    WELCOME TO NMIMS
                  </div>
                </motion.div>
              )}

              {videoStage === 1 && (
                <motion.div
                  key="stage1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-naruto-uchiha to-naruto-leaf opacity-30" />
                  <motion.div 
                    animate={{ x: [-20, 20], y: [-10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute inset-0 flex items-center justify-center opacity-40"
                  >
                    <div className="w-[120%] h-[120%] border-[40px] border-white/5 rotate-12" />
                  </motion.div>
                </motion.div>
              )}

              {(videoStage >= 2) && (
                <motion.div
                  key="stage2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-black" />
                  <motion.div 
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" 
                  />
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Elements (Crows, Leaves) */}
      {!isTransitioning && (
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: "110%", 
                rotate: Math.random() * 360 
              }}
              animate={{ 
                y: "-10%", 
                x: (Math.random() * 100 - 50) + "%",
                rotate: 360 
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute text-naruto-red/20 text-4xl"
            >
              {i % 2 === 0 ? '✦' : '🍃'}
            </motion.div>
          ))}
        </div>
      )}

      {/* Login Panel Overlay */}
      <AnimatePresence>
        {!isTransitioning && videoStage >= 2 && (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <LoginPanel onLogin={onLogin} />
          </div>
        )}
      </AnimatePresence>

      {/* Cinematic Transition with Itachi Falling Video */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="transition-itachi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[150] bg-black flex items-center justify-center"
          >
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://v1.pbase.com/v3/41/552941/4/115505762.ItachiFalling.mp4" type="video/mp4" />
              {/* Fallback in case link fails */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-red-smoke-swirling-on-a-black-background-204-large.mp4" type="video/mp4" />
            </video>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1.1, 1.5] }}
              transition={{ duration: 5 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            >
              <h2 className="font-naruto text-white text-5xl md:text-8xl tracking-[0.4em] drop-shadow-[0_0_30px_#d32f2f]">SHARINGAN</h2>
              <p className="font-playfair italic text-naruto-gold text-lg md:text-2xl mt-4 tracking-widest">Entering the Portal...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title / Watermark */}
      {!isTransitioning && (
        <div className="absolute top-10 left-10 z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Updated title as requested */}
            <h1 className="font-naruto text-naruto-gold text-5xl tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
              NMIMS PORTAL
            </h1>
            <p className="font-playfair text-white/50 italic tracking-[0.5em] uppercase text-[10px] mt-1">
              Indore Campus • Secure Knowledge Base
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
