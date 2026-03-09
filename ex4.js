//Affichage de motifs - escaliers
function triangle1(taille) {
     let result = "";

    for (let i=0; i< taille; i++) {
        for (let j=0; j< taille; j++) {
            if (j<= i ){
                result += "*";
            }else{
                result += " ";
            }
        }
        result += "\n"; 
    }
    document.body.innerText = result;
}

let taille = prompt("Saisir la taille du motif triangulaire");
console.log("Un motif de taille = " + taille);
triangle1(Number(taille));



