import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Header from '../../components/Header';

export default function Admin() {
  const [user, setUser] = useState(undefined); // undefined = pas encore vérifié
  const [isAdmin, setIsAdmin] = useState(false);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  const [categoryId, setCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [priceDigital, setPriceDigital] = useState(15);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setUser(null); return; }
      setUser(session.user);

      const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', session.user.id).single();
      setIsAdmin(!!profile?.is_admin);

      const { data: cats } = await supabase.from('categories').select('*').order('sort_order');
      setCategories(cats || []);
      if (cats && cats[0]) setCategoryId(cats[0].id);

      const res = await fetch('/api/admin/orders', { headers: { Authorization: `Bearer ${session.access_token}` } });
      if (res.ok) setOrders(await res.json());
    }
    load();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) { setStatus("Choisissez une image."); return; }
    setSubmitting(true);
    setStatus('');

    // Détecte si la photo est en paysage ou en portrait avant l'envoi
    const orientation = await new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => resolve(img.naturalWidth >= img.naturalHeight ? 'landscape' : 'portrait');
      img.onerror = () => resolve('portrait');
      img.src = URL.createObjectURL(file);
    });

    const { data: { session } } = await supabase.auth.getSession();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('priceDigital', priceDigital);
    formData.append('orientation', orientation);

    const res = await fetch('/api/admin/add-photo', {
      method: 'POST',
      headers: { Authorization: `Bearer ${session.access_token}` },
      body: formData,
    });
    const data = await res.json();
    setSubmitting(false);
    if (res.ok) {
      setStatus('Photo publiée avec succès.');
      setTitle(''); setFile(null); e.target.reset();
    } else {
      setStatus(data.error || 'Erreur lors de la publication.');
    }
  }

  if (user === undefined) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Chargement…</div></div>;
  if (user === null) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Vous devez être <a href="/login?next=/admin" style={{ color: '#c1432b' }}>connecté</a>.</div></div>;
  if (!isAdmin) return <div><Header /><div className="wrap" style={{ paddingTop: 40 }}>Ce compte n'a pas les droits administrateur. Voir le README pour vous en donner.</div></div>;

  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <h1 style={{ fontSize: 28 }}>Espace administrateur</h1>

        <h2 style={{ fontSize: 18, marginTop: 34, marginBottom: 6 }}>Publier une photo</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
          <div className="field">
            <label>Catégorie</label>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Titre</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="field">
            <label>Prix fichier numérique (€)</label>
            <input type="number" value={priceDigital} onChange={(e) => setPriceDigital(e.target.value)} min={1} required />
          </div>
          <div className="field">
            <label>Image</label>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} required />
          </div>
          {status && <p style={{ fontSize: 13, marginBottom: 12 }}>{status}</p>}
          <button className="btn btn-solid" disabled={submitting}>{submitting ? 'Publication…' : 'Publier'}</button>
        </form>

        <h2 style={{ fontSize: 18, marginTop: 46, marginBottom: 6 }}>Commandes</h2>
        <table className="admin">
          <thead>
            <tr><th>Date</th><th>Client</th><th>Statut</th><th>Total</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{new Date(o.created_at).toLocaleDateString('fr-FR')}</td>
                <td>{o.email}</td>
                <td>{o.status}</td>
                <td>{o.total} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
