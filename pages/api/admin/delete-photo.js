import { supabaseAdmin, requireAdmin } from '../../../lib/supabaseAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const admin = await requireAdmin(req);
  if (!admin) return res.status(403).json({ error: 'Accès administrateur requis.' });

  const { photoId } = req.body;
  if (!photoId) return res.status(400).json({ error: 'photoId manquant.' });

  const { data: photo, error: fetchError } = await supabaseAdmin
    .from('photos')
    .select('thumbnail_path, original_path')
    .eq('id', photoId)
    .single();
  if (fetchError || !photo) return res.status(404).json({ error: 'Photo introuvable.' });

  // Supprime les fichiers dans les deux buckets de stockage
  await supabaseAdmin.storage.from('thumbnails').remove([photo.thumbnail_path]);
  await supabaseAdmin.storage.from('originals').remove([photo.original_path]);

  // Supprime la ligne en base
  const { error: deleteError } = await supabaseAdmin.from('photos').delete().eq('id', photoId);
  if (deleteError) return res.status(500).json({ error: deleteError.message });

  res.status(200).json({ ok: true });
}
