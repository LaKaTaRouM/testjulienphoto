import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

export default function Home() {
  const [heroUrl, setHeroUrl] = useState(null);

  useEffect(() => {
    async function load() {
      const { data: allPhotos } = await supabase.from('photos').select('thumbnail_path, orientation, active');
      const photos = (allPhotos || []).filter((p) => p.active);

      // Choisit une photo au hasard parmi celles publiées en paysage, pour la bannière d'accueil
      const landscapePhotos = photos.filter((p) => p.orientation === 'landscape');
      if (landscapePhotos.length > 0) {
        const pick = landscapePhotos[Math.floor(Math.random() * landscapePhotos.length)];
        const { data } = supabase.storage.from('thumbnails').getPublicUrl(pick.thumbnail_path);
        setHeroUrl(data.publicUrl);
      }
    }
    load();
  }, []);

  return (
    <div>
      <Header />
      {heroUrl && (
        <div className="home-hero" style={{ backgroundImage: `url(${heroUrl})` }} />
      )}
      <div className="wrap" style={{ paddingTop: 50, paddingBottom: 60, textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', whiteSpace: 'nowrap' }}>
          La simplicité dans l'image, la constance dans l'effort.
        </h2>
        <p style={{ marginTop: 18, color: '#5b5f63', maxWidth: 620, marginLeft: 'auto', marginRight: 'auto', fontSize: 15, lineHeight: 1.7 }}>
          Bienvenue sur Chambre Noire. Je suis Julien, photographe amateur basé dans le Sud Est de la France.
        </p>
        <a href="/portfolio" className="btn btn-solid" style={{ marginTop: 24, display: 'inline-flex' }}>
          Voir le portfolio
        </a>
      </div>
    </div>
  );
}
