// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

//impostazione
//Preparazione:
// 1- chiedo il livello difficolta da 1 a 3
// 2- se 1:100 2: 81 3: 49
// 3- genero 16 bombe
// 4 creo condizioni vittoria numeroMax - 16 bombe

// fase logica
// Durante gioco
 // chiedo numero all'utente con prompt
 // Se il numero è una bomba fine gioco perdi
 // altroimenti metto numero in array se non presente
 // se l'array è piena numeroMax - 16 ---> alert hai vinto