import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import PhotoThumb from '../components/PhotoThumb';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [heroUrl, setHeroUrl] = useState(null);

  useEffect(() => {
    async function load() {
      const { data: cats } = await supabase.from('categories').select('*').order('sort_order');
      const { data: allPhotos } = await supabase.from('photos').select('id, category_id, thumbnail_path, orientation, active');
      const photos = (allPhotos || []).filter((p) => p.active);

      const withCounts = (cats || []).map((c) => {
        const inCat = (photos || []).filter((p) => p.category_id === c.id);
        const latest = inCat[inCat.length - 1];
        let thumbUrl = null;
        if (latest) {
          const { data } = supabase.storage.from('thumbnails').getPublicUrl(latest.thumbnail_path);
          thumbUrl = data.publicUrl;
        }
        return { ...c, count: inCat.length, thumbUrl };
      });
      setCategories(withCounts);

      // Choisit une photo au hasard parmi celles publiées en paysage, pour la bannière d'accueil
      const landscapePhotos = (photos || []).filter((p) => p.orientation === 'landscape');
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
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <p style={{ color: '#c1432b', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
          Portfolio
        </p>
        <h1 style={{ fontSize: 32 }}>Les catalogues</h1>
        <p style={{ marginTop: 10, color: '#5b5f63', maxWidth: 460 }}>
          Chaque catégorie est un catalogue à part entière. Ouvrez-en une pour parcourir les photos publiées et les acheter.
        </p>

        <div className="cat-grid">
          {categories.map((c) => (
            <a key={c.id} href={`/category/${c.slug}`} className="cat-tile">
              {c.thumbUrl ? (
                <PhotoThumb src={c.thumbUrl}>
                  <div className="cat-tile-overlay">
                    <div>
                      <div className="count">{c.count} photo{c.count > 1 ? 's' : ''}</div>
                      <h3>{c.label}</h3>
                    </div>
                  </div>
                </PhotoThumb>
              ) : (
                <div style={{ position: 'relative', aspectRatio: '4/5', background: '#2a2a2a' }}>
                  <div className="cat-tile-overlay">
                    <div>
                      <div className="count">{c.count} photo{c.count > 1 ? 's' : ''}</div>
                      <h3>{c.label}</h3>
                    </div>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
