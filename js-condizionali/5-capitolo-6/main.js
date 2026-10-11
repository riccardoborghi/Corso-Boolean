//Crea una variabile codice con il valore stringa "1234" e 
// confrontala con il numero 1234 prima con == e poi con ===. 
// Stampa un messaggio diverso per ciascun caso.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 6 - confronto debole/forte";
document.getElementById("titolo").innerHTML = nuovoTitolo;

let varNum = 1234;
let varStr = "1234";

if (varNum == varStr) {
    console.log(`confronto passato: ${varNum} ha corrispondenza debole a ${varStr} `);
} else {
    console.log(`confronto non passato: ${varNum} ha corrispondenza debole a ${varStr} `);
}

if (varNum === varStr) {
    console.log(`confronto passato: ${varNum} ha corrispondenza stretta a ${varStr} `);
} else {
    console.log(`confronto non passato: ${varNum} non ha corrispondenza stretta a ${varStr} `);
}
console.log(msg);