//Il computer sceglie un numero segreto: 7. 
//Chiedi all'utente di indovinarlo con prompt.
//Ogni volta che sbaglia, stampa se il numero inserito è troppo alto o troppo basso. 
// Continua finché l'utente non indovina. 
// Quando indovina, stampa in quanti tentativi ci è riuscito.
const nuovoTitolo = `Esercizio finale dispense cicli - indovina il numero <br>  <br> SCEGLI UN NUMERO COMPRESO TRA 1 E 10. <br> INDOVINALO NEL MINOR NUMERO DI TENTATIVI`;
document.getElementById("titolo").innerHTML = nuovoTitolo;

// genero numero random tra 1-10
const numeroSegreto = Math.floor((Math.random() * 10) + 1);
// dichiarazione variabili in scope globale
let tentativi = 0;
let indovinato = false;

while (!indovinato) {
    tentativi++;
    guess = Number(prompt(`Indovina il numero segreto (tentativo ${tentativi})`));

    if (guess < numeroSegreto) {
        console.log("Troppo basso");
    } else if (guess > numeroSegreto) {
        console.log("Troppo alto");
    } else if (isNaN(guess)) {
        console.log("Non è un numero!");
    }
    if (guess === numeroSegreto) {
        indovinato = true;
    }
}

console.log(`Complimenti hai indovinato il numero segreto ${numeroSegreto} con ${tentativi} tentativi`);
alert(`Complimenti hai indovinato il numero segreto ${numeroSegreto} con ${tentativi} tentativi`);