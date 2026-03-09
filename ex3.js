//Classer 3 nombres
function troisNombres(nmbre1 , nmbre2 , nmbre3) {
    if (nmbre1 > nmbre2 && nmbre1 > nmbre3) {
        alert("1er nombre :" + nmbre1);    
    } else if (nmbre2 > nmbre1 && nmbre2 > nmbre3) {
        alert("2eme nombre :" +nmbre2);
    } else if (nmbre3 > nmbre1 && nmbre3 > nmbre2) {
        alert("3eme nombre :" +nmbre3);
    }
}

let nmbre1 = prompt("Entrez le premier nombre : ");
let nmbre2 = prompt("Entrez le deuxième nombre : ");
let nmbre3 = prompt("Entrez le troisième nombre : ");
troisNombres(nmbre1, nmbre2, nmbre3);
