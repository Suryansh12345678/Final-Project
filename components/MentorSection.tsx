
import React from 'react';
import { motion } from 'framer-motion';

const MentorSection: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-8 border-t-4 border-t-naruto-blue relative overflow-hidden group"
    >
      {/* Kakashi character background */}
      <div className="absolute right-0 top-0 w-32 h-full opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none grayscale group-hover:grayscale-0">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=KakashiHatake" alt="Kakashi" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
         <span className="font-naruto text-7xl text-white">六</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
        <div className="w-24 h-24 rounded-full border-2 border-naruto-blue p-1 flex-shrink-0 relative">
           <div className="w-full h-full bg-naruto-blue/20 rounded-full flex items-center justify-center font-naruto text-naruto-blue text-4xl">
              木
           </div>
           {/* Sharingan hidden under mask effect */}
           <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 w-2 h-2 bg-naruto-red rounded-full blur-[1px]"
           />
        </div>

        <div className="flex-grow">
          <h3 className="font-naruto text-naruto-blue text-3xl mb-2 tracking-widest uppercase">SENSEI'S EYE (KAKASHI)</h3>
          <p className="font-playfair text-white/80 italic text-lg leading-relaxed mb-6">
            "To know what is right and choose to ignore it is the act of a coward. Don't let your chakra deplete before the finals."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-naruto-blue/10 p-3 border border-naruto-blue/30 flex items-center gap-3">
               <span className="w-2 h-2 bg-naruto-blue rounded-full" />
               <span className="font-naruto text-xs text-white uppercase tracking-widest">Weekly Training: COMPLETE</span>
            </div>
            <div className="bg-naruto-blue/10 p-3 border border-naruto-blue/30 flex items-center gap-3">
               <span className="w-2 h-2 bg-naruto-blue rounded-full" />
               <span className="font-naruto text-xs text-white uppercase tracking-widest">Teamwork: EXCELLENT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end relative z-10">
         <motion.button 
          whileHover={{ scale: 1.05 }}
          className="font-naruto text-naruto-blue text-xs border-b border-naruto-blue/40 pb-1 tracking-[0.2em]"
         >
           READ 'MAKE-OUT PARADISE' NOTES...
         </motion.button>
      </div>
    </motion.div>
  );
};

export default MentorSection;
