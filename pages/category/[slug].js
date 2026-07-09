import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';
import Header from '../../components/Header';
import PhotoThumb from '../../components/PhotoThumb';

function getCart() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setCategory] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  useEffect(() => {
    if (!slug) return;
    async function load() {
      const { data: cat } = await supabase.from('categories').select('*').eq('slug', slug).single();
      if (!cat) return;
      setCategory(cat);
      const { data: list } = await supabase
        .from('photos')
        .select('*')
        .eq('category_id', cat.id)
        .eq('active', true)
        .order('created_at', { ascending: false });
      setPhotos(list || []);
    }
    load();
    setCartCount(getCart().length);
  }, [slug]);

  function thumbUrl(path) {
    const { data } = supabase.storage.from('thumbnails').getPublicUrl(path);
    return data.publicUrl;
  }

  function addToCart(photo, format, price) {
    const cart = getCart();
    cart.push({ photoId: photo.id, title: photo.title, format, price, key: photo.id + '-' + format + '-' + Date.now() });
    setCart(cart);
    setCartCount(cart.length);
    alert(`"${photo.title}" (${format}) ajouté au panier.`);
  }

  if (!category) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Chargement…</div></div>;

  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <a href="/" style={{ fontSize: 13, color: '#5b5f63' }}>← Catégories</a>
        <h1 style={{ fontSize: 30, marginTop: 12 }}>{category.label}</h1>
        <p style={{ marginTop: 6, color: '#5b5f63' }}>
          Panier : {cartCount} article{cartCount > 1 ? 's' : ''} — <a href="/panier" style={{ color: '#c1432b' }}>voir le panier</a>
        </p>

        {photos.length === 0 && (
          <div className="empty">
            <b style={{ display: 'block', fontSize: 18, marginBottom: 6 }}>Ce catalogue est encore vide</b>
            Connectez-vous en tant qu'administrateur pour y publier des photos.
          </div>
        )}

        <div className="gallery">
          {photos.map((p) => (
            <div key={p.id} className="card">
              <div onClick={() => setLightboxPhoto(p)} style={{ cursor: 'zoom-in' }}>
                <PhotoThumb src={thumbUrl(p.thumbnail_path)}>
                  {p.sold && <span className="sold">Vendue</span>}
                </PhotoThumb>
              </div>
              <div className="body">
                <h4>{p.title}</h4>
                <div className="price" style={{ marginBottom: 10 }}>dès {p.price_digital} €</div>
                {!p.sold ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button className="btn btn-outline" onClick={() => addToCart(p, 'Fichier numérique', p.price_digital)}>
                      Fichier numérique — {p.price_digital} €
                    </button>
                    <button className="btn btn-outline" onClick={() => addToCart(p, 'Tirage 20×30', p.price_20x30)}>
                      Tirage 20×30 — {p.price_20x30} €
                    </button>
                    <button className="btn btn-outline" onClick={() => addToCart(p, 'Tirage 30×45', p.price_30x45)}>
                      Tirage 30×45 — {p.price_30x45} €
                    </button>
                    <button className="btn btn-outline" onClick={() => addToCart(p, 'Tirage A3+', p.price_a3)}>
                      Tirage A3+ — {p.price_a3} €
                    </button>
                  </div>
                ) : (
                  <div style={{ color: '#5b5f63', fontSize: 13 }}>Déjà vendue</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxPhoto && (
        <div className="lightbox-overlay" onClick={() => setLightboxPhoto(null)}>
          <button className="lightbox-close" onClick={() => setLightboxPhoto(null)}>×</button>
          <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
            <img
              src={thumbUrl(lightboxPhoto.thumbnail_path)}
              alt={lightboxPhoto.title}
              className="lightbox-image"
            />
            <div className="watermark-overlay" />
          </div>
        </div>
      )}
    </div>
  );
}
