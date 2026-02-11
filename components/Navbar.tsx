
import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  return (
    <nav className="relative z-50 w-full px-6 py-4 border-b border-naruto-red/20 glass-card">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Hidden Leaf Logo */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            className="w-14 h-14 bg-naruto-uchiha border-2 border-naruto-gold rounded-none rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(127,0,0,0.6)] group-hover:shadow-[0_0_30px_rgba(255,152,0,0.8)] transition-all"
          >
            <span className="font-naruto text-3xl text-naruto-gold -rotate-45">火</span>
          </motion.div>
          <div className="hidden sm:block ml-2">
            <h1 className="font-naruto text-white text-3xl tracking-tighter leading-none group-hover:text-naruto-orange transition-colors">NMIMS INDORE</h1>
            <p className="font-playfair text-[9px] text-naruto-gold/60 tracking-[0.4em] uppercase italic font-black">Land of Knowledge</p>
          </div>
        </div>

        {/* Center: Character Inspired Links */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: 'WAY OF THE NINJA', color: 'naruto-orange' },
            { label: 'FORBIDDEN SCROLLS', color: 'naruto-uchiha' },
            { label: 'SQUAD 7', color: 'naruto-leaf' },
            { label: 'GREAT WAR', color: 'naruto-red' }
          ].map((item) => (
            <motion.span 
              key={item.label} 
              whileHover={{ y: -2, color: '#ff9800' }}
              className="font-naruto text-white/40 cursor-pointer transition-colors text-xs tracking-widest relative overflow-hidden group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-naruto-orange transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
            </motion.span>
          ))}
        </div>

        {/* Right: Shinobi Profile */}
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
             <p className="font-naruto text-naruto-gold text-2xl tracking-wider leading-none drop-shadow-sm">{name.split(' ')[0]}</p>
             <p className="font-playfair text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold">Sage Mode: ACTIVE</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-full border-2 border-naruto-gold p-1 cursor-pointer overflow-hidden relative shadow-[0_0_20px_rgba(255,215,0,0.3)] bg-black/40"
          >
             <img 
               src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${name}&backgroundColor=000000`} 
               alt="Student Profile" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-naruto-gold/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
