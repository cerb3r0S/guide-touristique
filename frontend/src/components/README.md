# Structure des Composants Frontend

Ce projet utilise une architecture de composants modulaire et réutilisable pour faciliter le développement en équipe.

## 📁 Structure des Dossiers

```
src/components/
├── ui/              # Composants UI réutilisables
├── common/          # Composants communs partagés
├── layouts/         # Layouts de page
└── pages/           # Composants de page spécifiques
```

## 🎨 Composants UI (`ui/`)

Composants réutilisables et stylés qui peuvent être utilisés partout dans l'application.

### Button.jsx
- Variants: `primary`, `secondary`, `outline`, `ghost`
- Sizes: `small`, `medium`, `large`
- Animations Framer Motion intégrées
- Palette de couleurs personnalisée

### Card.jsx
- Container réutilisable avec effets hover
- Animations fluides
- Personnalisable via props

### SearchBar.jsx
- Barre de recherche avec formulaire
- Intégration avec le composant Button
- Gestion d'état locale

## 🧩 Composants Communs (`common/`)

Composants partagés entre plusieurs pages.

### Navbar.jsx
- Navigation responsive
- Menu mobile
- Liens de navigation: Accueil, Hotels, Restaurants, Destinations
- Boutons Login/Sign up
- Design moderne avec backdrop blur

### Footer.jsx
- Informations de contact
- Liens de navigation
- Design en colonnes responsive
- Animations au scroll

## 🏗️ Layouts (`layouts/`)

### MainLayout.jsx
- Structure principale des pages
- Inclut Navbar et Footer
- Conteneur pour le contenu des pages

## 📄 Pages (`pages/`)

Composants spécifiques à chaque section de la page d'accueil.

### Hero.jsx
- Section hero avec 3D
- SearchBar intégrée
- Animations complexes

### CategoryGrid.jsx
- Grille des catégories
- Icônes SVG personnalisées
- Effets hover et animations

### FeaturedPlaces.jsx
- Cartes des lieux en vedette
- Système de notation
- Animations au scroll

### CallToAction.jsx
- Section CTA
- Bouton d'action principal
- Design avec fond sombre

## 🎯 Utilisation

### Importer un composant
```jsx
import Button from '../ui/Button';
import Navbar from '../common/Navbar';
import Hero from '../pages/Hero';
```

### Utiliser le layout principal
```jsx
import MainLayout from '../layouts/MainLayout';

const MyPage = () => {
  return (
    <MainLayout>
      <MyContent />
    </MainLayout>
  );
};
```

### Utiliser les composants UI
```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>

<Card hover={true} onClick={handleCardClick}>
  <CardContent />
</Card>
```

## 🚨 Notes pour l'Équipe

1. **Navigation**: Les fonctions de navigation sont des placeholders (`console.log`)
2. **Router**: Intégrer React Router pour la navigation réelle
3. **State**: Ajouter Redux/Context pour la gestion d'état globale
4. **API**: Connecter les composants aux endpoints backend
5. **Tests**: Ajouter des tests unitaires pour chaque composant

## 🔄 Workflow de Développement

1. Créer de nouveaux composants UI dans `ui/` si réutilisables
2. Utiliser les composants existants avant d'en créer de nouveaux
3. Suivre les conventions de nommage (PascalCase)
4. Documenter les props avec JSDoc
5. Maintenir la cohérence avec la palette de couleurs

## 🎨 Palette de Couleurs

- `#F2F2F2` - gris très clair
- `#2E3140` - bleu foncé / gris sombre  
- `#0486D8` - bleu vif
- `#049CD8` - bleu turquoise
- `#0378A6` - bleu océan profond
