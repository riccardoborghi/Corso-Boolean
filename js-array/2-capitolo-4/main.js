//inizializzazione
const nuovoTitolo = "Esercizio array capitolo 4 - Destructuring";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Hai l'array ['Mario Rossi', 42, 'Roma', 'sviluppatore', 'italiano']. 
// Estrai nome, età e città con il destructuring, salta la quarta voce e raccogli il resto in un array separato. 
// Stampa ogni variabile in console.

//creo array
const profilo = ['Mario Rossi', 42, 'Roma', 'sviluppatore', 'italiano'];

//destructuring
let [nome, eta, citta, , ...altro] = profilo;
//stampo ogni variabile in console

console.log(nome);
console.log(eta);
console.log(citta);
console.log(altro);

