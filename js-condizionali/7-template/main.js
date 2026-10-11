//Chiedi un nome con prompt(). 
// Se l'utente ha scritto qualcosa, mostra un saluto; 
// altrimenti mostra un messaggio di errore.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 7 - error control";
document.getElementById("titolo").innerHTML = nuovoTitolo;

debugger; // Lo script si blocca qui appena apri la console sviluppatori

let x = 2;
console.log("Inizio ciclo con calcolo non lineare...");

// Vogliamo raddoppiare x a ogni giro, ma abbiamo sbagliato la formula di aggiornamento
for (let i = 1; i < 50; i = i + x) {

    // Formula interna che modifica la variabile di controllo 'x'
    x = x * (i % 2 === 0 ? 0.5 : 1.5);

    console.log(`Giro del ciclo. i = ${i}, x = ${x}`);
}
console.log("fine cicli");

