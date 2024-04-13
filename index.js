// Fonctions de manipulation de chaînes :

// Inverser une chaîne
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Compter les caractères
function countCharacters(str) {
    return str.length;
}

// Mettre les mots en majuscule
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Fonctions du tableau :

// Rechercher le maximum et le minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// Somme du tableau
function arraySum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filtrer le tableau
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Fonctions mathématiques :

// Factorielle
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Vérification des nombres premiers
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Séquence de Fibonacci
function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

