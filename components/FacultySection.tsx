
import React from 'react';
import { motion } from 'framer-motion';

const FACULTY_DATA = [
  {
    name: "Professor Gaurav Paliwal",
    subject: "Web Development",
    email: "gaurav.paliwal@nmims.edu",
    seed: "gaurav",
    element: "Suiton (Water)"
  },
  {
    name: "Professor Nidhi Asthana",
    subject: "CVT",
    email: "nidhi.asthana@nmims.edu",
    seed: "nidhi",
    element: "Fuintsu (Sealing)"
  },
  {
    name: "Professor Ankur Rathmale",
    subject: "TCS",
    email: "ankur.rathmale@nmims.edu",
    seed: "ankur",
    element: "Raiton (Lightning)"
  }
];

const FacultySection: React.FC = () => {
  return (
    <div className="mt-12 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-1 bg-naruto-leaf rounded-full shadow-[0_0_15px_#2e7d32]" />
        <h2 className="font-naruto text-white text-4xl tracking-widest uppercase">Jonin Instructors</h2>
        <span className="font-playfair text-white/30 italic text-sm tracking-widest hidden sm:inline">— Academy Faculty Roster</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FACULTY_DATA.map((prof, i) => (
          <motion.div
            key={prof.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 border-white/5 relative overflow-hidden group"
          >
            {/* Background Symbol */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <span className="font-naruto text-6xl text-white">師</span>
            </div>

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 rounded-full border-2 border-naruto-gold p-1 mb-4 relative">
                <div className="w-full h-full bg-black/40 rounded-full overflow-hidden">
                  <img 
                    src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${prof.seed}&backgroundColor=000000`} 
                    alt={prof.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-naruto-gold rounded-full flex items-center justify-center border-2 border-black">
                  <span className="text-[10px] font-bold text-black">上</span>
                </div>
              </div>

              <h3 className="font-cinzel text-naruto-gold text-lg font-bold tracking-tight mb-1">{prof.name}</h3>
              <p className="font-naruto text-white/60 text-xs tracking-widest mb-4 uppercase">{prof.subject}</p>
              
              <div className="w-full space-y-3 mb-6">
                <div className="bg-black/40 p-2 border border-white/5 flex flex-col items-center">
                  <span className="font-playfair text-[8px] text-white/30 uppercase tracking-[0.2em] mb-1">Chakra Nature</span>
                  <span className="font-cinzel text-[10px] text-naruto-leaf font-bold">{prof.element}</span>
                </div>
                
                <a 
                  href={`mailto:${prof.email}`}
                  className="flex items-center justify-center gap-2 text-white/40 hover:text-naruto-red transition-colors group/link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  <span className="font-playfair italic text-xs truncate max-w-[180px]">{prof.email}</span>
                </a>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-white/5 border border-white/10 font-naruto text-[10px] text-white tracking-[0.3em] hover:bg-white/10 transition-all uppercase"
              >
                Send Request Scroll
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FacultySection;
