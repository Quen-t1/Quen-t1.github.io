let prenom = prompt("Votre prénom ?")
console.log(prenom)
switch (prenom) {
    case prenom :
        alert ("Bienvenue" +" "+ prenom)
        break;
    case " " :
        alert ("Erreur")
        break;
}

let nombre1 = prompt ("Choisissez votre premier nombre")
console.log(nombre1)
switch (nombre1) {
    default :

        break;
}
let nombre2 = prompt("Choisissez votre deuxième nombre")
console.log(nombre2)
switch (nombre2) {
    default :
        break;
}
let Nombre = Number(nombre1) + Number(nombre2);
alert ("le résultat est de " + " " + Nombre);

let compa1 = prompt("Prix de fabrication")
console.log(compa1)
switch (compa1) {
    default:
        break;
}
let compa2 = prompt("Prix de revente")
console.log(compa2)
switch (compa2) {
    default:
        break;
}
let compa = Number(compa1) - Number(compa2);
if (compa <= 0){
    alert ("Votre perte est de" + " " + compa + "€")
}
else {
    alert ("Votre profit est de" + " " + compa + "€")
}

let bg = document.getElementById("carré1")
let bg2 = document.getElementById("carré2")
let bg3 = document.getElementById("carré3")
let bg4 = document.getElementById("carré4")
let bg5 = document.getElementById("carré5")
let bg6= document.getElementById("carré6")
function bgcolor(){
    document.querySelector(".oui").style.backgroundColor = "green"; 
}   
bg.onmouseover= bgcolor
function bgcolor2(){
    document.querySelector(".oui").style.backgroundColor = "blue"; 
}   
function bgcolor3(){
    document.querySelector(".oui").style.backgroundColor = "red"; 
}   
function bgcolor4(){
    document.querySelector(".oui").style.backgroundColor = "yellow"; 
}   
function bgcolor5(){
    document.querySelector(".oui").style.backgroundColor = "orange"; 
}   
function bgcolor6(){
    document.querySelector(".oui").style.backgroundColor= "white"
}
bg2.onmouseover= bgcolor2
bg3.onmouseover= bgcolor3
bg4.onmouseover= bgcolor4
bg5.onmouseover= bgcolor5
bg6.onmouseover= bgcolor6