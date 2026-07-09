import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Header() {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    supabase.from('categories').select('slug, label').order('sort_order').then(({ data }) => {
      setCategories(data || []);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <header className="site">
      <div className="nav">
        <a href="/" className="logo">Chambre Noire</a>
        <nav>
          <span className="nav-dropdown">
            <a href="/portfolio">Portfolio</a>
            {categories.length > 0 && (
              <div className="nav-dropdown-menu">
                {categories.map((c) => (
                  <a key={c.slug} href={`/category/${c.slug}`}>{c.label}</a>
                ))}
              </div>
            )}
          </span>
          <a href="/prestations">Prestations</a>
          <a href="/a-propos">À propos</a>
          {user ? (
            <>
              <a href="/espace-client">Espace client</a>
              <a href="#" onClick={handleLogout}>Déconnexion</a>
            </>
          ) : (
            <>
              <a href="/login">Connexion</a>
              <a href="/signup">Créer un compte</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
