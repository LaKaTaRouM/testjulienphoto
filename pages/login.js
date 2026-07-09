import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import Header from '../components/Header';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.push(router.query.next || '/');
  }

  return (
    <div>
      <Header />
      <div className="container-narrow">
        <h1 style={{ fontSize: 26, marginBottom: 24 }}>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Mot de passe</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p style={{ color: '#c1432b', marginBottom: 14, fontSize: 13 }}>{error}</p>}
          <button className="btn btn-solid" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
        <p style={{ marginTop: 16, fontSize: 13, color: '#5b5f63' }}>
          Pas encore de compte ? <a href="/signup" style={{ color: '#c1432b' }}>Créer un compte</a>
        </p>
      </div>
    </div>
  );
}
