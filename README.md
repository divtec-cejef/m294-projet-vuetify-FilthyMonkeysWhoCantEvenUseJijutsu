# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
**API choisie :** [GiantBomb API](https://www.giantbomb.com/api/)  
**Pourquoi :** cette API propose une base de données complète sur les jeux vidéo — titres, plateformes, images, descriptions, notes, etc. Elle est idéale pour créer une application de type “Vapor” (inspirée de Steam) permettant d’explorer et de gérer des jeux favoris.

**Public cible :**  
Les joueurs et curieux qui souhaitent consulter les fiches de jeux, découvrir des nouveautés et sauvegarder leurs favoris.

**Objectifs de l’application :**  
Créer une web app fluide et moderne où l’utilisateur peut :
- Parcourir un catalogue de jeux vidéo via GiantBomb
- Rechercher et filtrer les résultats
- Accéder à la fiche détaillée d’un jeu
- Gérer une “wishlist” persistante

### Fonctionnalités principales
- ✅ Liste dynamique de jeux vidéo (via GiantBomb API)
- 🔎 Recherche et filtres par nom ou plateforme
- 📄 Vue détail (image, résumé, date, genre, etc.)
- ⭐ Ajout / suppression de jeux dans la **wishlist**
- 💾 Persistance locale (localStorage via Pinia)

### Aperçu visuel
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Axios Docs](https://axios-http.com/)
- [GiantBomb API](https://www.giantbomb.com/api/)
- Autres : tutoriels YouTube & StackOverflow

#### Progression
- **Semaine 1 :** installation du projet, intégration de Vuetify
- **Semaine 2 :** configuration de l’API GiantBomb avec Axios
- **Semaine 3 :** création des composants principaux (`Gamecard`, `Gamefilters`)
- **Semaine 4 :** ajout de la page de détails et de la persistance wishlist
- **Semaine 5 :** design final, tests et corrections

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE :** Visual Studio Code
- **Versioning :** Git + GitHub Classroom
- **Dépendances principales :** Vue 3, Vuetify 3, Pinia, Axios
- **Gestion API Keys :** `.env` + `.env.example`
  ```bash
  VITE_GIANTBOMB_API_KEY=ta_cle_api
  VITE_API_BASE_URL=https://www.giantbomb.com/api/
  ```

### Installation & Run
```bash
git clone <repo>
cd projet-vapor
npm install
npm run dev
```

### Méthodologie
- Composants réutilisables (`Gamecard`, `Gamefilters`, `AppFooter`)
- Communication par **props/emits** entre vues et composants
- **Pinia** pour la gestion du store global (favoris, chargement)
- **Axios** pour les appels API centralisés dans `plugins/api.js`
- Commits réguliers et explicites
- Tests manuels (recherche, persistance, navigation, erreurs)

### Choix techniques
- **API sélectionnée :** GiantBomb
- **Endpoints utilisés :**
    - `/games` → liste principale
    - `/game/{id}` → détails
- **Justification :** base de données riche, gratuite et adaptée à un usage pédagogique
- **Limites :** nécessite un proxy ou clé API (quotas d’environ 200 requêtes/jour)

### Architecture
- `App.vue` : structure principale et layout
- `views/` : pages (`index.vue`, `Details.vue`, `Wishlist.vue`)
- `components/` : cartes, filtres, footer, etc.
- `stores/` : gestion d’état global (wishlist, chargement, erreurs)
- `plugins/api.js` : configuration Axios + clé GiantBomb

**Data-flow résumé :**  
Utilisateur → action (clic, recherche) → store Pinia → requête API → rendu des données → persistance locale.

---

## 4. 🧪 Tests et validation

### Tests techniques
- ✅ Appels API GiantBomb fonctionnels
- ✅ Persistance locale testée après refresh
- ✅ Navigation fluide entre liste/détail/wishlist
- ✅ Gestion des erreurs API

### Tests d’UX
- Navigation intuitive
- Recherche fluide et réactive
- Feedback utilisateur (loading spinner, erreurs, vide)
- Wishlist simple à utiliser

### Tests d’accessibilité
- Contraste correct via Vuetify
- Navigation clavier possible
- Focus visible sur les éléments interactifs
- Champs de saisie avec labels

### Tests d’erreurs & fallback
- API injoignable → message d’erreur clair
- Liste vide → “Aucun jeu trouvé”
- Recherche invalide → affichage par défaut
- Données corrompues → message explicite

---

## 5. 🤖 Usage d’intelligence artificielle

### IA utilisée
- **Nom :** ChatGPT
- **Version :** GPT-5
- **Contexte :** aide ponctuelle pour la documentation et le débogage

### Utilisation détaillée
| Domaine | Usage estimé |
|----------|--------------|
| Structuration du projet | 40 %         |
| Génération de snippets Vue/Vuetify | 50 %         |
| Aide sur Axios & Pinia | 40 %         |
| Rédaction de la documentation | 60 %         |

### Compréhension et adaptation
Le code généré a été adapté manuellement pour correspondre à l’API GiantBomb et aux besoins du projet,
la génération était donc plus pour gagner du temps.

### Parties codées manuellement
- Composants principaux : 80 %
- Store & persistance : 70 %
- Routing & navigation : 70 %
- Tests & validation : 90 %

### Apprentissage personnel
- Utiliser une API complexe avec Axios et Vue
- Gérer un store global et la persistance locale
- Maîtriser Vuetify pour un rendu professionnel
- Adapter une API tierce à une architecture Vue 3

---

## 6. 🎯 Bilan personnel

### Ce que j’ai appris
- Gestion des appels API externes (GiantBomb)
- Architecture d’une SPA avec Vue + Pinia
- Design UI cohérent avec Vuetify
- Meilleure compréhension du data-flow Vue

### Difficultés rencontrées
- Authentification et gestion de la clé API
- Récupération et formatage des données JSON GiantBomb
- Filtres et recherche multi-critères
- Manipulation des composants Vuetify dynamiques

### Réussites et fiertés
- Application complète et fluide
- Interface élégante et responsive
- Wishlist fonctionnelle et persistante
- Bonne intégration entre API, UI et store

### Améliorations possibles
- Tri par note ou date
- Infinite scroll / pagination
- Affichage des plateformes et genres sous forme de tags
- Mode sombre / clair basculable

---

## 7. 📚 Références & Sources
- [GiantBomb API Docs](https://www.giantbomb.com/api/documentation)
- [Vue 3 Docs](https://vuejs.org/)
- [Vuetify 3 Docs](https://vuetifyjs.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- Tutoriels : Vue Mastery, Net Ninja, OpenClassrooms
- Usage IA : ChatGPT
