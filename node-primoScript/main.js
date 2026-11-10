console.log("Benvenuto in JSCose v. 0.1");

const argomenti = process.argv;

console.log(`argomenti: ${argomenti}`)

const operazione = argomenti[2];
const a = argomenti[3];
const b = argomenti[4];

const risultato = a + b;

console.log(`richiesta operazione: ${operazione} per i numeri ${a} e ${b}`);