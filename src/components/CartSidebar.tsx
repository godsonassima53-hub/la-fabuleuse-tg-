import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { AppSettings } from '../types';
import { toast } from 'react-hot-toast';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings | null;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, settings }) => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleOrder = () => {
    if (!settings?.whatsappNumber) {
      toast.error("Le numéro WhatsApp n'est pas configuré.");
      return;
    }
    setShowConfirmModal(true);
  };

  const confirmOrder = () => {
    const orderText = items.map(item => 
      `• ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} FCFA`
    ).join('\n');

    const message = `Bonjour LA FABULEUSE,\nJe souhaite commander :\n\n${orderText}\n\nTotal : ${total.toLocaleString()} FCFA\n\nMerci de me confirmer la disponibilité.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setShowConfirmModal(false);
    clearCart();
    toast.success('Commande envoyée avec succès !');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#141414] z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-bottom border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#d4af37]">Votre Panier</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <X size={40} />
                  </div>
                  <p>Votre panier est vide</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <img 
                      src={item.image || 'https://picsum.photos/seed/food/200/200'} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-[#d4af37] transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-[#d4af37] transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <span className="font-bold text-[#d4af37]">
                          {(item.price * item.quantity).toLocaleString()} FCFA
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-[#1a1a1a] border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#d4af37]">{total.toLocaleString()} FCFA</span>
                </div>
                <button
                  onClick={handleOrder}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg"
                >
                  <MessageCircle size={24} />
                  Commander sur WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 m-auto w-full max-w-md h-fit bg-[#1a1a1a] rounded-3xl p-8 z-[70] border border-white/10 shadow-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Confirmer votre commande</h3>
                <p className="text-gray-400 mb-6">
                  Vous allez être redirigé vers WhatsApp pour finaliser votre commande de <span className="text-[#d4af37] font-bold">{total.toLocaleString()} FCFA</span>.
                </p>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-bold text-[#d4af37] mb-2">Récapitulatif :</h4>
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-300 mb-1">
                      <span>{item.name} x{item.quantity}</span>
                      <span>{(item.price * item.quantity).toLocaleString()} FCFA</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2 flex justify-between font-bold text-white">
                    <span>Total</span>
                    <span className="text-[#d4af37]">{total.toLocaleString()} FCFA</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={confirmOrder}
                    className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl transition-all font-bold"
                  >
                    Commander sur WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default CartSidebar;
