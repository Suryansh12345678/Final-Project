
import React from 'react';
import { motion } from 'framer-motion';
import { AttendanceRecord } from '../types';

interface AttendanceDetailModalProps {
  history: AttendanceRecord[];
  onClose: () => void;
}

const AttendanceDetailModal: React.FC<AttendanceDetailModalProps> = ({ history, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, y: 100, rotateX: 45 }}
        animate={{ scale: 1, y: 0, rotateX: 0 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[80vh] bg-[#f4e4bc] border-y-[16px] border-[#8b4513] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scroll Endcaps */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Scroll Content Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none scroll-texture" />
        
        {/* Header */}
        <div className="p-8 border-b-2 border-[#8b4513]/20 flex justify-between items-center relative z-10">
          <div>
            <h2 className="font-naruto text-4xl text-[#3e2723] tracking-wider uppercase">Mission Logs</h2>
            <p className="font-playfair text-[#5d4037] italic text-sm">Uzumaki Clan Attendance Scroll</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-[#3e2723] text-[#f4e4bc] rounded-full"
          >
            ✕
          </motion.button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="space-y-4"
          >
            {history.map((record, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className={`flex items-center justify-between p-4 border-l-4 ${
                  record.status === 'Present' ? 'border-naruto-leaf bg-naruto-leaf/10' : 'border-naruto-red bg-naruto-red/10'
                } backdrop-blur-sm group hover:scale-[1.01] transition-transform`}
              >
                <div className="flex flex-col">
                  <span className="font-cinzel text-xs text-[#5d4037] font-bold">{record.date}</span>
                  <span className="font-naruto text-xl text-[#3e2723] group-hover:text-naruto-red transition-colors">{record.subject}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-1 rounded-sm text-[10px] font-naruto tracking-widest border ${
                    record.status === 'Present' ? 'border-naruto-leaf text-naruto-leaf' : 'border-naruto-red text-naruto-red'
                  }`}>
                    {record.status === 'Present' ? 'COMPLETED' : 'FAILED'}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-xl">
                    {record.status === 'Present' ? '🍃' : '🔥'}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Seal */}
        <div className="p-6 bg-[#8b4513]/5 flex justify-center items-center gap-4 border-t-2 border-[#8b4513]/10">
          <div className="w-12 h-12 rounded-full border-2 border-[#8b4513] flex items-center justify-center font-naruto text-[#8b4513] text-2xl">
            忍
          </div>
          <span className="font-playfair text-[#8b4513] text-[10px] uppercase tracking-[0.4em] font-bold">Authenticated by Hokage Archive</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AttendanceDetailModal;
