//Chiedi un nome con prompt(). 
// Se l'utente ha scritto qualcosa, mostra un saluto; 
// altrimenti mostra un messaggio di errore.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 7 - error control";
document.getElementById("titolo").innerHTML = nuovoTitolo;

let nome = prompt("Inserisci il tuo nome:")
//inserire una variabile in condizioni senza specificare quali si verificano
//viene direttamente considerata la validità della variabile
if (nome) {
    console.log(`Ciao ${nome}! Hai inserito correttamnte il tuo nome :)`)
} else {
    //cerchiamo di restituire il valore per debug(?)
    console.log(`Input non valido abbiamo :${nome}`)
}
console.log(msg);