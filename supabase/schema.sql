-- ============================================================
-- SCHÉMA DE LA BOUTIQUE PHOTO
-- À coller dans Supabase > SQL Editor > New query > Run
-- ============================================================

-- Profils utilisateurs (lié à chaque compte créé via Supabase Auth)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

-- Crée automatiquement un profil quand quelqu'un s'inscrit
create function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Catégories (Nature, Sport, Sport Auto, Animaux...)
create table categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null,
  sort_order int not null default 0
);

insert into categories (slug, label, sort_order) values
  ('nature', 'Nature', 1),
  ('sport', 'Sport', 2),
  ('sport-auto', 'Sport Auto', 3),
  ('animaux', 'Animaux', 4);

-- Photos
create table photos (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id),
  title text not null,
  frame_code text,
  price_digital int not null default 15,
  price_20x30 int not null default 29,
  price_30x45 int not null default 49,
  price_a3 int not null default 69,
  thumbnail_path text not null,
  original_path text not null,
  sold boolean not null default false,
  created_at timestamptz not null default now()
);

-- Commandes
create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  stripe_session_id text unique,
  status text not null default 'pending', -- pending | paid | cancelled
  total int not null default 0,
  created_at timestamptz not null default now()
);

-- Lignes de commande (une par photo + format achetés)
create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  photo_id uuid not null references photos(id),
  format text not null, -- digital | 20x30 | 30x45 | a3
  price int not null
);

-- ============================================================
-- SÉCURITÉ (Row Level Security) : qui peut lire/écrire quoi
-- ============================================================
alter table profiles enable row level security;
alter table categories enable row level security;
alter table photos enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- Tout le monde peut voir les catégories et les photos (c'est une vitrine)
create policy "Catégories visibles par tous" on categories for select using (true);
create policy "Photos visibles par tous" on photos for select using (true);

-- Chacun voit uniquement son propre profil
create policy "Voir son propre profil" on profiles for select using (auth.uid() = id);

-- Chacun voit uniquement ses propres commandes
create policy "Voir ses propres commandes" on orders for select using (auth.uid() = user_id);
create policy "Voir ses propres lignes de commande" on order_items for select using (
  exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid())
);

-- Note : les écritures (ajout de photo, création de commande) passent toutes
-- par les routes /api/... du site, qui utilisent une clé spéciale (service role)
-- et vérifient elles-mêmes les droits. Ces policies protègent uniquement la lecture directe.
