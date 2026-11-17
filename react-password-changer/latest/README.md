# 🔐 React Password Changer

Creo un componente React semplice per la gestione e validazione del cambio password tramite input e stati sincronizzati.

## 🎯 Obiettivo dell'esercizio
- controllare due input testuali da browser
- usare useState e conditional rendering

## ✨ Funzionalità implementate
- [ ] **Validazione uguaglianza:** Confronto tra nuova password e conferma password al click.
- [ ] **Feedback visivo:** Messaggio dinamico di successo o errore.
- [ ] **Reset automatico:** Svuotamento dei campi input dopo il tentativo di invio.
- [ ] **Contatore in tempo reale (Minibonus):** Visualizzazione dinamica della lunghezza della password digitata.
- [ ] **Verifica password attuale (Bonus):** Controllo incrociato con la password preesistente prima di autorizzare il cambio.

## 🛠️ Tecnologie utilizzate
* React hook: useState, props evento


## 🧠 Logica e Architettura dello Stato

- useState usati:
* `setPass1`: [prima password da confrontare]
* `setPass2`: [seconda password da confrontare]
* `setResul`: [messaggio da visualizzare in interfaccia per il risultato]
