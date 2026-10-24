#ESERCIZIO
Oggi lavorate a: js-tempo.
Scaricate lo zip in allegato, dove troverete un minimo di scaffolding.
Copiatelo in una vostra cartella js-tempo e pushate sul vostro Github.

#MILESTONE 1
Nella prima sezione è presente un <div id="progress">
Da console ispezionatelo e provate a cambiare la sua width da 100% a 50% o qualunque altro valore.
Da JS, appena la pagina carica, impostate la width a 0%.
Poi impostate un timer che ogni secondo aumenti la width di 1%.
Ricordatevi che la width va in percentuale% , non basta un intero.
Cambiate il timer a 0.1s in modo da completare il caricamento in 10s totali, invece che 100s.
Quando il timer arriva a 100, cambiate il titolo da "Loading" a "Caricamento completato"

Nota: oltre che il timing dovrete ricordarvi come alterare lo style di un elemento 😉 

#MILESTONE 2
In basso è presente un cronometro. Su javascript dovrete gestire i tre tasti per l'avvio, lo stop e il reset del contatore.
Collegate un evento al tasto play. L'evento avvia un timer che ogni secondo aggiorna il tempo trascorso
Modificate per fare in modo che una volta cliccato su play si disabiliti il tasto play e si attivi invece stop
Collegate un evento al tasto stop, che fermi il conteggio. Inoltre attivate i tasti play e reset.
Collegate un evento al testo reset, che reimposti il contatore a 0.
Verificate il funzionamento!

Nota: è importante disattivare il tasto di play dopo l'avvio, altrimenti permetterebbe di avviare tanti timer diversi, ma noi possiamo stopparne solo uno!