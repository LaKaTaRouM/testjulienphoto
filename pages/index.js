import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      const { data: cats } = await supabase.from('categories').select('*').order('sort_order');
      const { data: photos } = await supabase.from('photos').select('id, category_id, thumbnail_path');

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
    }
    load();
  }, []);

  return (
    <div>
      <Header />
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
            <a key={c.id} href={`/category/${c.slug}`} className="cat-tile"
               style={{ background: c.thumbUrl ? `url(${c.thumbUrl}) center/cover` : '#2a2a2a' }}>
              <div>
                <div className="count">{c.count} photo{c.count > 1 ? 's' : ''}</div>
                <h3>{c.label}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
