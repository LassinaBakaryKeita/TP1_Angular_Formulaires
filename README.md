# TP N°1 : Angular — Les Formulaires

Dépôt contenant les deux exercices qui implémentent un formulaire d'inscription avec **Angular Material** (`@angular/material`) selon les deux paradigmes de gestion de formulaires proposés par Angular.

---

## Structure du dépôt

```text
TP1/
├── exercice-1/   # Formulaire d'inscription — Approche Template-Driven Forms
├── exercice-2/   # Formulaire d'inscription — Approche Reactive Forms
└── README.md     # Présentation du TP et réponse à la question de réflexion

```

---

## Question de réflexion

> *« Quelles sont, selon vous, les principales différences entre les deux approches ? Dans quels cas préféreriez-vous l’une ou l’autre ? »*
> 
> 

### 1. Principales différences entre les deux approches

Bien que les deux approches aboutissent au même résultat fonctionnel (comme illustré dans les exercices 1 et 2), elles reposent sur des architectures opposées :

| Critère | Template-Driven Forms (Exercice 1) | Reactive Forms (Exercice 2) |
| :--- | :--- | :--- |
| **Source de vérité** | Le **template HTML** : Angular génère implicitement les contrôles via la directive `ngModel`. | Le **composant TypeScript** : le développeur instancie explicitement `FormGroup` et `FormControl`. |
| **Flux de données** | **Asynchrone** : la mise à jour du modèle passe par le cycle de détection de changements du DOM. | **Synchrone et prévisible** : accès immédiat à l'état et aux valeurs du formulaire côté code. |
| **Règles de validation** | Déclaratives via des **attributs HTML** (`required`, `minlength`, `email`). | Programmatiques via des **fonctions validateurs** (`Validators.required`, etc.) composables en TypeScript. |
| **Évolutivité** | Limitée dès que le formulaire comporte des champs conditionnels ou répétitifs. | Très élevée grâce aux structures dynamiques (`FormArray`) et aux flux réactifs RxJS (`valueChanges`). |
| **Testabilité** | Nécessite le rendu complet du composant et du DOM pour tester la logique de validation. | **Tests unitaires purs** en TypeScript, rapides et indépendants de l'interface graphique. |

---

### 2. Dans quels cas préférer l'une ou l'autre ?

* **Privilégier les *Template-Driven Forms* pour la simplicité et la rapidité :**
Cette approche est idéale pour les formulaires courts, statiques et sans logique métier complexe (formulaire de connexion, newsletter, prise de contact ou inscription simple). Elle réduit la quantité de code TypeScript à écrire et permet un prototypage rapide directement dans la vue.


* **Privilégier les *Reactive Forms* pour la maîtrise et la scalabilité :**
Cette approche s'impose sur des applications d'envergure ou des formulaires complexes : ajout/suppression dynamique de champs, validations croisées entre plusieurs champs (ex. confirmation de mot de passe), validations asynchrones auprès d'une API (ex. vérifier si un email est déjà utilisé), ou encore lorsqu'une couverture de tests unitaires rigoureuse est exigée.