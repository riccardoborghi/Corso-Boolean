# Esercitazione 3 - Schede Giocatori NBA

Progetto realizzato per l'esercitazione di sviluppo web (Corso Boolean), focalizzato sui concetti fondamentali di HTML5 e CSS3.

---

## 🎯 Obiettivi dell'Esercitazione

- **Separazione dei contenuti e dello stile**: Utilizzo esclusivo di un file CSS esterno (`style.css`), senza codice CSS inline.
- **Struttura con i `<div>`**: Organizzazione gerarchica dei blocchi (scheda, header, immagine, corpo testuale, box statistiche).
- **Selettori CSS**: Impiego di selettori di tag (`body`, `h1`, `h2`), selettori di classe (`.player-card`, `.stats-card-box`), selettori composti e combinazioni.
- **Box Model**: Gestione corretta di `margin`, `padding`, `border` e `box-sizing: border-box`.
- **Barre Statistiche (Stile Grafico)**: Realizzazione di indicatori grafici a barre con contenitori percentuali e classi personalizzate.

---

## 📂 Struttura del Progetto

```text
Esercitazione 3/
├── index.html       # Struttura semantica della pagina e contenuti dei giocatori
├── style.css        # Foglio di stile CSS esterno (layout, colori, box model, grafici)
├── README.md        # Documentazione del progetto
└── IMG/             # Cartella dedicata per eventuali immagini locali
```

---

## 🏀 Componenti delle Schede Giocatore

Ogni card giocatore è strutturata in 4 sezioni principali:

1. **Header della Carta (`.card-header`)**:
   - Nome del giocatore (`.player-name`)
   - Squadra e numero di maglia (`.player-team`)
2. **Contenitore Immagine (`.image-wrapper`)**:
   - Foto del profilo con adattamento `object-fit: cover` (`.player-photo`)
3. **Descrizione & Ruolo (`.player-info`)**:
   - Badge del ruolo (`.role-badge`)
   - Testo descrittivo fluido che si adatta alle dimensioni della scheda (`.player-bio`)
4. [OPZIONALE] **Riquadro Statistiche con Grafico (`.stats-card-box`)**:
   - Etichetta metrica (Punti, Rimbalzi, Assist)
   - Barra di tracciamento grigia (`.stat-bar-bg`)
   - Barra di riempimento colorata in percentuale (`.stat-fill`)
   - Valore numerico medio (`.stat-val`)

---

## 🚀 Come Visualizzare il Progetto

1. Apri la cartella `Esercitazione 3` nel tuo editor.
2. Apri il file [index.html](file:///f:/Corso%20Boolean/Esercitazione%203/index.html) con l'estensione **Live Server** di VS Code o facendo doppio clic sul file per aprirlo in qualsiasi browser.
