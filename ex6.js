//Suite de Fibonacci

//Fibo1
function Fibo1(n){
    let u = [];
    u[0] = 0;
    u[1] = 1;
    for(var i = 2 ; i<=n ; i++){
        u[i] = u[i-1] + u[i-2];
    }
    return u[n];
}

n = prompt("Entrer un nombre : ");
alert("Le "+n+"-ème nombre de la suite de Fibonacci est : "+Fibo1(n));

//Fibo2
function Fibo2(limite) { 
    let u0 = 0;
    let u1 = 1;
    let rang = 1;

    while (u1 <= limite) {
        let suivant = u1 + u0;
        u0 = u1;
        u1 = suivant;     
        rang = rang + 1;
    }

    return "Le premier nombre supérieur à " + limite + " est " + u1 + ". C'est le rang " + rang;
}

let n = prompt("Entrer la valeur limite : ");
alert(Fibo2(Number(n)));