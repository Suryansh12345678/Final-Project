
import React from 'react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  results: {
    subject: string;
    grade: string;
    score: number;
  }[];
}

const ResultCard: React.FC<ResultCardProps> = ({ results }) => {
  const chartSize = 120;
  const center = chartSize / 2;
  const maxScore = 100;
  const numPoints = results.length;
  
  const points = results.map((r, i) => {
    const angle = (i / numPoints) * 2 * Math.PI - Math.PI / 2;
    const rScaled = (r.score / maxScore) * (chartSize / 2);
    const x = center + rScaled * Math.cos(angle);
    const y = center + rScaled * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const gridCircles = [0.25, 0.5, 0.75, 1];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-6 flex-grow relative overflow-hidden border-naruto-uchiha/40 group"
    >
      {/* Sasuke character background */}
      <div className="absolute left-0 top-0 w-24 h-32 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=SasukeUchiha" alt="Sasuke" className="w-full h-full object-contain" />
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none -mr-10 -mt-10 group-hover:opacity-10 transition-opacity">
         <svg viewBox="0 0 100 100" className="fill-naruto-red animate-spin-slow">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" />
         </svg>
      </div>
      
      <h3 className="font-naruto text-naruto-red text-3xl tracking-widest mb-4 relative z-10">SHINOBI STATS</h3>

      <div className="flex justify-center my-6 relative z-10">
        <svg width={chartSize} height={chartSize} className="drop-shadow-[0_0_10px_rgba(211,47,47,0.3)]">
          {gridCircles.map(gc => (
            <circle 
              key={gc} 
              cx={center} 
              cy={center} 
              r={(chartSize / 2) * gc} 
              fill="none" 
              stroke="rgba(211,47,47,0.1)" 
              strokeWidth="1" 
            />
          ))}
          {results.map((_, i) => {
            const angle = (i / numPoints) * 2 * Math.PI - Math.PI / 2;
            const x = center + (chartSize / 2) * Math.cos(angle);
            const y = center + (chartSize / 2) * Math.sin(angle);
            return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="rgba(211,47,47,0.1)" strokeWidth="1" />;
          })}
          <motion.polygon
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            points={points}
            fill="rgba(211,47,47,0.4)"
            stroke="#d32f2f"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="space-y-3 relative z-10">
        {results.map((result, idx) => (
          <motion.div
            key={result.subject}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * idx }}
            className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-none group/item hover:bg-naruto-uchiha/20 transition-all"
          >
            <div className="flex flex-col">
              <span className="font-naruto text-[10px] text-white uppercase tracking-widest">{result.subject}</span>
              <div className="w-12 h-[2px] bg-naruto-red/30 mt-1" />
            </div>
            <div className="flex items-center gap-3">
               <span className="font-naruto text-xl text-naruto-red">{result.grade}</span>
               <span className="font-cinzel text-[8px] text-white/30">{result.score}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-naruto-uchiha/10 border border-naruto-red/40 font-naruto text-white tracking-[0.2em] text-sm hover:bg-naruto-red transition-all relative z-10">
        SYNC ARCHIVE DATA
      </button>
    </motion.div>
  );
};

export default ResultCard;
