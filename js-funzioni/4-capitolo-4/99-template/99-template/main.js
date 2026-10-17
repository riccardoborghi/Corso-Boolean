
//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 4";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Dato l'array ["latte", "pane", "uova"], 
// trova il primo prodotto che contiene la lettera e.

const prodotti = ["latte", "pane", "uova"];

const trovato = prodotti.find(prodotto => prodotto.includes("e"));

console.log(trovato);