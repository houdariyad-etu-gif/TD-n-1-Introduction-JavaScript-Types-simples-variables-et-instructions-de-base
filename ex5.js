//Tester si un nombre est premier
function Premier(n){
    n = Number(n);
    if(n <= 1){
        return "Le nombre " + n + " n'est pas premier";
    }

    for(var i=2; i<n; i++){
        if(n%i == 0){
            return n + " n'est pas un nombre premier, il est divisible par " + i ;
        }
    }
    return "Le nombre "+n+" est premier";
}

let n = prompt("Un entier positif : ");
alert(Premier(n));