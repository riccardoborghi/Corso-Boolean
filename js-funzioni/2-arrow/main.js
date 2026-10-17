//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 2";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Dato l'array ["latte", "pane", "uova"], 
// stampa ogni prodotto con il testo Articolo presente:.

const listaSpesa = ["latte", "pane", "uova"];

listaSpesa.forEach(articolo => { console.log(`Articolo presente: ${articolo}`) });