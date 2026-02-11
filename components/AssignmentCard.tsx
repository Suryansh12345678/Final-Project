
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AssignmentCardProps {
  assignments: {
    completed: number;
    pending: number;
  };
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = assignments.completed + assignments.pending;
  const completedWidth = (assignments.completed / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card relative p-8 group flex flex-col border-white/10 overflow-hidden"
    >
      {/* Shikamaru character background */}
      <div className="absolute -right-6 top-10 w-24 h-32 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=ShikamaruNara" alt="Shikamaru" className="w-full h-full object-contain" />
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none scroll-texture" />
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex flex-col">
          <h3 className="font-naruto text-white text-3xl tracking-widest">ASSIGNMENTS</h3>
          <span className="font-playfair text-[10px] text-white/40 italic uppercase tracking-widest">"Strategic Progress Report"</span>
        </div>
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 hover:bg-white/10 text-white font-naruto px-4 py-1 text-[10px] rounded border border-white/20 transition-all"
        >
          {isOpen ? 'HIDE DETAILS' : 'VIEW SCROLL'}
        </motion.button>
      </div>

      <div className="mb-10 relative z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="font-cinzel text-[10px] text-naruto-leaf font-bold uppercase tracking-widest">Success Rate</span>
          <span className="font-naruto text-sm text-white">{Math.round(completedWidth)}%</span>
        </div>
        <div className="w-full h-8 bg-black/60 rounded-sm border border-white/10 p-1 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completedWidth}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-naruto-leaf to-naruto-gold shadow-[0_0_15px_rgba(46,125,50,0.4)]"
          />
        </div>
        <div className="flex justify-between mt-2 text-[8px] font-playfair text-white/30 uppercase tracking-[0.2em]">
           <span>Academy Start</span>
           <span>Jonin Level</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 relative z-10">
        <div className="bg-black/40 border border-naruto-leaf/30 p-4 rounded-none text-center">
          <p className="font-naruto text-naruto-leaf text-4xl leading-none">{assignments.completed}</p>
          <p className="font-cinzel text-[8px] text-white/40 uppercase font-bold mt-2">Finished</p>
        </div>
        <div className="bg-black/40 border border-naruto-red/30 p-4 rounded-none text-center">
          <p className="font-naruto text-naruto-red text-4xl leading-none">{assignments.pending}</p>
          <p className="font-cinzel text-[8px] text-white/40 uppercase font-bold mt-2">Active</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-6 overflow-hidden bg-black/40 p-4 border border-white/5 rounded-sm relative z-10"
          >
            <div className="space-y-4">
              {[
                { title: "Defend Hidden Leaf Portal", rank: "S", time: "EXPIRED" },
                { title: "Advanced Chakra Logic", rank: "A", time: "48H" },
                { title: "Uchiha History Seminar", rank: "B", time: "24H" }
              ].map((mission, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                  <div className="flex flex-col">
                    <span className="font-naruto text-xs text-white/80">{mission.title}</span>
                    <span className="font-playfair text-[8px] text-white/30 tracking-widest uppercase">Class Level: {mission.rank}</span>
                  </div>
                  <span className={`font-cinzel text-[8px] px-2 py-0.5 border ${mission.time === 'EXPIRED' ? 'border-naruto-red text-naruto-red' : 'border-naruto-gold text-naruto-gold'}`}>
                    {mission.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-8 flex justify-center opacity-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" className="text-white">
           <path d="M20 5 L23 15 L35 15 L25 22 L28 35 L20 27 L12 35 L15 22 L5 15 L17 15 Z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;
