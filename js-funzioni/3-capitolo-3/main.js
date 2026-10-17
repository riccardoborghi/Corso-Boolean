
//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 3 - error control";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Dato l'array dei prezzi [15, 25, 35], 
// crea un nuovo array con il prezzo scontato del 10%.

const listino = [15, 25, 35];

const prezzoScontato = listino.map(prezzo => prezzo - (prezzo * 0.9));

console.log(`Prezzo scontato ${prezzoScontato}`);