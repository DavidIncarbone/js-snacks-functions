"use strict";
console.clear();

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function helloPeople(name) {

    const helloInsertedName = `Ciao ${name}!`
    return helloInsertedName
}


// Invoca la funzione qui e stampa il risultato in console

const helloInsertedName = helloPeople(name);
console.log(helloInsertedName);


//Risultato atteso se si passa 'Mario': // ciao Mario