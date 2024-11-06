"use strict";
console.clear();

/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {array} myArray 
 * @param {string} text 
 * @returns 
 * @abstract Mi ritorna un array contente solo i nomi che iniziano con una data lettera
 */
function stringArray(myArray, text) {

    const newArray = [];

    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i][0] === text) {

            newArray.push(myArray[i]);
        }
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console

// const choicedArray = stringArray(names, "A");
// console.log(choicedArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// Arrow Function


const text = "A";
const choicedArray = names.filter((name) => name[0] === text);
console.log(choicedArray);





