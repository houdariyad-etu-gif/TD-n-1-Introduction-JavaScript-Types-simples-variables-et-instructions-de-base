
//Améliorer le programme de conversion de durées

function hjms(nmbreSecondes) {
     let nmbreJours = Math.floor(nmbreSecondes / 86400);
    let reste = nmbreSecondes % 86400;

    let nmbreHeure = Math.floor(reste /3600);
    reste = reste%3600;

    let nmbreMin = Math.floor(reste / 60);
    let nmbreSec = reste %60;

    let result = "";

    function format(valeur, singulier, pluriel) {
        if (valeur === 0) return "";
        if (valeur === 1) return valeur + " " + singulier + " ";
        return valeur + " " + pluriel + " ";
    }

    result += format(nmbreJours, "jour", "jours");
    result += format(nmbreHeure, "heure", "heures");
    result += format(nmbreMin, "minute", "minutes");
    result += format(nmbreSec, "seconde", "secondes");

    return result.trim(); 
}

let nmbreSecondes = parseFloat(prompt("Une durée en secondes : "));
alert("Cette durée équivaut à " + hjms(nmbreSecondes));