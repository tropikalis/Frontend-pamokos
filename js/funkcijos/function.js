/*
FUNCTION - funkcija, perpnanaudojama logika. Susikodini 1-a dalykq ir 10 kartu naudoji ta pati
() - parametru blokas
{} - logikos blokas
Input => Function() => Output
*/
function doSomething(params) {    // bus 4 etapai rasyti fukcijas
    // 1) Input (parametru) validavimas
    // 2 Vykdome logika
    // 3 Gauto rezultato validavimas
    // 4 Graziname rezultata
} 

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();
console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}
function giveMeSix() {
    return 6;
}

console.log(giveMeFive());
console.log(giveMeSix());

const five = 5;

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/

function intro(name, lastname) {
    return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}
console.log(intro('Jonas', 'Jonaitis')); // perduodama informacija yra simetriškai priimam
console.log(intro('Maryte', 'Marytaite'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output:
35
*/
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(5, 7));

// Mano vardas yra Jonas, man 99 metai ir as megstu bananus.
// Mano vardas yra Maryte, man 88 metai ir as megstu sultini.
function iLike(name, age, item) {
return ' Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';
// return ' Mano vardas yra VARDAS, man XX metai ir as megstu DALYKAS.'
}
console.log(iLike());
console.log(iLike('Jonas'));
console.log(iLike('Maryte', 88));
console.log(iLike('Petras', 77, 'cepelinus'));
console.log(iLike('Ona', 66, 'sultini'));
console.clear();


function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;
    return priceForSale;
}
console.log(price(100)); // 121
console.log(price(150)); // 181.5

// Dictionary: ZODIS, ZODIS, ZODIS
function words(w1, w2, w3) {
    let sentence ='Dictionary: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '. ';

    return sentence;
}
console.log(words('labas', 'rytas', 'Lietuva'));
