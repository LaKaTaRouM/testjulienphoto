import { createClient } from '@supabase/supabase-js';

// N'utiliser ce client que dans pages/api/*.js (jamais dans le code du navigateur)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Vérifie que la requête vient bien d'un utilisateur connecté et administrateur
export async function requireAdmin(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
  if (!token) return null;

  const { data: userData, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !userData?.user) return null;

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('is_admin')
    .eq('id', userData.user.id)
    .single();

  if (!profile?.is_admin) return null;
  return userData.user;
}

// Vérifie juste que la requête vient d'un utilisateur connecté (pas forcément admin)
export async function requireUser(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
  if (!token) return null;

  const { data: userData, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !userData?.user) return null;
  return userData.user;
}
