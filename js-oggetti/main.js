const nuovoTitolo = "JS OGGETTI";
document.getElementById("loading-title").innerHTML = nuovoTitolo;

/* Esercizio 1
Crea un oggetto con le informazioni di uno studente: nome, età e corso. */

/* const schedaStudente = {
	nome: "Gennaro",
	eta: 20,
	corso: "AI-webdev",
};

console.log(schedaStudente) */

/* Esercizio 2 
Dato un oggetto con i dati di una macchina, mostra a console marca e modello usando la dot notation. */
/* 
const schedaMacchina = {
	modello: "Clio",
	marca: "Renault",
	cilindrata: 999,
}

console.log(schedaMacchina.marca);
console.log(schedaMacchina.modello); */

/* Esercizio 3
Crea un oggetto con una proprietà la cui chiave contiene uno spazio. 
Leggila con la bracket notation. 
Poi chiedi all'utente tramite prompt quale proprietà vuole vedere e mostrala a console. */
/* 
const schedaProdotto = {
	modello: "Alienware-2026",
	"scheda madre": "Asrock BMZ7",
	disponibile: true,
}

//console.log(schedaProdotto["scheda madre"]);
let proprieta = prompt("Quale proprietà cerchi?", "scheda madre");
console.log(schedaProdotto[proprieta]);
 */ 