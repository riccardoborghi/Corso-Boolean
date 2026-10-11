//Esercizio cap 5
//Crea due variabili: biglietto (boolean) e eta (numero). 
// Mostra "Benvenuto" solo se l'utente ha il biglietto ed è maggiorenne.

//inizializza pagina
const nuovoTitolo = "Esercizio dispense capitolo 5 - Discoteca";
document.getElementById("titolo").innerHTML = nuovoTitolo;

let eta = 33
let biglietto = true

if (biglietto) {
    if (eta >= 18) {
        console.log(`Benvenuto`)
    } else {
        console.log(`Sei minorenne!!!`)
    }
} else {
    console.log(`Non hai il biglietto!`)
}
