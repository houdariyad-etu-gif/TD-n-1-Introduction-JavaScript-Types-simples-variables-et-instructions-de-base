#  TD n°1 — Introduction à JavaScript

Une collection d'exercices JavaScript couvrant les constructions de base du langage : types simples, déclarations de variables, instructions de contrôle et itérations.

---

##  Structure du projet

```
├── ex1.js       # Conversion de températures (Fahrenheit → Celsius)
├── ex2.js       # Conversion de durées (secondes → jours/heures/minutes/secondes)
├── ex2bis.js    # Conversion de durées améliorée (gestion du singulier et des valeurs nulles)
├── ex3.js       # Classement de 3 nombres par ordre croissant
├── ex5.js       # Test de nombre premier
├── ex6.js       # Suite de Fibonacci (Fibo1 & Fibo2)
├── ex7.js       # Valeur approchée de la racine carrée (méthode de Newton)
└── ex7.html     # Point d'entrée HTML 
```

---

##  Exercices

### Exercice 1 — Conversion de températures
**Fichier :** `ex1.js`

Convertit une température de **Fahrenheit en Celsius** à l'aide de la formule :

```
tempC = (5/9) × (tempF − 32)
```

**Exemple :**
```
Entrée  : 60°F
Sortie  : cette température équivaut a 15.6 degrés Celsius
```

---

### Exercice 2 — Conversion de durées
**Fichier :** `ex2.js`

Convertit un nombre de **secondes** en son équivalent en **jours, heures, minutes et secondes**.

**Exemple :**
```
Entrée  : 235789 secondes
Sortie  : cette durée équivaut à 2 jours 17 heures 29 minutes 49 secondes
```

---

### Exercice 2-bis — Conversion de durées améliorée
**Fichier :** `ex2bis.js`

Version améliorée de l'exercice 2 :
- Les unités de valeur nulle sont **omises** de l'affichage
- Les unités de valeur `1` sont affichées au **singulier**

**Exemple :**
```
Entrée  : 3621 secondes
Sortie  : Cette durée équivaut à 1 heure 21 secondes
```

---

### Exercice 3 — Classer 3 nombres
**Fichier :** `ex3.js`

Lit 3 nombres et les affiche dans l'**ordre croissant** (du plus petit au plus grand).

**Exemple :**
```
Entrée  : 14, 10, 17
Sortie  : Ordre croissant : 10, 14, 17
```

---

### Exercice 5 — Tester si un nombre est premier
**Fichier :** `ex5.js`

Vérifie si un entier positif donné est **premier** (divisible uniquement par 1 et lui-même).

**Exemples :**
```
Entrée  : 7
Sortie  : Le nombre 7 est premier

Entrée  : 25
Sortie  : 25 n'est pas un nombre premier, il est divisible par 5
```

---

### Exercice 6 — Suite de Fibonacci
**Fichier :** `ex6.js`

Deux fonctions basées sur la relation de récurrence :

```
u₀ = 0,  u₁ = 1,  uₙ₊₁ = uₙ + uₙ₋₁
```

- **`Fibo1(n)`** — Retourne le **nième terme** de la suite de Fibonacci.
- **`Fibo2(limite)`** — Retourne la **valeur et le rang** du premier terme supérieur à une limite donnée.

**Exemples :**
```
Fibo1 : Entrée n=7   → Le 7-ème nombre de la suite de Fibonacci est : 13
Fibo2 : Entrée 100   → Le premier nombre supérieur à 100 est 144. C'est le rang 12
```

---

### Exercice 7 — Valeur approchée de la racine carrée
**Fichier :** `ex7.js` | **Point d'entrée :** `ex7.html`

Calcule une valeur approchée de la racine carrée d'un réel **A ∈ [1, 100]** par la méthode itérative de Newton :

```
u₀ = A/2
uₙ₊₁ = ½ × (uₙ + A/uₙ)
```

L'itération s'arrête lorsque `|uₙ² − A| < 10⁻⁵`.

**Exemple :**
```
Entrée  : 19.23
Sortie  : Valeur approchée de la racine carrée = 4.385202389856321
```
