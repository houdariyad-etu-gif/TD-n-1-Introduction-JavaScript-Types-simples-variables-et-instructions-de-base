//Conversion de températures
function degreC(tempF){
    let tempC=(5/9)*(tempF-32);
    return "cette température équivaut a "+ tempC.toFixed(1) +" degrés Celsius"
}

let tempF = parseFloat(prompt("Une température en Fahrenheit :"));
alert(degreC(tempF));