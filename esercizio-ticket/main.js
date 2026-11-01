//inizializzazione
const nuovoTitolo = `Ticket di mercoledì 28/10/26 - "Simon"`;
document.getElementById("titolo").innerHTML = nuovoTitolo;

const numeriGenerati = getRandomIntegers(12, 1, 99);
//genera l'array con i numeri random, con i parametri dati 
//parametri: dimensione array, numero minimo dell'elemento assegnato, numero massimo el assegnato
function getRandomIntegers(quanteVolte, min, max) {
    const numeri = [];

    for (let c = 1; c <= quanteVolte; c++) {
        const numeroCasuale = getRandomInteger(min, max);
        numeri.push(numeroCasuale);
    }
    console.log(numeri);
    return numeri;
}

//restituisce un numero
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//crea dinamicamente la griglia
function renderGrid() {
    for (const numero of numeriGenerati) {
        document.querySelector(".grid").innerHTML += `<div class= "cell">${numero}</div>`;
    }
}

renderGrid();