//inizializzazione
const nuovoTitolo = "Esercizio array capitolo 3 - Metodi degli array";
document.getElementById("titolo").innerHTML = nuovoTitolo;
//Parti dall'array ['rosso', 'verde', 'blu', 'giallo']. 
// Aggiungi 'viola' in coda, 
// rimuovi il primo elemento, 
// controlla se 'blu' è presente, 
// ottieni una copia dei primi due elementi con slice e unisci tutto in una stringa con ' | ' come separatore.

const colori = ['rosso', 'verde', 'blu', 'giallo'];
// Aggiungi 'viola' in coda,
colori.push('viola'); //['rosso', 'verde', 'blu', 'giallo', 'viola']
console.log(colori.toString());

// rimuovi il primo elemento, 
colori.shift();
// controlla se 'blu' è presente, 
if (colori.includes('blu')) {
    console.log("blu trovato!");
};
console.log(colori.toString());
// ottieni una copia dei primi due elementi con slice e unisci tutto in una stringa con ' | ' come separatore.
let coloriNew = colori.slice(1, colori.length);
coloriNew = coloriNew.join('|');
console.log(coloriNew.toString());


