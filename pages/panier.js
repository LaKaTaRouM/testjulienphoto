import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

function getCart() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch { return []; }
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default function Panier() {
  const [cart, setCartState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { setCartState(getCart()); }, []);

  function remove(key) {
    const next = cart.filter((i) => i.key !== key);
    setCart(next);
    setCartState(next);
  }

  const total = cart.reduce((s, i) => s + i.price, 0);

  async function checkout() {
    setError('');
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      window.location.href = '/login?next=/panier';
      return;
    }
    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
      body: JSON.stringify({ items: cart }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.url) {
      localStorage.removeItem('cart');
      window.location.href = data.url;
    } else {
      setError(data.error || "Une erreur est survenue.");
    }
  }

  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 640 }}>
        <h1 style={{ fontSize: 28 }}>Votre panier</h1>

        {cart.length === 0 ? (
          <div className="empty">Votre panier est vide. <a href="/" style={{ color: '#c1432b' }}>Retour au portfolio</a>.</div>
        ) : (
          <div style={{ marginTop: 20 }}>
            {cart.map((item) => (
              <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid rgba(20,23,26,.14)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#5b5f63' }}>{item.format}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontWeight: 700, color: '#c1432b' }}>{item.price} €</span>
                  <button onClick={() => remove(item.key)} style={{ background: 'none', border: 'none', color: '#c1432b', fontSize: 12, cursor: 'pointer' }}>
                    Retirer
                  </button>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', fontWeight: 700, fontSize: 18 }}>
              <span>Total</span><span>{total} €</span>
            </div>
            {error && <p style={{ color: '#c1432b', marginBottom: 12 }}>{error}</p>}
            <button className="btn btn-solid" style={{ width: '100%', justifyContent: 'center' }} onClick={checkout} disabled={loading}>
              {loading ? 'Redirection…' : 'Passer commande'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
