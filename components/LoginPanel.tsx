
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginPanelProps {
  onLogin: (name: string) => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onLogin }) => {
  const [name, setName] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-10 w-[90vw] max-w-[420px] relative border-naruto-red/50 sharingan-glow"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-naruto-red rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white">
             <div className="w-10 h-10 border-4 border-black rounded-full border-t-transparent animate-spin" />
          </div>
          {/* Updated text as requested */}
          <h2 className="font-naruto text-white text-4xl tracking-wider uppercase">PORTAL LOGIN</h2>
          <p className="font-cormorant text-naruto-red/80 italic mt-2">"Accessing the NMIMS Archives..."</p>
        </div>

        <form className="w-full space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(name); }}>
          <div className="space-y-2">
            <label className="font-cinzel text-xs text-naruto-red tracking-[0.2em] block uppercase font-bold">Student Identity</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full bg-black/60 border-b-2 border-naruto-red/40 p-3 rounded-none text-white focus:outline-none focus:border-naruto-red transition-all font-playfair placeholder:text-white/20"
            />
          </div>

          <div className="space-y-2">
            <label className="font-cinzel text-xs text-white/40 tracking-[0.2em] block uppercase font-bold">Secure Signature</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-black/60 border-b-2 border-white/10 p-3 rounded-none text-white focus:outline-none focus:border-naruto-red transition-all font-playfair placeholder:text-white/20"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#b71c1c' }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-naruto-red py-4 rounded-sm font-naruto text-2xl tracking-widest text-white shadow-[0_0_20px_rgba(211,47,47,0.4)]"
          >
            ENTER
          </motion.button>
        </form>

        <p className="mt-8 font-cormorant text-white/40 text-sm">
          Problems logging in? <span className="text-naruto-red/80 cursor-pointer hover:text-naruto-red transition-colors">Contact IT Admin.</span>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPanel;
