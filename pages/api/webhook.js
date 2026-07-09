import { stripe } from '../../lib/stripe';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

// Stripe a besoin du corps brut de la requête pour vérifier la signature
export const config = { api: { bodyParser: false } };

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Signature webhook invalide: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const orderId = session.metadata?.order_id;
    if (orderId) {
      await supabaseAdmin.from('orders').update({ status: 'paid' }).eq('id', orderId);

      // Marque les photos achetées en tirage comme vendues (le fichier numérique reste disponible pour d'autres)
      const { data: items } = await supabaseAdmin
        .from('order_items')
        .select('photo_id, format')
        .eq('order_id', orderId);
      for (const item of items || []) {
        if (item.format !== 'Fichier numérique') {
          await supabaseAdmin.from('photos').update({ sold: true }).eq('id', item.photo_id);
        }
      }
    }
  }

  res.status(200).json({ received: true });
}
