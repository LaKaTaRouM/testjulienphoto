import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';
import PhotoThumb from '../components/PhotoThumb';

export default function MesAchats() {
  const [orders, setOrders] = useState(null);
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { window.location.href = '/login?next=/espace-client'; return; }

      const { data, error } = await supabase
        .from('orders')
        .select('id, status, total, created_at, order_items ( id, format, price, photo_id, photos ( title, thumbnail_path ) )')
        .eq('status', 'paid')
        .order('created_at', { ascending: false });

      setOrders(data || []);
    }
    load();
  }, []);

  function thumbUrl(path) {
    const { data } = supabase.storage.from('thumbnails').getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleDownload(itemId, title) {
    setDownloading(itemId);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(`/api/download?item_id=${itemId}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });
    const data = await res.json();

    if (data.url) {
      try {
        const fileRes = await fetch(data.url);
        const blob = await fileRes.blob();
        const ext = data.url.split('?')[0].split('.').pop() || 'jpg';
        const filename = `${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.${ext}`;
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
      } catch (err) {
        // Si le téléchargement direct échoue pour une raison ou une autre, on retombe sur l'ouverture classique
        window.open(data.url, '_blank');
      }
    } else {
      alert(data.error || 'Téléchargement indisponible.');
    }
    setDownloading(null);
  }

  if (orders === null) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Chargement…</div></div>;

  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <p style={{ color: '#c1432b', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
          Espace client
        </p>
        <h1 style={{ fontSize: 32 }}>Vos achats</h1>

        {orders.length === 0 && <div className="empty">Vous n'avez pas encore d'achat.</div>}

        {orders.map((order) => (
          <div key={order.id} style={{ marginTop: 28 }}>
            <p style={{ fontSize: 12, color: '#5b5f63', marginBottom: 10 }}>
              Commande du {new Date(order.created_at).toLocaleDateString('fr-FR')} — {order.total} €
            </p>
            <div className="gallery">
              {order.order_items.map((item) => (
                <div key={item.id} className="card">
                  <PhotoThumb src={thumbUrl(item.photos.thumbnail_path)} />
                  <div className="body">
                    <h4>{item.photos.title}</h4>
                    <div style={{ fontSize: 12, color: '#5b5f63', marginBottom: 10 }}>{item.format}</div>
                    <button className="btn btn-outline" onClick={() => handleDownload(item.id, item.photos.title)} disabled={downloading === item.id}>
                      {downloading === item.id ? 'Préparation…' : 'Télécharger'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
