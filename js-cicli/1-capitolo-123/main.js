//Chiedi all'utente di inserire i suoi voti uno alla volta. 
// Continua a chiedere finché non inserisce 0.
//  Quando inserisce 0, stampa la media di tutti i voti inseriti.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 7 - error control";
document.getElementById("titolo").innerHTML = nuovoTitolo;

let contatore = 0;
let somma = 0;
let voto = 0;

do {
    voto = Number(prompt("Inserisci un voto (0 per concludere)"));
    somma = somma + voto;
    contatore = contatore + 1;
} while (voto !== 0);

if (contatore > somma) {
    media = 0;
} else {
    media = somma / contatore;
}
console.log(`Voto medio ${media} su ${contatore} voti contati.`);