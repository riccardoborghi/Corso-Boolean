# Mini E-Commerce (React + React Router + Fake Store API)

Checklist operativa per lo sviluppo del frontend e delle pagine principali.

## 0. Setup iniziale del progetto (Vite + React Router)

- [x] Inizializzare un nuovo progetto React con Vite nella cartella del repository
- [x] Installare le dipendenze base (`npm install`) e avviare il server di sviluppo per verificare che tutto parta
- [x] Installare React Router: `npm i react-router`
- [x] Ripulire gli stili e i componenti template non necessari prima di strutturare le pagine

## 1. Routing di base e Navbar condivisa

- [x] Creare almeno tre pagine principali con contenuto provvisorio di verifica:
  - [x] Homepage (`/`)
  - [x] Chi siamo (`/about`)
  - [x] Prodotti (`/prodotti`)
- [x] Implementare una `Navbar` visibile su tutte le pagine per navigare tra `/`, `/about` e `/prodotti`
- [x] Verificare che la navigazione tra le rotte funzioni senza ricaricare la pagina

## 2. Stili, contenuti e catalogo da Fake Store API

- [X] Rifinire il CSS base (header/navbar, indicatore del link attivo, layout generale)
- [ ] Inserire i primi contenuti reali nelle pagine (es. immagine/sezione in Home, testo in Chi siamo)
- [x] Nella pagina Prodotti (`/prodotti`), recuperare l'array di prodotti da `https://fakestoreapi.com/products`
- [x] Salvare i prodotti in uno state e gestire gli stati intermedi (caricamento / eventuale errore)
- [x] Iterare l'array in pagina renderizzando varie card con almeno:
  - [x] `title`
  - [x] `price`
  - [x] `image`

## 3. Pagina di dettaglio parametrica

- [ ] Rendere ogni card prodotto cliccabile tramite `<Link>` verso `/prodotti/:id` (dove `:id` è l'ID del prodotto)
- [ ] Configurare la rotta parametrica per leggere l'`id` dall'URL
- [ ] Creare la pagina di dettaglio che recupera l'`id` e chiama `https://fakestoreapi.com/products/:id`
- [ ] Mostrare i dati del singolo prodotto e gestire caricamento / prodotto non trovato

## Bonus

- [ ] Gestire gli errori o i casi non validi con `useNavigate` (es. reindirizzamento programmatico su errore o verso il catalogo)
