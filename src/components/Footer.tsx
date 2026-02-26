import React from 'react';
import { AppSettings } from '../types';
import { MapPin, Phone, Facebook, Instagram, UtensilsCrossed, Mail, Clock, Globe } from 'lucide-react';

interface FooterProps {
  settings: AppSettings | null;
}

const Footer: React.FC<FooterProps> = ({ settings }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] shadow-lg">
              <img 
                src="https://ais-pre-qllhdbb2u35bbhxj6zlhlu-25239373655.europe-west3.run.app/logo.png" 
                alt="Logo LA FABULEUSE" 
                className="w-full h-full object-cover"
                onError={(e) => {
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
            <span className="text-2xl font-bold tracking-tighter text-white">LA FABULEUSE</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Votre destination privilégiée pour une expérience culinaire d'exception au Togo. 
            Bar, Restaurant et Café réunis dans un cadre élégant et chaleureux.
          </p>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[#800020]/20 border border-[#800020]/30 rounded-full">
              <span className="text-[10px] text-[#d4af37] font-bold">PREMIUM</span>
            </div>
            <div className="px-3 py-1 bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 rounded-full">
              <span className="text-[10px] text-[#3b82f6] font-bold">QUALITÉ</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={20} className="text-[#d4af37] shrink-0" />
              <span>{settings?.address || 'Lomé, Togo'}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={20} className="text-[#d4af37] shrink-0" />
              <span>+228 {settings?.whatsappNumber || '96058543'}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={20} className="text-[#d4af37] shrink-0" />
              <span>contact@lafabuleuse.tg</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">Horaires</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex justify-between">
              <span>Lun-Jeu</span>
              <span className="text-[#d4af37]">11h-23h</span>
            </li>
            <li className="flex justify-between">
              <span>Ven-Sam</span>
              <span className="text-[#d4af37]">11h-02h</span>
            </li>
            <li className="flex justify-between">
              <span>Dimanche</span>
              <span className="text-[#d4af37]">12h-22h</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">Suivez-nous</h4>
          <div className="flex gap-3">
            {settings?.facebookUrl ? (
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all border border-white/10">
                <Facebook size={20} />
              </a>
            ) : (
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 opacity-50">
                <Facebook size={20} />
              </div>
            )}
            {settings?.instagramUrl ? (
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all border border-white/10">
                <Instagram size={20} />
              </a>
            ) : (
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 opacity-50">
                <Instagram size={20} />
              </div>
            )}
            <a 
              href={`https://wa.me/228${settings?.whatsappNumber || '96058543'}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center hover:bg-[#128C7E] transition-all"
            >
              <Phone size={20} />
            </a>
          </div>
          <div className="text-gray-500 text-xs">
            <p>Service client disponible</p>
            <p className="text-[#d4af37] font-bold">7j/7</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-gray-600 text-xs">
            <p>&copy; {currentYear} LA FABULEUSE. Tous droits réservés.</p>
            <p className="mt-1">Made with ❤️ au Togo</p>
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
