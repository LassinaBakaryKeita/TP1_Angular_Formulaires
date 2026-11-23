# InscriptionApp

Application front-end réalisée dans le cadre du **TP N°1 d'Angular (Formulaires)** à l'**ENSA de Fès** (encadré par le Prof. **Youness IDRISSI KHAMLICHI**). Ce projet, généré avec **Angular CLI version 22.2.4** et utilisant **Angular Material** (`@angular/material`), correspond à l'implémentation de l'**Exercice 2** dédié exclusivement à l'approche **Reactive Forms**.

---

## État actuel du projet (Exercice 2)

Le projet reproduit le formulaire d'inscription de l'exercice précédent en s'appuyant uniquement sur les formulaires réactifs d'Angular (**Reactive Forms**), où la structure et les règles de validation sont pilotées directement côté TypeScript.

### Champs et règles de validation

* **Nom complet (`fullname`)** : champ obligatoire exigeant un minimum de 3 caractères.


* **Âge (`age`)** : champ obligatoire imposant un âge minimum de 18 ans.


* **Pays (`country`)** : liste déroulante obligatoire proposant au moins 4 choix (France, Belgique, Suisse, Canada).


* **Email (`email`)** : champ obligatoire vérifiant la validité du format d'adresse électronique.



### Comportement et interface utilisateur

* **Affichage conditionnel des erreurs (`touched`)** : les messages d'erreur de validation s'affichent sous chaque champ uniquement lorsque celui-ci a été touché (`touched`) par l'utilisateur et qu'il est invalide.


* **Sécurisation de la soumission** : le bouton **« S'inscrire »** demeure désactivé tant que l'état global du formulaire est invalide.


* **Récapitulatif après validation** : une fois le formulaire valide et soumis, un récapitulatif des données saisies (`fullname`, `age`, `country`, `email`) s'affiche à l'utilisateur.



---

## Stack technique

* **Framework** : Angular (CLI `22.2.4`) — architecture **Reactive Forms**


* **Composants UI** : Angular Material (`ng add @angular/material`)



---

## Commandes de développement

### Serveur de développement

Pour lancer le serveur local, exécutez :

```bash
ng serve

```

Ouvrez ensuite votre navigateur à l'adresse `http://localhost:4200/`. L'application se rechargera automatiquement à chaque modification des fichiers sources.

### Génération de code

Pour générer un nouveau composant via Angular CLI :

```bash
ng generate component nom-du-composant

```

Pour consulter la liste complète des schémas disponibles (`components`, `directives`, `pipes`, etc.) :

```bash
ng generate --help

```

### Compilation (Build)

Pour compiler le projet :

```bash
ng build

```

Les fichiers compilés et optimisés pour la production sont générés dans le répertoire `dist/`.

## Demo 
![alt text](public/result.png)

## Ressources complémentaires

* [Documentation officielle Angular CLI](https://angular.dev/tools/cli)
* [Documentation Angular Material](https://material.angular.dev/)