"use strict";
console.clear();

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const now = new Date();
console.log(now.getHours());


// Dichiara la funzione qui.

function helloName(name) {

    let helloInsertedName = `Ciao ${name}!`
    if (now.getHours() >= 5 && now.getHours() <= 13) {

        helloInsertedName = `Buongiorno ${name}!`
    } else if (now.getHours() > 13 && now.getHours() <= 17) {

        helloInsertedName = `Buonpomeriggio ${name}!`
    } else if (now.getHours() > 17 && now.getHours() <= 21) {

        helloInsertedName = `Buonasera ${name}!`
    } else {

        helloInsertedName = `Buonanotte ${name}!`
    }

    return helloInsertedName
}


// Invoca la funzione qui e stampa il risultato in console

const helloInsertedName = helloName(name);
console.log(helloInsertedName);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

