import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, placeholder = "URL de l'image" }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      // Pour Netlify, on utilise le nom du fichier avec l'extension correcte
      const fileName = file.name.toLowerCase();
      const fileExtension = fileName.split('.').pop();
      
      // Accepter tous les formats d'images
      if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'].includes(fileExtension || '')) {
        const imageUrl = `/images/${fileName}`;
        onChange(imageUrl);
      } else {
        // Si ce n'est pas une image valide, utiliser un placeholder
        onChange('/images/placeholder-plat.svg');
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0] as File;
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Image du plat</label>
      
      {/* Aperçu de l'image */}
      {value && (
        <div className="relative group">
          <div className="w-full h-48 rounded-xl overflow-hidden bg-[#141414] border border-white/10">
            <img 
              src={value} 
              alt="Aperçu" 
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder-plat.jpg';
              }}
            />
          </div>
          
          {/* Bouton pour changer l'image */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Upload size={16} />
          </button>
        </div>
      )}

      {/* Zone d'upload */}
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
          ${isDragging 
            ? 'border-[#d4af37] bg-[#d4af37]/5' 
            : 'border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10'
          }
          ${value ? 'hidden' : 'block'}
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="space-y-4">
          <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto">
            <ImageIcon size={32} className="text-[#d4af37]" />
          </div>
          
          <div className="space-y-2">
            <p className="text-white font-medium">Glissez-déposez une image</p>
            <p className="text-gray-400 text-sm">ou cliquez pour parcourir</p>
          </div>
          
          <div className="text-xs text-gray-500 space-y-1">
            <p>• Formats: JPG, PNG, GIF, WebP, BMP, SVG</p>
            <p>• Taille: 800x600px recommandé</p>
            <p>• Poids: &lt; 500KB (augmenté pour captures)</p>
            <p>• Captures d'écran: Acceptées</p>
          </div>
        </div>
      </div>

      {/* Input caché */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Instructions pour l'admin */}
      <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg p-4 mt-4">
        <h4 className="text-[#d4af37] font-bold text-sm mb-2">📸 Instructions pour les images</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Déposez l'image dans <code className="bg-black/30 px-1 rounded">public/images/</code></li>
          <li>• Nommez simplement: <code className="bg-black/30 px-1 rounded">nom-image.jpg</code></li>
          <li>• Dans l'admin, utilisez: <code className="bg-black/30 px-1 rounded">/images/nom-image.jpg</code></li>
          <li>• L'image sera automatiquement accessible sur le site</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;
