//Dichiara fuori dal ciclo una variabile soglia con il valore 18. 
//Chiedi all'utente di inserire 4 voti con prompt. 
//Per ogni voto, stampa se è sufficiente o insufficiente confrontandolo con la soglia.
// Dopo il ciclo, stampa il valore di soglia e verifica che la variabile voto non sia accessibile fuori dal blocco.

//inizializzazione
const nuovoTitolo = "Esercizio dispense cicli capitolo 4 - voto soglia";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const soglia = 18;

for (let i = 1; i <= 4; i++) {
    let voto = Number(prompt(`Step ${i} di 4: Inserisci un voto compreso tra 0-30 `));
    if (voto >= soglia) {
        console.log("Complimenti, sei promosso!");
    } else {
        console.log("BOCCIATO!")
    }
}

console.log(`Soglia sufficienza: ${soglia}.`);
console.log(`Ultimo voto inserito: ${voto}`);