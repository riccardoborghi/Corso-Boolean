//Data una variabile ora con un valore tra 0 e 23, 
//mostra "Buongiorno" se è prima delle 12, 
// "Buon pomeriggio" se è prima delle 18, "Buonasera" altrimenti.

const nuovoTitolo = "Esercizio dispense capitolo 1";
document.getElementById("titolo").innerHTML = nuovoTitolo;
oraAttuale = prompt("che ora è?");
if (oraAttuale > 0 && oraAttuale < 12) {
    console.log("Buongiorno");
}
else if (oraAttuale >= 12 && oraAttuale < 18) {
    console.log("Buon pomeriggio");
} else {
    console.log("Buonanotte");
}
console.log(msg);