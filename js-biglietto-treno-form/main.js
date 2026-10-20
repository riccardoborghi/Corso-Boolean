/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Pagina base, niente CSS:
input per il numero di chilometri
un bottone
Con l'evento click, recuperiamo i chilometri e stampiamo in console l'importo base.
Ricordatevi che i value delle input sono sempre stringa 😉  */

//inizializzazione
/* const nuovoTitolo = "Esercizio calcolo prezzo biglietto";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const salva = document.querySelector('button');

salva.addEventListener("click", () => {
    let numeroKM = document.getElementById('inputKM').value;
    console.log(`Per percorrere ${numeroKM}KM devi pagare ${numeroKM * 0.21} €, con tariffa base`);
}); */


/* MILESTONE 2:
Aggiungiamo:
un div vuoto per il risultato
una select per la fascia d'età
Modifichiamo l'evento per considerare l'età, applicare lo sconto e scrivere il risultato nel div. 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

/* const nuovoTitolo = "Esercizio calcolo prezzo biglietto";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const salva = document.querySelector('button');


salva.addEventListener("click", () => {
    //leggo i valori
    const numeroKM = document.getElementById('inputKM').value;
    const fasciaEta = document.getElementById("fasceEta").value;
    //faccio i calcoli
    let prezzoBase = numeroKM * 0.21;
    let msgBase = `Per percorrere ${numeroKM}KM devi pagare ${prezzoBase} €, con tariffa base`

    if (fasciaEta == 1) {
        msgBase = `Per percorrere ${numeroKM}KM devi pagare ${(prezzoBase * 0.8)} €, con tariffa agevolata`;
    };
    if (fasciaEta == 3) {
        msgBase = `Per percorrere ${numeroKM}KM devi pagare ${(prezzoBase * 0.6)} €, con tariffa agevolata senior`;
    }

    //scrivi risultato nel div
    document.getElementById("calcoloBiglietto").innerHTML = msgBase;
}); */

/* MILESTONE 3:
Stampate il prezzo arrotondando a 2 decimali dopo la virgola
Se volete, racchiudete le input, select e button in un <form> e gestitene l'evento submit, invece del click sul bottone.
Aggiungete un input per il nome del viaggiatore
Stampate un risultato che riporti nome, prezzo base, tariffa/età applicati, prezzo aggiornato */

const nuovoTitolo = "Esercizio calcolo prezzo biglietto";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const form = document.querySelector('form');

salva.addEventListener("click", (event) => {
    //leggo i valori
    event.preventDefault();
    const numeroKM = document.getElementById('inputKM').value;
    const fasciaEta = document.getElementById("fasceEta").value;
    //faccio i calcoli
    let prezzoBase = numeroKM * 0.21;
    let msgBase = `Per percorrere ${numeroKM}KM devi pagare ${prezzoBase.toFixed(2)} €, con tariffa base`

    if (fasciaEta == 1) {
        msgBase = `Per percorrere ${numeroKM}KM devi pagare ${(prezzoBase * 0.8).toFixed(2)} €, con tariffa agevolata`;
    };
    if (fasciaEta == 3) {
        msgBase = `Per percorrere ${numeroKM}KM devi pagare ${(prezzoBase * 0.6).toFixed(2)} €, con tariffa agevolata senior`;
    }

    //scrivi risultato nel div
    document.getElementById("calcoloBiglietto").innerHTML = msgBase;
}); 