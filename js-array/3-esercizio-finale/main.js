//inizializzazione
const nuovoTitolo = "Esercizio finale - dispense cicli/array";
document.getElementById("titolo").innerHTML = nuovoTitolo;
/*Crea un array omogeneo con i nomi di cinque linguaggi di programmazione. 
 Visualizzalo con console.table() e stampa il numero di elementi con .length. 
Usa un ciclo for per stampare in console solo i nomi con più di 4 caratteri. 
Poi aggiungi un sesto linguaggio in coda, 
rimuovi il primo elemento con shift, 
controlla con includes se 'Python' è presente e unisci tutti gli elementi in una stringa separata da ' - '. 
Usa il destructuring per estrarre il primo e il secondo elemento e raccogliere il resto in un array separato. 
Infine clona l'array con lo spread e aggiungi un ulteriore linguaggio solo alla copia. */

//Crea un array omogeneo con i nomi di cinque linguaggi di programmazione. 
const langs = ['CPP', 'Ruby', 'Java', 'Pascal', 'TypeScript'];

// Visualizzalo con console.table() e stampa il numero di elementi con .length. 
console.table(langs)
console.log(`Totale elementi ${langs.length}`);

// Usa un ciclo for per stampare in console solo i nomi con più di 4 caratteri. 
for (let i = 0; i < langs.length; i++) {
    if (langs[i].length > 4) {
        console.log(langs[i]);
    }

}

//Poi aggiungi un sesto linguaggio in coda, 
langs.push('Python');

//rimuovi il primo elemento con shift, 
langs.shift();

//controlla con includes se 'Python' è presente e unisci tutti gli elementi in una stringa separata da ' - '.
console.log(langs.includes('Python'));
let langString = langs.join(' - ');
console.log(langString);



//Usa il destructuring per estrarre il primo e il secondo elemento e raccogliere il resto in un array separato. 
const [primo, secondo, ...ultimi] = langs;
console.log(primo);
console.log(secondo);
console.log(ultimi);

//Infine clona l'array con lo spread e aggiungi un ulteriore linguaggio solo alla copia. */
const langsPlus = [...langs];
langsPlus.push('CSharp');
console.log(langs);
console.log(langsPlus);