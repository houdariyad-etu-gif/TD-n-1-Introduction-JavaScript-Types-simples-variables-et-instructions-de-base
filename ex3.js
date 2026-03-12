//Classer 3 nombres
function troisNombres(n1, n2, n3) {
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);

    let max, medium, min;

    if (n1 >= n2 && n1 >= n3) {
        max = n1;
        if (n2 >= n3) { medium = n2; min = n3; }
        else { medium = n3; min = n2; }
    } else if (n2 >= n1 && n2 >= n3) {
        max = n2;
        if (n1 >= n3) { medium = n1; min = n3; }
        else { medium = n3; min = n1; }
    } else {
        max = n3;
        if (n1 >= n2) { medium = n1; min = n2; }
        else { medium = n2; min = n1; }
    }

    alert("Ordre croissant : " + min + ", " + medium + ", " + max);
}

let n1 = prompt("Entrez le premier nombre : ");
let n2 = prompt("Entrez le deuxième nombre : ");
let n3 = prompt("Entrez le troisième nombre : ");

troisNombres(n1, n2, n3);