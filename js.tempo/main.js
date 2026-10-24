
//inizializzazione
const nuovoTitolo = "Live coding di giovedì 22/10/26";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const numeri = [18, 2, 78, 19, 55];

const ultimoIndice = numeri.length - 1;

let risultati = [];

/*  for (let indice = 0; indice <= ultimoIndice; indice++) {
    const questoNumero = numeri[indice];

    if (isBiggerThan50(questoNumero)) {
        risultati.push(questoNumero)
    } else {

    }

} 
 */

risultati = numeri.filter(function (questoNumero) {
    if (questoNumero > 50) {
        return true;
    } else {
        return false;
    }
})

/* risultati = numeri.filter(questoNumero => questoNumero > 50); */

/* risultati = numeri.filter(questoNumero => {
    if (questoNumero > 50) {
        return true;
    } else {
        return false;
    }
}) */

console.log("numeri trovati:", risultati);

function isBiggerThan50(numeroPassato) {

    console.log(`controllo: ${numeroPassato}`)
    if (numeroPassato > 50) {
        return true;
    }
    else {
        return false;
    }
}
