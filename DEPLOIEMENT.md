# 🌿 TERRAXCO — Guide de déploiement GitHub Pages

## Fichiers du site
- `index.html` — Page principale (bilingue FR/EN)
- `style.css` — Styles et design
- `script.js` — Interactivité et changement de langue

---

## Étape 1 — Créer un compte GitHub
1. Aller sur **github.com**
2. Cliquer **Sign up**
3. Choisir le nom d'utilisateur : `terraxco` ou `terraxco-inc`

---

## Étape 2 — Créer le dépôt
1. Cliquer **New repository** (bouton vert)
2. Nom du dépôt : `terraxco.github.io` ← **IMPORTANT : nom exact**
3. Cocher **Public**
4. Cliquer **Create repository**

---

## Étape 3 — Uploader les fichiers
1. Dans le dépôt, cliquer **uploading an existing file**
2. Glisser-déposer les 3 fichiers :
   - `index.html`
   - `style.css`
   - `script.js`
3. Écrire dans le message : `Premier déploiement TERRAXCO`
4. Cliquer **Commit changes**

---

## Étape 4 — Activer GitHub Pages
1. Aller dans **Settings** (onglet en haut du dépôt)
2. Cliquer **Pages** dans le menu gauche
3. Sous **Source** : choisir **Deploy from a branch**
4. Branch : **main** → folder : **/ (root)**
5. Cliquer **Save**

---

## Étape 5 — Accéder au site
Après 2–3 minutes, ton site est en ligne à :

**https://terraxco.github.io**

C'est **100% gratuit** et accessible partout.

---

## Étape 6 — Connecter ton domaine terraxco.ca (optionnel)
Une fois que tu as acheté `terraxco.ca` :

1. Chez ton registraire (ex: Namecheap), ajouter ces enregistrements DNS :
   ```
   Type: A    Valeur: 185.199.108.153
   Type: A    Valeur: 185.199.109.153
   Type: A    Valeur: 185.199.110.153
   Type: A    Valeur: 185.199.111.153
   Type: CNAME www → terraxco.github.io
   ```
2. Dans GitHub Pages Settings → **Custom domain** → entrer `terraxco.ca`
3. Cocher **Enforce HTTPS**
4. Attendre 24–48h pour la propagation DNS

Ton site sera alors accessible sur **terraxco.ca** 🎉

---

## Modifier le site plus tard
Pour changer le numéro de téléphone, textes, etc. :
1. Aller sur github.com dans ton dépôt
2. Cliquer sur le fichier à modifier (ex: `index.html`)
3. Cliquer l'icône crayon ✏️
4. Faire tes modifications
5. Cliquer **Commit changes**
Le site se met à jour automatiquement en 1–2 minutes.

---

## Informations à remplacer dans index.html
Chercher et remplacer ces placeholders :
- `418-XXX-XXXX` → ton vrai numéro
- `info@terraxco.ca` → ton vrai courriel
- `terraxco.ca` → ton vrai domaine

---

*Site créé pour TERRAXCO Inc. — Aménagement & Déneigement · Québec*
