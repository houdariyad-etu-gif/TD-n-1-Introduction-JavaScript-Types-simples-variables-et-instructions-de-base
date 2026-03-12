//Valeur approchée de la √ d'un nombre réel positif 

function Raca1(A) {
    let u = A / 2;
    let precision = 0.00001;

    while (Math.abs(u ** 2 - A) >= precision) {
        u = (1 / 2) * (u + A / u);
    }
    return u;
}


let A = prompt("Entrez un nombre A entre 1 et 100 :");
A = Number(A);

let resultat = Raca1(A);
alert("Valeur approchée de la racine carrée = " + resultat);