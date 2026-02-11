
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppState, StudentData } from './types';
import LoadingScreen from './components/LoadingScreen';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import SoundManager from './components/SoundManager';

const DEFAULT_STUDENT_DATA: StudentData = {
  name: 'Shinobi',
  id: 'NM2024ST089',
  attendance: {
    percentage: 87,
    present: 48,
    absent: 7,
    total: 55,
    history: [
      { date: '2024-05-15', status: 'Present', subject: 'Advanced Algorithms' },
      { date: '2024-05-14', status: 'Present', subject: 'Distributed Systems' },
      { date: '2024-05-13', status: 'Absent', subject: 'Cloud Computing' },
      { date: '2024-05-10', status: 'Present', subject: 'Digital Ethics' },
      { date: '2024-05-09', status: 'Present', subject: 'Advanced Algorithms' },
      { date: '2024-05-08', status: 'Present', subject: 'Distributed Systems' },
      { date: '2024-05-07', status: 'Absent', subject: 'Cloud Computing' },
      { date: '2024-05-06', status: 'Present', subject: 'Digital Ethics' },
    ]
  },
  assignments: {
    completed: 12,
    pending: 3,
  },
  results: [
    { subject: 'Advanced Algorithms', grade: 'A+', score: 92 },
    { subject: 'Distributed Systems', grade: 'A', score: 88 },
    { subject: 'Digital Ethics', grade: 'O', score: 98 },
    { subject: 'Cloud Computing', grade: 'B+', score: 79 },
  ],
  progress: 74
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Rotating Shuriken Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] text-naruto-red drop-shadow-[0_0_12px_rgba(211,47,47,0.8)]"
        animate={{ 
          x: mousePos.x - 20, 
          y: mousePos.y - 20,
          rotate: 360 
        }}
        transition={{ 
          x: { type: 'spring', damping: 25, stiffness: 400, mass: 0.1 },
          y: { type: 'spring', damping: 25, stiffness: 400, mass: 0.1 },
          rotate: { duration: 0.6, repeat: Infinity, ease: "linear" }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" />
          <circle cx="20" cy="20" r="4" fill="black" />
        </svg>
      </motion.div>
      
      {/* Glow Trail */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full bg-naruto-red/10 blur-xl pointer-events-none z-[998]"
        animate={{ x: mousePos.x - 32, y: mousePos.y - 32 }}
        transition={{ type: 'spring', damping: 30, stiffness: 100 }}
      />
    </>
  );
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING);
  const [isMuted, setIsMuted] = useState(false);
  const [student, setStudent] = useState<StudentData>(DEFAULT_STUDENT_DATA);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState(AppState.LOGIN);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (name: string) => {
    setStudent(prev => ({ ...prev, name: name || 'Shinobi' }));
    setAppState(AppState.TRANSITIONING);
    // Increased delay to allow the cinematic video to play fully
    setTimeout(() => {
      setAppState(AppState.DASHBOARD);
    }, 6500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-naruto-black text-white selection:bg-naruto-red/50 cursor-none">
      <CustomCursor />
      <SoundManager isMuted={isMuted} state={appState} />
      
      <div className="fixed top-6 right-6 z-[100]">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-naruto-red/30 transition-all duration-300"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {appState === AppState.LOADING && (
          <LoadingScreen key="loading" />
        )}

        {(appState === AppState.LOGIN || appState === AppState.TRANSITIONING) && (
          <LoginPage 
            key="login" 
            onLogin={handleLogin} 
            isTransitioning={appState === AppState.TRANSITIONING} 
          />
        )}

        {appState === AppState.DASHBOARD && (
          <Dashboard key="dashboard" student={student} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
