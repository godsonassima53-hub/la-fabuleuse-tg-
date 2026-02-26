import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { MenuItem, AppSettings } from '../types';
import Header from '../components/Header';
import MenuGrid from '../components/MenuGrid';
import CartSidebar from '../components/CartSidebar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const q = query(collection(db, 'menu'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MenuItem));
      setMenuItems(items);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error:", error);
      setLoading(false);
    });

    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'general');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSettings(docSnap.data() as AppSettings);
        }
      } catch (error) {
        console.error("Settings error:", error);
      }
    };

    fetchSettings();
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />
      
      {/* Hero Section with Enhanced Background */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80" 
            alt="Restaurant Bar Café Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/20 via-transparent to-[#1e3a8a]/20"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-[#d4af37] bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] shadow-2xl flex items-center justify-center">
                <img 
                  src="https://ais-pre-qllhdbb2u35bbhxj6zlhlu-25239373655.europe-west3.run.app/logo.png" 
                  alt="Logo LA FABULEUSE" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <svg viewBox="0 0 100 100" class="w-full h-full object-cover">
                          <circle cx="50" cy="50" r="45" fill="#1e3a8a"/>
                          <path d="M50 20 L60 35 L55 35 L55 45 L45 45 L45 35 L40 35 Z" fill="#d4af37"/>
                          <rect x="35" y="50" width="30" height="8" fill="#d4af37"/>
                          <rect x="40" y="60" width="20" height="6" fill="#d4af37"/>
                          <text x="50" y="85" text-anchor="middle" fill="#d4af37" font-size="8" font-weight="bold">LA FABULEUSE</text>
                        </svg>
                      `;
                    }
                  }}
                />
              </div>
            </div>
            <span className="text-[#d4af37] uppercase tracking-[0.4em] font-bold text-sm mb-4 block">Bienvenue à</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter font-display">
              LA <span className="text-[#d4af37]">FABULEUSE</span>
            </h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-200 italic font-light max-w-2xl mx-auto leading-relaxed">
              L'excellence culinaire au cœur du Togo. <br className="hidden md:block" />
              Bar • Restaurant • Café
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-[#d4af37] font-bold">🍽️ Restaurant</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-[#d4af37] font-bold">🍹 Bar</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-[#d4af37] font-bold">☕ Café</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <main className="py-24 px-4 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre Menu</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Découvrez nos saveurs uniques préparées avec passion et des ingrédients de première qualité.</p>
        </section>

        <MenuGrid items={menuItems} />
        
        {/* About Section */}
        <section className="mt-32 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">À Propos de LA FABULEUSE</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Une expérience culinaire inoubliable au cœur du Togo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4">Cuisine Authentique</h3>
              <p className="text-gray-400">Des plats traditionnels togolais revisités avec une touche moderne, préparés par nos chefs expérimentés.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🍹</span>
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4">Bar Premium</h3>
              <p className="text-gray-400">Une sélection raffinée de cocktails, vins et boissons locales pour accompagner vos repas.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center"
            >
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-4">Café Artistique</h3>
              <p className="text-gray-400">Un espace chaleureux pour déguster nos cafés artisanaux et travailler dans une ambiance inspirante.</p>
            </motion.div>
          </div>
        </section>

        {/* Hours Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#800020]/20 to-[#1e3a8a]/20 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-[#d4af37] mb-6 text-center">Nos Horaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-3">Restaurant & Bar</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Jeudi</span>
                    <span className="text-[#d4af37]">11h - 23h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendredi - Samedi</span>
                    <span className="text-[#d4af37]">11h - 02h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-[#d4af37]">12h - 22h</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">Café</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Samedi</span>
                    <span className="text-[#d4af37]">07h - 20h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-[#d4af37]">08h - 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer settings={settings} />

      {/* Floating Cart Button */}
      <AnimatePresence>
        {items.length > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-[#d4af37] text-black p-4 rounded-full shadow-2xl hover:bg-[#b8962e] transition-colors"
          >
            <div className="relative">
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 bg-[#800020] text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        settings={settings}
      />
    </div>
  );
};

export default Home;
