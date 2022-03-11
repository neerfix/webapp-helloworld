
<img src="./src/assets/images/logo.svg" width="250" height="250">

# Hello World

Le carnet de voyage en ligne
## Stack

**Client:** React JS, Tailwind CSS

**Server:** PHP avec le framework Symfony


## Dream Team

- [@Louise BAULAN](https://github.com/Fayaah)
- [@Matisse LIVAIN](https://github.com/MLivain)
- [@Nicolas NOTARARIGO](https://github.com/Neerfix)
- [@Emeline PAL](https://github.com/emelinepal)
- [@Aimée RITLENG](https://github.com/Aimee-RTLNG)
- [@Gregg SANCHEZ](https://github.com/Arty3P)
- [@Romain FRECHET](https://github.com/Hikari-rom)


## Aperçu de l'application

|                     Page d'accueil                     |                    Map intéractive                    |
|:------------------------------------------------------:|:-----------------------------------------------------:|
| ![App Screenshot](./src/assets/images/readme/home.png) | ![App Screenshot](./src/assets/images/readme/map.png) |

## Cloner le projet en local

Utiliser le lien Github

```bash
  git clone https://github.com/helloworld-ynovlyon/webapp.git
```

Aller dans le dossier du projet

```bash
  cd webapp
```

Installer les dépendances

```bash
  npm install
```

Copier le fichier d'environnement et compléter les différentes variables

```bash
  cp .env.example .env
```

Lancer le serveur

```bash
  npm start
```


## Suivi des Sprints

### [Sprint 1](https://github.com/helloworld-ynovlyon/webapp/milestone/1) (14/02/2022 - 18/02/2022)

- Réalisations :
  - Maquettage - Initialisation du projet React JS - Mise en place de l'intégration continue
  - Développement : Page d'accueil, Fil d'actualité, Profil, Carte intéractive, Détails d'un voyage


- Début de sprint - 14/02/2022 :
  - Nombre de tâches pour ce sprint : **17**
  - Poids total du sprint : **45**


- Fin de sprint - 18/02/2022 :
  - Nombre de tâches pour ce sprint : **22**
  - Poids total du sprint : **61**
  - Total des tâches réalisées lors de ce sprint : **20**

## Rétrospective du premier sprint

**Ce qu'il faut commencer à faire :**
- Aimee : la gestion des voyages (création et édition)
- Louise : la liste des compagnons d'aventure
- Gregg : mettre en place la communication entre la webapp et l'api

**Ce qu'il faut continuer à faire**
- Aimee : intégration des maquettes, mise en place de la carte intéractive
- Louise : la partie authentification (connexion, inscription et mot de passe oublié)
- Gregg : la gestion des tâches et du sprint, la communication entre les 2 équipes

**Ce qu'il faut arrêter de faire**
- Aimee : RAS
- Louise : RAS
- Gregg : RAS

--- ---

### [Sprint 2](https://github.com/helloworld-ynovlyon/webapp/milestone/2) (07/03/2022 - 11/03/2022)

- Tâches du Sprint 1 en retard :
  - Authentification (**5**)
  - Intégration des maquettes

- Réalisations :
  - Authentification terminée et reliée au front
  - Maquettes terminées
  - Développement : Page des amis, Page des étapes, Page d'upload des images, Page Wishlist, Page 404, Page "Mes voyages", Page visualisation / édition de voyage

- Début de sprint - 07/03/2022 :
  - Nombre de tâches pour ce sprint : **9**
  - Poids total du sprint : **47**

- Fin de sprint - 11/03/2022 :
  - Nombre de tâches pour ce sprint : **13**
  - Poids total du sprint : **63**
  - Total des tâches réalisées lors de ce sprint : **8**

--- ---

## Rétrospective du deuxième sprint

**Ce qu'il faut commencer à faire :**
- Aimee : la gestion des étapes d'un voyage
- Louise : relier la wishlist
- Gregg : corriger les warnings 

**Ce qu'il faut continuer à faire**
- Aimee : relier la gestion des voyages (édition)
- Louise : la partie amis / compagnons
- Gregg : la gestion des tâches et du sprint, la communication entre les 2 équipes

**Ce qu'il faut arrêter de faire**
- Aimee : perdre du temps sur l'esthetique du site
- Louise : RAS
- Gregg : RAS

---- 

Pour se connecter à l'application, vous pouvez utiliser le compte :
Mail : oui@oui.fr
Mot de passe : azerty

## Liste des fonctionnalités reliées avec le back: 
- Connexion
- Inscription (si pas de redirection, vérifier la connexion)
- Map interactive
- Edition du passport 
- Création d'un voyage

Il manque (par ordre d'importance):
- récuparation d'un voyage (erreur back)
- édition d'un voyage (erreur back)
- envoi des images (blocage en cascade sur les fonctionnalités ci-dessus)
- ajout d'étapes
- modification d'étapes
- système d'amis
- système d'abonnement et de feed
- système de wishlist (partie back manquante)