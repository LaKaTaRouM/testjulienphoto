import { supabaseAdmin, requireUser } from '../../lib/supabaseAdmin';

export default async function handler(req, res) {
  const user = await requireUser(req);
  if (!user) return res.status(401).json({ error: 'Non connecté.' });

  const { item_id } = req.query;
  if (!item_id) return res.status(400).json({ error: 'item_id manquant.' });

  // Vérifie que cette ligne de commande appartient bien à l'utilisateur ET que la commande est payée
  const { data: item, error } = await supabaseAdmin
    .from('order_items')
    .select('photo_id, orders!inner(user_id, status), photos(original_path)')
    .eq('id', item_id)
    .single();

  if (error || !item) return res.status(404).json({ error: 'Achat introuvable.' });
  if (item.orders.user_id !== user.id) return res.status(403).json({ error: 'Accès refusé.' });
  if (item.orders.status !== 'paid') return res.status(403).json({ error: 'Commande non payée.' });

  const { data, error: urlError } = await supabaseAdmin.storage
    .from('originals')
    .createSignedUrl(item.photos.original_path, 60 * 10); // lien valable 10 minutes

  if (urlError) return res.status(500).json({ error: urlError.message });

  res.status(200).json({ url: data.signedUrl });
}
