/*************************************************************
 * 1. SELETTORI DOM & VARIABILI GLOBALI
 *************************************************************/
const levelEL = document.querySelector("#show-level");
const inputEl = document.querySelector("#input-number");
const buttonEl = document.querySelector("button");

// Configurazione iniziale del gioco
let livello = 5;
const nuovoTitolo = `Ticket di mercoledì 28/10/26 - "Simon ver 0.0.3"`;
const nuovoLivello = `Livello difficoltà: ${livello}`;

// Generazione dei dati del livello
let numeriGenerati = getRandomIntegers(livello, 1, 99);
let numeriDaTrovare = new Set(numeriGenerati);


/*************************************************************
 * 2. FUNZIONI DI UTILITY E LOGICA
 *************************************************************/

// Restituisce un numero randomico generato in un range di parametri
// - parametri: minimo, massimo
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genera l'array con i numeri random, dati i parametri 
// - parametri: dimensione array, numero minimo, numero massimo
function getRandomIntegers(quanteVolte, min, max) {
    if (quanteVolte > (max - min + 1)) {
        throw new Error(`Impossibile generare numeri unici: il range è più piccolo della dimensione richiesta.`);
    }
    const numeri = new Set();

    // Il ciclo continua finché il Set non ha raggiunto la dimensione desiderata
    while (numeri.size < quanteVolte) {
        numeri.add(getRandomInteger(min, max));
    }

    console.log("Set generato:", numeri);
    return numeri;
}

// Crea dinamicamente la griglia
function renderGrid() {
    //reset della grid
    document.querySelector(".grid").innerHTML = ""
    for (const numero of numeriGenerati) {
        document.querySelector(".grid").innerHTML += `<div class="cell" id="cell-${numero}"> ${numero}</div> `;
    }
    console.log(`grid creata id livello: ${numeriGenerati.size}`)
}

// aggiorniamo la situazione dei numeri trovati
function numberFound(numero, setNumeri) {
    if (setNumeri.has(numero)) {
        highlightCell(numero);
        removeFromCurrentSet(numero);
        return true;
    } else {
        console.log(`Il numero ${numero} non è presente nel ticket.`);
        return false;
    }
}

// Evidenzia la cella trovata
function highlightCell(number) {
    const activeCell = document.querySelector(`#cell-${number}`);
    if (activeCell) {
        console.log(`seleziono la cella:`, activeCell);
        activeCell.classList.add("active");
    }
}

// Gestisce la rimozione del numero dal set e i controlli di fine livello
function removeFromCurrentSet(numero) {
    numeriDaTrovare.delete(numero);
    const numeriRimasti = numeriDaTrovare.size;
    console.log(`numeri rimanenti da trovare= ${numeriRimasti}`);
    //abbiamo vinto! passiamo ad un nuovo livello
    if (numeriRimasti == 0) {
        console.log("livello completato! passiamo al prossimo");
        newLevel()
    }
}

function newLevel() {
    livello += 1;
    const nuovoLivello = `Livello difficoltà: ${livello}`;
    document.getElementById("show-level").innerHTML = nuovoLivello;
    numeriGenerati = getRandomIntegers(livello, 1, 99);
    numeriDaTrovare = new Set(numeriGenerati);
    renderGrid(numeriGenerati);
}

// Leggiamo l'input dell'utente e controlliamo se è presente nel Set
// - parametri: event (obbligatorio), set da confrontare
function getInput(event, setNumeri) {
    // Recupero cosa l'utente ha scritto nel tag <input>
    const inputText = inputEl.value.trim();
    const numero = parseInt(inputText, 10);

    // Error control basilare
    if (inputText === "" || isNaN(numero)) {
        return;
    } else {
        numberFound(numero, setNumeri);
    }

    // Reset degli input
    inputEl.value = "";
    inputEl.focus();
}


/*************************************************************
 * 3. INIZIALIZZAZIONE E AVVIO DELLA PAGINA
 *************************************************************/

// Impostazione dei titoli nella pagina
document.getElementById("show-level").innerHTML = nuovoLivello;
document.getElementById("titolo").innerHTML = nuovoTitolo;

// generiamo la griglia
renderGrid(numeriGenerati);

buttonEl.addEventListener("click", function (e) {
    // Richiamo una funzione e gli passo il mio Set di numeri
    getInput(e, numeriGenerati);
});

inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getInput(e, numeriGenerati);
    }
});