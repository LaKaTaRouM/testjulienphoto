import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setDone(true);
  }

  return (
    <div>
      <Header />
      <div className="container-narrow">
        <h1 style={{ fontSize: 26, marginBottom: 24 }}>Créer un compte</h1>
        {done ? (
          <p>
            Compte créé. Selon la configuration de votre projet Supabase, un email de confirmation a pu être envoyé —
            vérifiez votre boîte mail, puis <a href="/login" style={{ color: '#c1432b' }}>connectez-vous</a>.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="field">
              <label>Mot de passe (6 caractères minimum)</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>
            {error && <p style={{ color: '#c1432b', marginBottom: 14, fontSize: 13 }}>{error}</p>}
            <button className="btn btn-solid" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
              {loading ? 'Création…' : 'Créer mon compte'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
