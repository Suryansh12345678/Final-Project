
import React from 'react';
import { motion } from 'framer-motion';

interface AttendanceCardProps {
  attendance: {
    percentage: number;
    present: number;
    absent: number;
    total: number;
  };
  onClick?: () => void;
}

const AttendanceCard: React.FC<AttendanceCardProps> = ({ attendance, onClick }) => {
  const radius = 75;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (attendance.percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-card p-8 flex flex-col items-center justify-center relative overflow-hidden group border-naruto-orange/30 shadow-[inset_0_0_20px_rgba(255,152,0,0.05)] cursor-pointer"
    >
      {/* Naruto character background */}
      <div className="absolute -left-6 bottom-0 w-32 h-48 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=NarutoUzumaki" alt="Naruto" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-4 left-4 font-naruto text-[10px] text-naruto-orange/20 tracking-tighter">UZUMAKI LEVEL</div>
      <div className="absolute top-4 right-4 font-naruto text-[10px] text-naruto-orange/20 tracking-tighter">NMIMS ARCHIVE</div>

      <h3 className="font-naruto text-naruto-orange text-3xl tracking-widest mb-8">ATTENDANCE</h3>

      <div className="relative flex items-center justify-center z-10">
        <div className="absolute inset-0 bg-naruto-orange/5 blur-[40px] rounded-full scale-100 animate-pulse" />
        
        <svg width="200" height="200" className="transform -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="rgba(255, 152, 0, 0.05)"
            strokeWidth="12"
            fill="transparent"
          />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#narutoGradient)"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_15px_rgba(255,152,0,0.6)]"
          />
          <defs>
            <linearGradient id="narutoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9800" />
              <stop offset="100%" stopColor="#f44336" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-naruto text-6xl text-white"
          >
            {attendance.percentage}%
          </motion.span>
          <span className="font-cinzel text-[8px] text-naruto-orange uppercase tracking-[0.4em] font-black -mt-2">Mastery</span>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-6 w-full text-center z-10">
        <div className="space-y-1 relative">
          <p className="font-naruto text-[8px] text-white/40 uppercase">Present</p>
          <p className="font-playfair text-xl text-naruto-orange font-black">{attendance.present}</p>
        </div>
        <div className="space-y-1 relative">
          <p className="font-naruto text-[8px] text-white/40 uppercase">Absent</p>
          <p className="font-playfair text-xl text-naruto-red font-black">{attendance.absent}</p>
        </div>
        <div className="space-y-1">
          <p className="font-naruto text-[8px] text-white/40 uppercase">Total</p>
          <p className="font-playfair text-xl text-white font-black">{attendance.total}</p>
        </div>
      </div>

      <motion.div 
        className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 5 }}
        animate={{ y: 0 }}
      >
        <span className="font-cinzel text-[8px] text-naruto-gold uppercase tracking-widest animate-pulse">Click to View Mission Logs</span>
      </motion.div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 opacity-10">
         {[...Array(6)].map((_, i) => (
           <div key={i} className="w-4 h-[2px] bg-naruto-orange rounded-full" />
         ))}
      </div>
    </motion.div>
  );
};

export default AttendanceCard;
