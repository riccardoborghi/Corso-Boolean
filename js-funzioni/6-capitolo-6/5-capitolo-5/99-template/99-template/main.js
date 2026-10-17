
//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 5";
document.getElementById("titolo").innerHTML = nuovoTitolo;


//Verifica se nell'array [2, 4, 7] esiste almeno un numero dispari.

const numeri = [2, 4, 7];

const trovaDispari = numeri.some(dispari => dispari % 2);

console.log(trovaDispari);
