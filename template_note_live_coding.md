# 📄 Scheda di Analisi Live Coding

**Data:** `YYYY-MM-DD`  
**Argomento / Progetto:** `[Inserisci Titolo]`  
**Docente / Relatore:** `[Nome]`

---

## 1. 🏗️ Architettura & Flusso dei Dati (La Mappa)
> *Prima di scrivere codice, comprendere come si muovono le informazioni nell'applicazione.*

* **📥 Input:**
  * *Da dove arrivano i dati dell'utente? (es. form, pulsanti, input di testo)*
  * 
* **⚙️ Elaborazione / API:**
  * *Dove vanno i dati prima della risposta? (es. funzione di validazione $\rightarrow$ chiamata `fetch` / API IA)*
  * 
* **🖥️ Output / DOM:**
  * *Come e dove viene mostrato il risultato a schermo?*
  * 
* **💾 Stato dell'App:**
  * *Quali informazioni devono essere memorizzate temporaneamente? (es. array di messaggi, flag `isLoading = true/false`)*
  * 

---

## 2. ⚡ Punti di Innesco (Eventi & Asincronicità)
> *Dove l'applicazione "prende vita" e risponde all'interazione.*

* **🖱️ Event Listeners principali:**
  * *(es. `submit` del form, `click` su invia)*
  * 
* **⏳ Gestione dell'attesa (`async` / `await`):**
  * *Come viene bloccata/sbloccata l'interfaccia mentre l'API sta elaborando?*
  * 
* **🌐 Struttura della chiamata:**
  * *Endpoint usato, header, payload JSON inviato:*
  * 

---

## 3. 💣 Trappole, Edge Cases & Error Handling
> *I punti critici in cui il codice rischia di rompersi.*

* **🛡️ Gestione errori (`try` / `catch`):**
  * *Cosa succede se l'API risponde con errore 500 o scatta un timeout?*
  * 
* **⚠️ Input non validi:**
  * *Cosa succede se l'utente invia un campo vuoto o caratteri strani?*
  * 
* **🪲 Bug visti a lezione:**
  * *Quale errore ha fatto il docente durante il live (e come l'ha risolto)?*
  * 

---

## 4. 🧠 Scelte del Docente vs Alternative (Il "Perché")
> *Le decisioni logiche che distinguono una soluzione naive da una professionale.*

* **❓ Perché ha usato X invece di Y?**
  * *(es. perché un `.map()` invece di un `.forEach()`, perché una funzione separata invece di scrivere tutto dentro l'event listener?)*
  * 
* **✂️ Scorciatoie prese a lezione:**
  * *(Cose lette/viste che in produzione andrebbero gestite diversamente, es. API Key visibile nel frontend)*
  * 

---

## 5. ❓ Foglio dei Dubbi & Domande da Risolvere
> *Cose da verificare e testare in autonomia nell'IDE subito dopo la live.*

- [ ] **Punto 1:** *(es. Rivedere la sintassi della destrutturazione della risposta JSON)*
- [ ] **Punto 2:** *(es. Provare a rifare l'evento di submit senza usare `e.preventDefault()` per vedere cosa si rompe)*
- [ ] **Punto 3:** *(es. Capire se la funzione di rendering può essere spezzata in due sotto-funzioni)*
- [ ] **Punto 4:** 

---