import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

export default function MesAchats() {
  const [orders, setOrders] = useState(null);
  const [downloading, setDownloading] = useState(null);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { window.location.href = '/login?next=/mes-achats'; return; }

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

  async function handleDownload(itemId) {
    setDownloading(itemId);
    const { data: { session } } = await supabase.auth.getSession();
    const res = await fetch(`/api/download?item_id=${itemId}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });
    const data = await res.json();
    setDownloading(null);
    if (data.url) {
      window.open(data.url, '_blank');
    } else {
      alert(data.error || 'Téléchargement indisponible.');
    }
  }

  if (orders === null) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Chargement…</div></div>;

  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <h1 style={{ fontSize: 28 }}>Mes achats</h1>

        {orders.length === 0 && <div className="empty">Vous n'avez pas encore d'achat.</div>}

        {orders.map((order) => (
          <div key={order.id} style={{ marginTop: 28 }}>
            <p style={{ fontSize: 12, color: '#5b5f63', marginBottom: 10 }}>
              Commande du {new Date(order.created_at).toLocaleDateString('fr-FR')} — {order.total} €
            </p>
            <div className="gallery">
              {order.order_items.map((item) => (
                <div key={item.id} className="card">
                  <div className="thumb" style={{ backgroundImage: `url(${thumbUrl(item.photos.thumbnail_path)})` }} />
                  <div className="body">
                    <h4>{item.photos.title}</h4>
                    <div style={{ fontSize: 12, color: '#5b5f63', marginBottom: 10 }}>{item.format}</div>
                    <button className="btn btn-outline" onClick={() => handleDownload(item.id)} disabled={downloading === item.id}>
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
