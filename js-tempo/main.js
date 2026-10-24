/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");
let progressBarWidth = 0 + "%";
progressBar.style.width = progressBarWidth;

// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");


/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

//Gestisco gli eventi
btnPlay.addEventListener("click", avviaTimer);

btnStop.addEventListener("click", fermaTimer);

btnReset.addEventListener("click", resettaTimer);


let larghezzaCorrente = 0;
let timer = null; // Variabile per memorizzare l'ID del setInterval

// FUNZIONE PER AVVIARE IL TIMER
function avviaTimer() {
	console.log("Premuto Play!");
	// Gestione bottoni
	btnPlay.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = true;
	// Evita la creazione di duplicati se si clicca "Play" più volte di seguito
	if (timer !== null) return;

	timer = setInterval(() => {
		if (larghezzaCorrente >= 100) {
			clearInterval(timer);
			timer = null;
			title.innerText = "Caricamento completato";
			btnPlay.disabled = true;
			btnStop.disabled = true;
			btnReset.disabled = false;
		} else {
			// 10% ogni secondo per raggiungere il 100% in 10 secondi
			larghezzaCorrente += 10;
			progressBar.style.width = larghezzaCorrente + "%";
		}
	}, 1000); // 1 secondo
}

// FUNZIONE PER FERMARE (METTERE IN PAUSA) IL TIMER
function fermaTimer() {
	console.log("Premuto Stop!");
	clearInterval(timer);
	timer = null; // Libera la variabile per permettere la ripartenza con Play
	// Gestione bottoni
	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;
}

// FUNZIONE PER RESETTARE LO STATO
function resettaTimer() {
	console.log("Premuto Reset!");
	fermaTimer();
	// Gestione bottoni
	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = true;
	larghezzaCorrente = 0;
	progressBar.style.width = "0%";
	title.innerText = "Loading...";
}



