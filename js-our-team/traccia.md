#TRACCIA

#Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.

#Trovate l’array del team all’interno della cartella in allegato. L'array (come anche le immagini) va copiato nel vostro progetto.

#BONUS
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! 😀)

******************************************************************

## Logica da implementare
Usare JavaScript per:
- leggere i dati dell’array
- ciclare sui membri del team
- creare dinamicamente le card
- inserire i dati corretti all’interno del markup HTML

Può essere utile usare un ciclo come `forEach` oppure controllare gli elementi dell’array con `Object.keys()`.

## Struttura del progetto
- creare una struttura HTML base con Bootstrap
- preparare il layout delle card
- renderizzare i membri del team in modo dinamico
- aggiungere eventuali funzionalità extra

## Bonus
- rendere la pagina responsive, facendo andare a capo le card su schermi piccoli
- aggiungere un form per inserire un nuovo membro
- mostrare il nuovo membro nella pagina senza ricaricare la pagina
- usare una foto generica, anche personale, se si vuole far parte del team

## Fatti fino ad ora
- struttura base HTML con Bootstrap
- individuati gli elementi dell’array
- conteggio dei membri tramite `Object.keys()`

## Da fare
Scrivere funzioni atomiche, cioè brevi e specializzate, per:
- estrarre i membri dall’array
- preparare i dati di ciascun membro
- generare il codice HTML della card
- inserire le card nel DOM
- aggiungere un nuovo membro tramite il form

## Criteri di accettazione
Il progetto è completo quando:
- tutte le card dei membri vengono mostrate correttamente
- i dati provengono dall’array
- il layout è ordinato e leggibile
- la pagina funziona anche su dispositivi piccoli
- il bonus del form è implementato correttamente

## Suggerimento di organizzazione
Per rendere il codice più pulito, conviene creare funzioni come:
- `getMembers()`
- `renderMemberCard(member)`
- `renderTeam(members)`
- `addMember(newMember)`

In questo modo il codice sarà più leggibile, più semplice da testare e più facile da mantenere.