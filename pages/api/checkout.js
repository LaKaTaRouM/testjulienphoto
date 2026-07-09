import { stripe } from '../../lib/stripe';
import { supabaseAdmin, requireUser } from '../../lib/supabaseAdmin';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const user = await requireUser(req);
  if (!user) return res.status(401).json({ error: 'Non connecté.' });

  const { items } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Panier vide.' });
  }

  const total = items.reduce((s, i) => s + i.price, 0);

  // 1. Créer la commande en base, statut "pending"
  const { data: order, error: orderError } = await supabaseAdmin
    .from('orders')
    .insert({ user_id: user.id, status: 'pending', total })
    .select()
    .single();
  if (orderError) return res.status(500).json({ error: orderError.message });

  const orderItemsPayload = items.map((i) => ({
    order_id: order.id,
    photo_id: i.photoId,
    format: i.format,
    price: i.price,
  }));
  const { error: itemsError } = await supabaseAdmin.from('order_items').insert(orderItemsPayload);
  if (itemsError) return res.status(500).json({ error: itemsError.message });

  // 2. Créer la session Stripe
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: user.email,
    line_items: items.map((i) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: `${i.title} — ${i.format}` },
        unit_amount: i.price * 100,
      },
      quantity: 1,
    })),
    metadata: { order_id: order.id },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/mes-achats?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/panier`,
  });

  // 3. Mémoriser l'identifiant de session Stripe sur la commande
  await supabaseAdmin.from('orders').update({ stripe_session_id: session.id }).eq('id', order.id);

  res.status(200).json({ url: session.url });
}
