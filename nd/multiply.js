function multiply(a, b) {
    /*
    - jeigu pirmas parametras nera skaicius
        - graziname klaidos pranesima

     - jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima
    - Atskirame kintamajame issaugome sandaugos reiksme
    - Graziname sandaugos reiksme
    */
}

function multiply(a, b) {
    if (typeof a !== 'number') {    // įsitikinti ar parametras nėra probleminis,paklausti. Ir jeigu ne skaicius, probleminis
        return 'Pirmasis parametras turi buti skaiciaus tipo.';
    }

    if (typeof b !== 'number') {    // įsitikinti ar parametras nėra probleminis,paklausti. Ir jeigu ne skaicius, probleminis
        return 'Antrasis parametras turi buti skaiciaus tipo.';
    }
    const answer = a * b;
    return answer;
}

// function multiply(firstNumber, secondNumber) {
// const answer = firstNumber * secondNumber; 
// return answer;
// }
console.log(multiply(2, 2));
console.log(multiply(2, -2));
// atsidaryti numbers.js ir pasiziureti
console.log(multiply(2, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(Infinity, -Infinity));

console.log(multiply(2, NaN));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, -NaN));

console.log(multiply(5, 'Labas')); // paties stringo dauginti ne. Matematika atliekama tik su skaiciais
console.log(multiply(5, 'Labas'.length)); // 25 rezultatas, viskas ok
console.log(multiply(5, []));
console.log(multiply(5, [].length));

console.log(multiply(5, [7].length)); // masyvo ilgis visalaika yra skaičius, cia turetu gražinti 1
console.log(multiply(5, [7, 2].length));

console.log(multiply(5, true)); // true dazniausiai interpretruojamas kaip 1
console.log(multiply(5, false)); // false interpretuojamas kaip (0)

console.log(multiply(5, undefined));// bandai skaičiu dauginti is nesamones
console.log(multiply(5, null));

console.log(multiply(5, multiply)); // multiplay yra fukcija
console.log(multiply(5, multiply() )); //kai taip parasai skliaustus, cia yra iskvieciama fukcija

console.log(multiply(5, multiply(2, 4))); 
console.log(multiply(5, 8)); 
console.log(40);