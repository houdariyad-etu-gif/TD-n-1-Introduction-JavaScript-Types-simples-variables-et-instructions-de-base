//Conversion de durées
function hjms(nmbreSecondes){
    let nmbreJours = Math.floor(nmbreSecondes / 86400);
    let reste = nmbreSecondes % 86400;

    let nmbreHeure = Math.floor(reste /3600);
    reste = reste%3600;

    let nmbreMin = Math.floor(reste / 60);
    let nmbreSec = reste %60;
    prompt("cette durée équivaut à "+nmbreJours+" jours "+nmbreHeure+" heures "+nmbreMin+" minutes "+nmbreSec+" secondes");

}

let nmbreSecondes = parseFloat(prompt("Une durée en secondes : "));
alert(hjms(nmbreSecondes));