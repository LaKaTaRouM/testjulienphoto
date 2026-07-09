import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
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
          <a href="/portfolio">Portfolio</a>
          {user ? (
            <>
              <a href="/mes-achats">Mes achats</a>
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
