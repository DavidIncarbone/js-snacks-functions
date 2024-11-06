
"use strict";
console.clear();


/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';





// Dichiara la funzione qui.

// function numberVowelsExtractor(text) {
//     const vowelArray = ["a", "e", "i", "o", "u"];

//     const newArray = [];
//     for (let iv = 0; iv < vowelArray.length; iv++) {
//         for (let i = 0; i < text.length; i++) {
//             if (text[i] === vowelArray[iv]) {
//                 newArray.push(text[i]);
//             }

//         }
//     }
//     return newArray;
// }

// Invoca la funzione qui e stampa il risultato in console

// const vowelsTextArray = numberVowelsExtractor(word);
// console.log(vowelsTextArray);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// arrow function

const vowelArray = ["a", "e", "i", "o", "u"];
const vowelsExtracted = [];

word.filter((letter) => vowelsExtracted.push(word(letter) === vowelArray[i]));
console.log(vowelsExtracted);
