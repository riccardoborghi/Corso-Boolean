//Chiedi un nome con prompt(). 
// Se l'utente ha scritto qualcosa, mostra un saluto; 
// altrimenti mostra un messaggio di errore.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 2";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Dato l'array ["latte", "pane", "uova"], 
// stampa ogni prodotto con il testo Articolo presente:.

const listaSpesa = ["latte", "pane", "uova"];

listaSpesa.forEach(articolo => { console.log(`Articolo presente: ${articolo}`) });