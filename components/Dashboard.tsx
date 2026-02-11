
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StudentData } from '../types';
import AttendanceCard from './AttendanceCard';
import AssignmentCard from './AssignmentCard';
import ResultCard from './ResultCard';
import Navbar from './Navbar';
import AttendanceDetailModal from './AttendanceDetailModal';
import FacultySection from './FacultySection';

interface DashboardProps {
  student: StudentData;
}

const Dashboard: React.FC<DashboardProps> = ({ student }) => {
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 w-full h-full overflow-y-auto bg-naruto-black custom-scrollbar z-50"
    >
      {/* Cinematic Background Video Layer - Stylized Stormy Loop */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-[0.15] grayscale brightness-[0.4] contrast-125 scale-110"
        >
          <source src="https://player.vimeo.com/external/435165845.sd.mp4?s=34a50d24f0c40683a694d40228b3684a0c5c6c6b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-naruto-black via-transparent to-naruto-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(211,47,47,0.1)_0%,transparent_100%)]" />
      </div>

      <Navbar name={student.name} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-1 bg-naruto-orange rounded-full shadow-[0_0_15px_#ff9800]" />
              <h2 className="font-naruto text-naruto-gold text-5xl tracking-widest drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                NMIMS ARCHIVES
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-naruto-uchiha text-white font-naruto px-3 py-1 text-[10px] rounded-sm border border-naruto-red/50 uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(127,0,0,0.5)]">SEM 3 STUDENT</span>
              <p className="font-playfair text-white/80 italic text-2xl tracking-tight">
                Welcome back, <span className="text-white font-bold">{student.name}</span> • <span className="text-naruto-orange/80">ID: {student.id}</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 p-3 border border-white/5 bg-white/5 backdrop-blur-md"
          >
             <div className="w-2 h-2 rounded-full bg-naruto-leaf animate-pulse" />
             <span className="font-cinzel text-[10px] tracking-[0.3em] text-white/40 uppercase">Secure Portal Connection</span>
          </motion.div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Attendance */}
          <AttendanceCard 
            attendance={student.attendance} 
            onClick={() => setIsAttendanceModalOpen(true)}
          />

          {/* Card 2: Assignments */}
          <AssignmentCard assignments={student.assignments} />

          {/* Card 3: Results */}
          <div className="lg:col-span-1">
            <ResultCard results={student.results} />
          </div>
        </div>

        {/* New Faculty Section */}
        <FacultySection />
      </main>

      <AnimatePresence>
        {isAttendanceModalOpen && (
          <AttendanceDetailModal 
            history={student.attendance.history} 
            onClose={() => setIsAttendanceModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
