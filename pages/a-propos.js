import Header from '../components/Header';

export default function APropos() {
  return (
    <div>
      <Header />
      <div className="wrap" style={{ paddingTop: 50, paddingBottom: 60 }}>
        <p style={{ color: '#c1432b', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
          À propos
        </p>
        <h1 style={{ fontSize: 32 }}>Qui je suis</h1>
        <p style={{ marginTop: 14, color: '#5b5f63', maxWidth: 620, fontSize: 15, lineHeight: 1.7 }}>
          Cette page est prête à être complétée avec votre parcours, votre matériel, votre démarche photographique,
          ou une photo de vous. Dites-moi ce que vous souhaitez y afficher et je la mets à jour.
        </p>
      </div>
    </div>
  );
}
