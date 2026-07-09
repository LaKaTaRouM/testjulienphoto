import { useState } from 'react';

// Affiche une photo dans un cadre dont le format s'adapte à son orientation réelle,
// pour ne pas rogner une photo en paysage dans un cadre trop haut, ni l'inverse.
export default function PhotoThumb({ src, className = '', children, style = {} }) {
  const [orientation, setOrientation] = useState('portrait'); // valeur par défaut le temps du chargement

  function handleLoad(e) {
    const { naturalWidth, naturalHeight } = e.target;
    setOrientation(naturalWidth >= naturalHeight ? 'landscape' : 'portrait');
  }

  return (
    <div
      className={`${className} thumb-${orientation}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: orientation === 'landscape' ? '3 / 2' : '4 / 5',
        ...style,
      }}
    >
      <img
        src={src}
        onLoad={handleLoad}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div className="watermark-overlay" />
      {children}
    </div>
  );
}
