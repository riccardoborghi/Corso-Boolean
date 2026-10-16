//Scrivi la stessa funzione in due modi: prima in forma classica e poi come arrow function. 
// La funzione deve ricevere il prezzo di un prodotto e restituire il prezzo finale con il 22% di IVA.

//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo 1 - arrow function";
document.getElementById("titolo").innerHTML = nuovoTitolo;

function applicaIVA(imponibile) {
    return imponibile * 1.22;
}

const imponibileArrow = prezzo => prezzo * 1.22

console.log(imponibileArrow(100);
console.log(applicaIVA(100));