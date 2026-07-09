# Chambre Noire — boutique photo (guide de déploiement)

Suivez ces étapes dans l'ordre. Chacune se fait dans une interface web, sans ligne de commande sauf indication contraire.

---

## Étape 1 — Base de données (Supabase)

1. Allez sur [supabase.com](https://supabase.com), connectez-vous, cliquez **New project**.
2. Choisissez un nom (ex. "chambre-noire"), un mot de passe de base de données (notez-le), une région proche (Europe).
3. Une fois le projet créé, allez dans **SQL Editor** (menu de gauche) → **New query**.
4. Ouvrez le fichier `supabase/schema.sql` de ce projet, copiez tout son contenu, collez-le dans l'éditeur, cliquez **Run**.
   → Cela crée toutes les tables (catégories, photos, commandes...) et insère vos 4 catégories.
5. Allez dans **Storage** (menu de gauche) → créez deux buckets :
   - `thumbnails` → cochez **Public bucket**
   - `originals` → laissez **Public bucket** décoché (privé)
6. Allez dans **Project Settings** (icône engrenage) → **API**. Notez ces 3 valeurs, vous en aurez besoin à l'étape 4 :
   - `Project URL`
   - `anon public` key
   - `service_role` key (cliquez sur l'œil pour la révéler — gardez-la secrète, ne la partagez jamais)

---

## Étape 2 — Paiement (Stripe)

1. Sur [dashboard.stripe.com](https://dashboard.stripe.com), restez en **mode Test** (interrupteur en haut à droite) pour l'instant — aucun vrai paiement ne sera débité.
2. Allez dans **Developers** → **API keys**. Notez :
   - `Publishable key` (commence par `pk_test_...`)
   - `Secret key` (commence par `sk_test_...`)
3. On configurera le webhook à l'étape 5, une fois le site en ligne (il a besoin d'une adresse publique).

---

## Étape 3 — Mettre le code sur GitHub

1. Sur [github.com](https://github.com), cliquez **New repository**, nommez-le `chambre-noire`, laissez-le privé, créez-le sans README.
2. Sur votre ordinateur, dans le dossier `photo-shop` que je vous ai fourni, ouvrez un terminal et lancez :
   ```
   git init
   git add .
   git commit -m "Premier envoi"
   git branch -M main
   git remote add origin https://github.com/VOTRE-PSEUDO/chambre-noire.git
   git push -u origin main
   ```
   (Remplacez `VOTRE-PSEUDO` par votre nom d'utilisateur GitHub — l'adresse exacte est affichée sur la page du dépôt vide que vous venez de créer.)

---

## Étape 4 — Déployer sur Vercel

1. Sur [vercel.com](https://vercel.com), cliquez **Add New** → **Project**, choisissez le dépôt `chambre-noire`.
2. Avant de cliquer Deploy, ouvrez **Environment Variables** et ajoutez, une par une (noms exacts) :
   - `NEXT_PUBLIC_SUPABASE_URL` → le Project URL noté à l'étape 1
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → la clé anon public
   - `SUPABASE_SERVICE_ROLE_KEY` → la clé service_role
   - `STRIPE_SECRET_KEY` → votre clé sk_test_...
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → votre clé pk_test_...
   - `STRIPE_WEBHOOK_SECRET` → laissez vide pour l'instant, on le remplit à l'étape 5
   - `NEXT_PUBLIC_SITE_URL` → laissez vide pour l'instant, on le remplit juste après
3. Cliquez **Deploy**. Au bout d'une minute, Vercel vous donne une adresse du type `https://chambre-noire-xxxx.vercel.app`.
4. Retournez dans **Settings** → **Environment Variables** du projet Vercel, remplissez `NEXT_PUBLIC_SITE_URL` avec cette adresse, puis relancez un déploiement (**Deployments** → menu **⋯** sur le dernier → **Redeploy**).

---

## Étape 5 — Connecter le webhook Stripe

C'est ce qui permet à Stripe de prévenir votre site quand un paiement est validé.

1. Sur [dashboard.stripe.com](https://dashboard.stripe.com) (toujours en mode Test) → **Developers** → **Webhooks** → **Add endpoint**.
2. URL à renseigner : `https://VOTRE-SITE.vercel.app/api/webhook`
3. Événement à écouter : `checkout.session.completed`
4. Une fois créé, Stripe affiche une **Signing secret** (commence par `whsec_...`). Copiez-la.
5. Retournez dans Vercel → **Settings** → **Environment Variables**, remplissez `STRIPE_WEBHOOK_SECRET` avec cette valeur, puis redéployez (même manip qu'à l'étape 4.4).

---

## Étape 6 — Vous donner les droits administrateur

1. Allez sur votre site, cliquez **Créer un compte**, inscrivez-vous avec votre email.
2. Retournez dans Supabase → **SQL Editor** → **New query**, lancez :
   ```sql
   update profiles set is_admin = true where email = 'votre-email@exemple.com';
   ```
3. Reconnectez-vous sur le site, puis allez sur `https://VOTRE-SITE.vercel.app/admin` : vous devriez maintenant voir l'espace administrateur.

---

## Étape 7 — Tester un achat

1. Publiez une première photo depuis `/admin`.
2. Ouvrez la catégorie correspondante, ajoutez la photo au panier, passez commande.
3. Sur la page de paiement Stripe (mode Test), utilisez la carte de test : numéro `4242 4242 4242 4242`, n'importe quelle date future, n'importe quel CVC.
4. Après paiement, vous devriez être redirigé vers `/mes-achats` et pouvoir télécharger la photo.

---

## Passer en vrais paiements

Quand vous êtes prêt à encaisser de vrais clients : dans Stripe, basculez le compte en mode **Live** (après avoir renseigné vos informations d'entreprise), récupérez les clés `pk_live_...` / `sk_live_...`, remplacez les variables d'environnement dans Vercel, et recréez le webhook en mode Live (étape 5) avec la nouvelle signing secret.

## Si vous êtes bloqué à une étape

Revenez me voir avec le message d'erreur exact (copiez-le en entier) et l'étape où vous en êtes — je vous aiderai à débloquer.
