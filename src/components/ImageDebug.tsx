import React from 'react';

interface ImageDebugProps {
  imageUrl: string;
  itemName: string;
}

const ImageDebug: React.FC<ImageDebugProps> = ({ imageUrl, itemName }) => {
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isBase64 = (url: string) => {
    return url.startsWith('data:image/');
  };

  const isLocalPath = (url: string) => {
    return url.startsWith('/images/') || url.startsWith('./images/');
  };

  return (
    <div className="bg-black/50 border border-yellow-500 rounded p-2 text-xs text-yellow-300 mb-2">
      <div className="font-bold mb-1">🔍 Debug Image: {itemName}</div>
      <div>URL: {imageUrl || 'NULL'}</div>
      <div>Type: {
        !imageUrl ? 'NULL' :
        isBase64(imageUrl) ? 'Base64 ✅' :
        isLocalPath(imageUrl) ? 'Local Path ❌' :
        isValidUrl(imageUrl) ? 'URL ✅' :
        'Invalid ❌'
      }</div>
      <div>Length: {imageUrl?.length || 0} chars</div>
    </div>
  );
};

export default ImageDebug;
