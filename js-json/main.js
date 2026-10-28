
// Il titolo di questa sezione (Loading...)
const nuovoTitolo = "esericizio JSON";
document.getElementById("loading-title").innerHTML = nuovoTitolo;


/* Esercizio
Salva nel localStorage due preferenze: il volume dell'audio impostato a 80 e le notifiche impostate su attive. */
/* localStorage.setItem("volume", 80);
localStorage.setItem("notifiche", "attive"); */

/* Esercizio
Salva nel localStorage il tema preferito come chiaro, poi recuperalo in una variabile chiamata temaAttivo e stampala in console. */
/* localStorage.setItem("tema", "chiaro");
let temaAttivo = localStorage.getItem("tema");
console.log(`il tema attivo è: ${temaAttivo}`); */

/* Esercizio
Salva nel localStorage tre chiavi: lingua, volume e notifiche. Poi elimina solo la chiave volume. */
/* localStorage.setItem("lingua", "it");
localStorage.setItem("volume", 90);
localStorage.setItem("notifiche", "attive");
localStorage.removeItem("volume") */

/* Esercizio
Salva nel localStorage la preferenza di colore e il nome utente, poi simula un reset completo dell'applicazione svuotando tutta la memoria. */
/* localStorage.setItem("favCol","magenta");
localStorage.setItem("userName","Riccardo");
localStorage.clear(); */

/* Esercizio
Crea un oggetto prodotto con le proprietà nome e prezzo, trasformalo in una stringa JSON e stampala in console. */

/* const prodotto = {
	nome: "joystick",
	prezzo: "20"
}

const prodottoJSON = JSON.stringify(prodotto);
console.log(prodotto) */

/* Esercizio
Data la stringa '{"nome":"Tastiera","prezzo":49}', riconvertila in un oggetto e stampa in console il valore della proprietà prezzo. */

/* const prodottoJSON = `{"nome": "Tastiera","prezzo": 49}`
const prodotto = JSON.parse(prodottoJSON)
console.log(prodotto.prezzo) */

/* Esercizio
Salva nel localStorage un oggetto che rappresenta 
un prodotto nel carrello (nome e quantità) e 
un array con tre categorie della tienda.
 Poi recuperali entrambi e stampali in console. */

/* const prodotto = {
	nome: "Asrock B950m",
	quantita: 5
};

const categorie = ["MoBo", "SSD", "GPU"];

localStorage.setItem("prodotto", JSON.stringify(prodotto));
localStorage.setItem("categorie", JSON.stringify(categorie));

const prodottiSalvati = JSON.parse(localStorage.getItem("prodotto"))
const categorieSalvate = JSON.parse(localStorage.getItem("categorie"))

console.log(categorieSalvate);
console.log(prodottiSalvati);

 */
/* 
Esercizio finale
Simula il salvataggio delle preferenze di un utente e del suo carrello. 
Salva una preferenza semplice (lingua), un oggetto con i dati di un prodotto nel carrello e un array con le categorie visitate. 
Poi recupera tutti i dati, riconvertili nei tipi originali e infine elimina solo la chiave della lingua. */

