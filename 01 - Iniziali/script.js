"use strict";
console.clear();

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {array} myArray 
 * @returns 
 * @ Mi ritorna la prima lettera di ogni stringa del mio array
 */

function firstLetter(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        newArray.push(myArray[i][0]);
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console

const initialNames = firstLetter(names);
console.log(initialNames);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

