import { supabaseAdmin, requireAdmin } from '../../../lib/supabaseAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const admin = await requireAdmin(req);
  if (!admin) return res.status(403).json({ error: 'Accès administrateur requis.' });

  const { photoId, active } = req.body;
  if (!photoId) return res.status(400).json({ error: 'photoId manquant.' });

  // On ne supprime jamais vraiment une photo déjà achetée : on la masque simplement,
  // pour que les acheteurs puissent toujours retélécharger ce qu'ils ont payé.
  const { error } = await supabaseAdmin
    .from('photos')
    .update({ active: active !== false })
    .eq('id', photoId);
  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ ok: true });
}
