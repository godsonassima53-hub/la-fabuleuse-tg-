import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37] bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <img 
              src="https://ais-pre-qllhdbb2u35bbhxj6zlhlu-25239373655.europe-west3.run.app/logo.png" 
              alt="Logo LA FABULEUSE" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback logo with SVG
                e.currentTarget.outerHTML = `
                  <svg viewBox="0 0 100 100" class="w-full h-full object-cover">
                    <circle cx="50" cy="50" r="45" fill="#1e3a8a"/>
                    <path d="M50 20 L60 35 L55 35 L55 45 L45 45 L45 35 L40 35 Z" fill="#d4af37"/>
                    <rect x="35" y="50" width="30" height="8" fill="#d4af37"/>
                    <rect x="40" y="60" width="20" height="6" fill="#d4af37"/>
                    <text x="50" y="85" text-anchor="middle" fill="#d4af37" font-size="8" font-weight="bold">LA FABULEUSE</text>
                  </svg>
                `;
              }}
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tighter text-white block leading-none">LA FABULEUSE</span>
            <span className="text-[10px] text-[#d4af37] uppercase tracking-[0.2em] font-bold">Bar • Resto • Café</span>
          </div>
        </Link>

        <Link 
          to="/login" 
          className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-[#d4af37]"
          title="Espace Admin"
        >
          <User size={24} />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
