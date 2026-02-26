import React, { useState } from 'react';
import { MenuItem } from '../types';
import { motion } from 'motion/react';
import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bar' | 'restaurant' | 'café'>('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'bar', label: 'Bar' },
    { id: 'café', label: 'Café' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} ajouté au panier`, {
      style: {
        background: '#1a1a1a',
        color: '#d4af37',
        border: '1px solid #d4af37',
      },
      iconTheme: {
        primary: '#d4af37',
        secondary: '#000',
      },
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === cat.id 
                ? 'bg-[#d4af37] border-[#d4af37] text-black font-bold' 
                : 'border-gray-700 text-gray-400 hover:border-[#d4af37] hover:text-[#d4af37]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/30 transition-all group"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image || 'https://picsum.photos/seed/food/800/600'} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-[#800020] text-white px-3 py-1 rounded-full text-sm font-bold">
                {item.price.toLocaleString()} FCFA
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#d4af37] mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.description}</p>
              
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-white/5 hover:bg-[#d4af37] hover:text-black text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all font-bold border border-white/10 hover:border-[#d4af37]"
              >
                <Plus size={20} />
                Ajouter au panier
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-24 text-gray-500">
          Aucun plat disponible dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
