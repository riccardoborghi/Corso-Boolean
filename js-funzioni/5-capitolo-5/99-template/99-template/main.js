
//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 5";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Dato l'array [4, 9, 12, 3], 
// crea un nuovo array con solo i numeri maggiori o uguali a 5.

const serieNumeri = [4, 9, 12, 3];

const trovaMaggiori = serieNumeri.filter(maggiori => maggiori >= 5);

console.log(trovaMaggiori);

