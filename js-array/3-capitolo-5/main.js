//inizializzazione
const nuovoTitolo = "Esercizio dispense capitolo Capitolo 5 - Spread operator";
document.getElementById("titolo").innerHTML = nuovoTitolo;

//Hai due array: ['React', 'Vue'] e ['Node', 'Express']. 
// Uniscili in un unico array usando lo spread. 
// Poi crea una copia del primo array e aggiungi 'Angular' solo alla copia. 
// Verifica che l'array originale sia rimasto invariato.

const frontend = ['React', 'Vue'];
const backend = ['Node', 'Express'];

// Uniscili in un unico array usando lo spread. 
const webdev = [...frontend, ...backend];

// Poi crea una copia del primo array e aggiungi 'Angular' solo alla copia. 
const frontendPlus = [...frontend];
frontendPlus.push('Angular');

// Verifica che l'array originale sia rimasto invariato.
console.log(frontend.toString());
console.log(frontendPlus.toString());