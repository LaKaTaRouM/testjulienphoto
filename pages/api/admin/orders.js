import { supabaseAdmin, requireAdmin } from '../../../lib/supabaseAdmin';

export default async function handler(req, res) {
  const admin = await requireAdmin(req);
  if (!admin) return res.status(403).json({ error: 'Accès administrateur requis.' });

  const { data: orders, error } = await supabaseAdmin
    .from('orders')
    .select('id, status, total, created_at, user_id')
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) return res.status(500).json({ error: error.message });

  const withEmails = await Promise.all(
    orders.map(async (o) => {
      const { data: profile } = await supabaseAdmin.from('profiles').select('email').eq('id', o.user_id).single();
      return { ...o, email: profile?.email || o.user_id };
    })
  );

  res.status(200).json(withEmails);
}
