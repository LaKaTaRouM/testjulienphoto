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
      <div className="wrap" style={{ paddingTop: 50, paddingBottom: 60 }}>
        <h2 style={{ fontSize: 26, textTransform: 'uppercase', letterSpacing: '.02em', maxWidth: 760 }}>
          Photographe pour animaux de compagnie sur Paris et l'Île de France
        </h2>
        <p style={{ marginTop: 18, color: '#5b5f63', maxWidth: 720, fontSize: 15, lineHeight: 1.7 }}>
          Bienvenue sur Temps de Paws. Je suis Antoine, photographe professionnel spécialisé dans la photographie animalière pour les chiens, les chats, les lapins et bien d'autres animaux de compagnie. Que votre compagnon soit un animal à poils, à plumes ou à écailles, je suis là pour vous offrir une expérience photo unique, bienveillante et naturelle.
        </p>
        <a href="/portfolio" className="btn btn-solid" style={{ marginTop: 24, display: 'inline-flex' }}>
          Voir le portfolio
        </a>
      </div>
    </div>
  );
}
