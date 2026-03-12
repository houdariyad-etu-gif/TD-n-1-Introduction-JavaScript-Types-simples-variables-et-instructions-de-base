# 📘 TD n°1 — Introduction à JavaScript

A collection of JavaScript exercises covering basic language constructs: simple types, variable declarations, control statements, and iterations.

---

## 📁 Project Structure

```
├── ex1.js       # Temperature conversion (Fahrenheit → Celsius)
├── ex2.js       # Duration conversion (seconds → days/hours/minutes/seconds)
├── ex2bis.js    # Improved duration conversion (handles singular/zero values)
├── ex3.js       # Sort 3 numbers in ascending order
├── ex5.js       # Prime number checker
├── ex6.js       # Fibonacci sequence (Fibo1 & Fibo2)
├── ex7.js       # Approximate square root (Newton's method)
└── ex7.html     # HTML entry point for Exercise 7
```

---

## 🧪 Exercises

### Exercise 1 — Temperature Conversion
**File:** `ex1.js`

Converts a temperature from **Fahrenheit to Celsius** using the formula:

```
tempC = (5/9) × (tempF − 32)
```

**Example:**
```
Input:  60°F
Output: cette température équivaut a 15.6 degrés Celsius
```

---

### Exercise 2 — Duration Conversion
**File:** `ex2.js`

Converts a number of **seconds** into an equivalent in **days, hours, minutes, and seconds**.

**Example:**
```
Input:  235789 seconds
Output: cette durée équivaut à 2 jours 17 heures 29 minutes 49 secondes
```

---

### Exercise 2-bis — Improved Duration Conversion
**File:** `ex2bis.js`

Enhanced version of Exercise 2:
- Zero-value units are **omitted** from the output
- Units with value `1` are displayed in the **singular** form

**Example:**
```
Input:  3621 seconds
Output: Cette durée équivaut à 1 heure 21 secondes
```

---

### Exercise 3 — Sort 3 Numbers
**File:** `ex3.js`

Reads 3 numbers and displays them in **ascending order** (smallest to largest).

**Example:**
```
Input:  14, 10, 17
Output: Ordre croissant : 10, 14, 17
```

---

### Exercise 5 — Prime Number Checker
**File:** `ex5.js`

Tests whether a given positive integer is **prime** (divisible only by 1 and itself).

**Examples:**
```
Input:  7
Output: Le nombre 7 est premier

Input:  25
Output: 25 n'est pas un nombre premier, il est divisible par 5
```

---

### Exercise 6 — Fibonacci Sequence
**File:** `ex6.js`

Two functions based on the recurrence relation:

```
u₀ = 0,  u₁ = 1,  uₙ₊₁ = uₙ + uₙ₋₁
```

- **`Fibo1(n)`** — Returns the **nth term** of the Fibonacci sequence.
- **`Fibo2(limit)`** — Returns the **first term and its rank** that exceeds a given value.

**Examples:**
```
Fibo1: Input n=7  → Le 7-ème nombre de la suite de Fibonacci est : 13

Fibo2: Input 100  → Le premier nombre supérieur à 100 est 144. C'est le rang 12
```

---

### Exercise 7 — Approximate Square Root
**File:** `ex7.js` | **Entry point:** `ex7.html`

Computes an approximate square root of a real number **A ∈ [1, 100]** using Newton's iterative method:

```
u₀ = A/2
uₙ₊₁ = ½ × (uₙ + A/uₙ)
```

Iteration stops when `|uₙ² − A| < 10⁻⁵`.

**Example:**
```
Input:  19.23
Output: Valeur approchée de la racine carrée = 4.385202389856321
```

---

## 🚀 How to Run

All exercises use browser-native `prompt()` and `alert()` dialogs.

**Option 1 — Directly in browser:**
Open any `.js` file via an HTML page that includes it as a `<script>` tag (like `ex7.html`).

**Option 2 — Browser console:**
Copy and paste any function into your browser's DevTools console and call it directly.

**Option 3 — Node.js (ex7 example):**
```bash
node ex7.js
```
> ⚠️ Note: `prompt()` is not available in Node.js by default. You may need to adapt input handling using `readline` for a Node environment.

---

## 🛠️ Technologies

- **Language:** JavaScript (ES6+)
- **Runtime:** Browser (Chrome, Firefox, etc.)
- **Input/Output:** `prompt()` / `alert()`

---

## 📚 Course Info

| Field        | Details                                      |
|--------------|----------------------------------------------|
| Institution  | ENSET Mohammedia                             |
| Program      | Master SDIA                                  |
| Module       | Technologies du Web & Web Sémantique         |
| TD           | n°1 — Introduction à JavaScript              |
| Topics       | Types, variables, control flow, iterations   |
