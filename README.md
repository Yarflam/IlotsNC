# Site des îlots de Nouvelle Calédonie

![license](https://img.shields.io/badge/license-CC_BY--NC--SA-green.svg)
![react](https://img.shields.io/badge/react-v16.4.2-blue.svg)
![archive](https://img.shields.io/badge/archive-v1.0.0-blue.svg)

**ATTENTION : Le contenu de ce site n'est pas mise à jour depuis 2012. Nous ne sommes pas responsable de l'utilisation que vous en faites, les risques que vous prenez et les informations que vous partagez. Par ailleurs, le contenu proposé contient des informations obsolètes par rapport à la législation maritime & terrestre en vigueur. Nous vous invitons à vérifier ces informations auprès des autorités compétentes de Nouvelle Calédonie.**

## 1. Présentation

Créé en 2010, le site des îlots de Nouvelle Calédonie était un projet familial. Mon père rédigeait les textes, ma mère retravaillait les photos et dessinait les cartes ; je m'occupais de l'entretien général de la plateforme : mise en page (HTML), programmation d'un compteur de visite et d'un système statistiques (PHP/SQL), mise en ligne des images / photos et PDF.

Ce site était destiné à référencer les îlots de Nouvelle Calédonie en spécifiant les zones d'amarrages, les éventuels couloirs de coraux, l'attrait principal de l'île (le palme & masque par exemple) et la distance à parcourir depuis la mise à l'eau. On donnait également l'adresse d'un camping si la mise à l'eau se trouvait proche de celui-ci. Nous avions un petit bâteau en alu de 4 mètres, ce qui est relativement accessible financièrement pour la plupart des gens et c'est largement suffisant ! *Petit bâteau mais gros la câle.*

A travers ce site, on souhaitait que tout le monde participe, partage ses connaissances. Les intéressées pouvaient nous envoyer par email les informations qu'ils avaient pu récolter sur les îlots. L'aspect collaboratif n'a pas bien marché, on a seulement reçu deux emails - merci à eux. Toutefois, les visites étaient plutôt fréquente avec notamment quelques habitués.

Nous avons finalement fermé le site en 2013. Un an après que nous soyons parti de Nouvelle Calédonie. Les raisons de cette fermeture sont simples : nous n'avions personne pour reprendre le site et laisser un contenu obsolète aurait pu nous attirer des ennuis. J'ai tout de même créé un clone du site, une version hors-ligne, permettant aux gens de le télécharger sur leur ordinateur.

Cette version est une mise au propre de la version hors-ligne. Après 4 ans, aucun site n'a émergé pour présenter ce type de contenu, quel dommage ! C'est finalement cette base de connaissances que je souhaite mettre à l'honneur. Permettre à un(e) Calédonien(ne) de partager ce travail, l'améliorer et le mettre à jour. Si vous avez quelques connaissances en programmation, envies de vous mettre à React ou transférer les informations sur une autre plateforme - libre à vous. Do it !

## 2. Utiliser le site

Vous n'êtes pas développeur web mais vous souhaitez accèder au contenu ?

Pas de problème, téléchargez l'[archive zip](https://github.com/Yarflam/IlotsNC/releases/download/1.0.0/IlotsNC.v1.0.0.zip) et décompressez-là. Ouvrez le répertoire "IlotsNC", double-cliquez simplement sur le fichier index.html pour l'ouvrir dans votre navigateur. Vous pouvez également le glisser-déposer dans Chrome ou Firefox.

## 3. Inspecter les points d'intérêts (43)

Cette liste vous permet de retrouver les îles, îlots et points d'intérêts enregistrés.

- Île Abu
- Île aux Canards *
- Île Isié
- Île Larégnère
- Île Ronde
- Île Verte
- Îlot Amédée
- Îlot Bailly
- Îlot Bayes
- Îlot Bois de Fer
- Îlot Charon
- Îlot Faux Tabac
- Îlot Goldfield
- Îlot Hiengabat *
- Îlot Kinde
- Îlot Konduyo
- Îlot Kouenra
- Îlot Lange
- Îlot M'Ba
- Îlot M'Bo
- Îlot Magone *
- Îlot Maître *
- Îlot Mbé Kouen
- Îlot Néangambo
- Îlot Nileouti
- Îlot Moro
- Îlot Ouanne
- Îlot Pandanus
- Îlot Petit Ténia
- Îlot Porc Epic
- Îlot Rat
- Îlot Signal
- Îlot St Ignace
- Îlot Tangadiou *
- Îlot Ténia
- Îlot Ti
- Îlot Ti-Ac
- Îlot Tiam Bouene
- Îlot Tibarama
- Îlot Mbé
- Quai Ballande
- Récif Bammahane
- Tamoa

Note : l'étoile \* indique que la fiche personnelle est manquante.

## 4. Contribuer et partager

N'hésitez pas à partager autour de vous, même si vous n'êtes pas développeur. Vous pouvez également m'indiquer des erreurs dans l'onglet "issues", tout en haut de la page.

Si vous êtes un peu développeur dans l'âme, n'hésitez pas. Lancez-vous ! De mon côté, je ne souhaite pas maintenir ce dépôt une éternité. Pensez à fork pour que je puisse être alerté d'un ou plusieurs repreneurs. Je n'hésiterai pas à partager votre dépôt et l'adresse de votre site sur cette page.

Pour distribuer ce contenu une fois compilé, vous pouvez utiliser des outils comme [Netlify](https://www.netlify.com). Gratuit et sécurisé, le code est directement partagé sur internet (méthode serverless).

## 5. Développer

L'environnement de développement nécessite l'installation de [Node.js](https://nodejs.org/fr/). Il installera de lui-même son gestionnaire de paquets npm.

### 5.1 - Démarrage

**Etape 1 :** Télécharger l'[archive](https://github.com/Yarflam/IlotsNC/archive/master.zip) du dépôt ou clonez-le avec un [client Git](https://git-scm.com/downloads).

Si vous connaissez Git, je vous serai très reconnaissant de plutôt **fork** le projet et de développer à partir de celui-ci.

**Etape 2 :** Ouvrez une console (cmd/bash) à la racine du projet et lancez la commande d'installation des paquets npm.

> $ npm i

**Etape 3 :** lancez le serveur.

> $ npm start

### 5.2 - Structure des répertoires

- **config** : contient les configurations serveur et webpack de l'application.
- **public**
- **public/cartes** : cartes des îlots et zones géographiques.
- **public/favicons** : différents affichages de l'app selon l'appareil.
- **public/images** : images en vrac et cartes Google Maps.
- **public/photos** : photos des points d'intérêts.
- **scripts** : scripts de lancement du serveur.
- **src**
- **src/assets** : styles sass génériques.
- **src/ilots** : fiches des îlots au format Markdown.
- **src/layouts** : thèmes utilisés pour l'affichage.
- **src/libs** : bibliothèques JS complémentaires.
- **src/modules** : composants React.
- **src/pages** : pages et catégories du site
- **src/regions** : zones géographiques au format Markdown.

### 5.3 - Ajouter un îlot ou une zone géographique

Pour ajouter un nouveau contenu textuel, il faut créer un fichier au format .md (Markdown) dans /src/ilots pour un îlot ou dans /src/regions pour une zone géographique.

Si vous ne connaissez pas le Markdown, veuillez lire la section suivante.

Une fois l'édition terminé, il faut ajouter une entrée dans /src/routes.json :

**Ajouter une île**

```
{
    "title": "Île Nouvelle",
    "route": "/ile-nouvelle",
    "ilot": "IleNouvelle",
    "children": []
}
```

**Ajouter une zone géographique**

```
{
    "title": "Nouvelle Région",
    "route": "/region",
    "region": "Region",
    "children": []
}
```

La liste des routes est automatiquement transformée pour s'afficher dans le menu à gauche. La notion de parent est important.

### 5.4 - Utiliser le Markdown

Le Markdown est un meta-language textuel inventé par Aaron Swartz en 2004 qui permet d'écrire des contenus riches en tout simplicité.

La règle à connaître c'est qu'il faut sauter une ligne avant et après un texte ou un élément pour obtenir le bon formatage (sauf si il s'agit de la première ou de la dernière ligne).

Ajouter un titre :

```
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
#### Titre de niveau 4
##### Titre de niveau 5
```

Ajouter une image :

```
![Mon Image](/images/monimage.jpg)
```

Ajouter un lien :

```
[Mon Lien](https://www.monlien.fr/)
```

Formater le texte :

```
*texte en italic*
**texte en gras**
_souligner_
__barrer__
```

Ajouter une liste d'éléments :

```
- A
- B
- C
```

Ajouter une liste d'éléments numérotés :

```
1. A
2. B
3. C
```

Ajouter un séparateur :

```
---
```

Pour les plus experts d'entre vous, il est possible d'afficher une vidéo Youtube :

```
!(https://www.youtube.com/embed/[hash])
```

Il faudra désactiver la sécurité "movie_enable" dans le script /src/libs/markdown.jsx en le passant à **true**.

### 5.5 - Déployer en mode production

La commande générique :

```
$ npm run build
```

En conservant la configuration actuelle, vous obtiendrez une version standalone (sans serveur).

#### Solution Serveur

Il suffit de changer d'EntryPoint dans la configuration de **Webpack** (/config/paths.js) :

```
- appIndexJs: resolveApp('src/index.local.jsx')
+ appIndexJs: resolveApp('src/index.jsx')
```

Pour que ce soit pleinement utilisable, il faut penser à remplacer l'URL des images commençant par "./" (lien relatif) par "/" (racine du site). Pour tester rapidement, vous pouvez installer webpack-dev-server :

```
$ npm i -g webpack-dev-server
```

Puis lancer la commande suivante dans le répertoire /build (une erreur s'affichera, n'en tenez pas compte) :

```
$ webpack-dev-server .
Project is running at http://localhost:8080/
webpack output is served from /
```

Le répertoire /build peut ensuite être hébergé gratuitement sur [Netlify](https://www.netlify.com).

Si vous souhaitez l'héberger chez vous / sur votre serveur dédié, un serveur Node.js avec Express pointant vers le répertoire build suffira. Niveau sécurité & résilience (si le serveur se prend un DDoS ou une panne), il vaut mieux lancer le serveur à travers pm2 et derrière un web proxy configuré sur Apache ou Nginx. Pour le certificat SSL, vous pouvez utiliser Let's Encrypt (gratuit). Bien sûr, une distribution Linux est recommandée (une Debian par exemple).

#### Solution Applicative NW.js

... il me faut tester plusieurs configurations avant de conclure sur une procédure, les packages y sont en tout cas ...

## 6. Aides et documentations

- [Documentation npm](https://docs.npmjs.com)
- [Site officiel de React](https://reactjs.org)
- [Tutoriel OpenClassRooms](https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js)
- [Let's Encrypt](https://letsencrypt.org)
- [PM2](http://pm2.keymetrics.io)
