import formidable from 'formidable';
import fs from 'fs';
import { supabaseAdmin, requireAdmin } from '../../../lib/supabaseAdmin';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const admin = await requireAdmin(req);
  if (!admin) return res.status(403).json({ error: 'Accès administrateur requis.' });

  const form = formidable({});
  const [fields, files] = await form.parse(req);

  const categoryId = fields.categoryId?.[0];
  const title = fields.title?.[0];
  const priceDigital = parseInt(fields.priceDigital?.[0] || '15', 10);
  const orientation = fields.orientation?.[0] === 'landscape' ? 'landscape' : 'portrait';
  const file = files.file?.[0];

  if (!categoryId || !title || !file) {
    return res.status(400).json({ error: 'Champs manquants.' });
  }

  const buffer = fs.readFileSync(file.filepath);
  const ext = file.originalFilename.split('.').pop();
  const path = `${categoryId}/${Date.now()}.${ext}`;

  // Le fichier original va dans le bucket privé "originals"
  const { error: origError } = await supabaseAdmin.storage
    .from('originals')
    .upload(path, buffer, { contentType: file.mimetype });
  if (origError) return res.status(500).json({ error: 'Échec upload original: ' + origError.message });

  // La même image sert de vignette publique (bucket "thumbnails")
  // Pour un vrai site, vous pourriez générer ici une version compressée/floutée avant l'achat.
  const { error: thumbError } = await supabaseAdmin.storage
    .from('thumbnails')
    .upload(path, buffer, { contentType: file.mimetype });
  if (thumbError) return res.status(500).json({ error: 'Échec upload vignette: ' + thumbError.message });

  const { error: dbError } = await supabaseAdmin.from('photos').insert({
    category_id: categoryId,
    title,
    price_digital: priceDigital,
    price_20x30: Math.round(priceDigital * 1.93),
    price_30x45: Math.round(priceDigital * 3.27),
    price_a3: Math.round(priceDigital * 4.6),
    thumbnail_path: path,
    original_path: path,
    orientation,
  });
  if (dbError) return res.status(500).json({ error: dbError.message });

  res.status(200).json({ ok: true });
}
