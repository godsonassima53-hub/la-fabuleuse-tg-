import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
          <Logo size="medium" className="border-2 border-[#d4af37] group-hover:scale-110 transition-transform shadow-lg" />
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
