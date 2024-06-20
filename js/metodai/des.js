/*
Destructuring - Destrukturizavimas 
gimininga "siela" - siela
ideja ... tritaskiai
*/
const a = [10, 2, 8, 4, 6]; // reikia atskiraji kintamaji istraukti pačia 1-ą reiksme
const first = a[0];
const second = a[1];
const rest = a.slice(2);
console.log(first);
console.log(second);
console.log(rest);

const b = [10, 2];
const first2 = b[0];
const second2 = b[1];
const rest2 = b.slice(2);
console.log(first2);
console.log(second2);
console.log(rest2);

console.clear();
const dict = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau']; // dict zodynas
const [word1, word2, ...restOfDict] = dict; // cia vadinasi destrukturizavimas, REST operatorius
console.log(word1);
console.log(word2);
console.log(restOfDict);

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b]; 
}


const [n1, n2] = giveMeTwoNumbers();
console.log(n1 + n2);

const res2 = giveMeTwoNumbers();
const [n3, n4] = res2;
console.log(res2, n3 + n4);
console.clear();

const person = { // turi kelias key value poras
    color: 'red',
    name: 'Ona',
    age: 66,
    isMarried: true,
};
const userName = person.name;
const userAge = person.age; 
const userIsMarried = person.isMarried;

const {age, name, ...restDetails } = person; // kai destrukturizuojame objekta ir masyva
console.log(age);
console.log(name);
console.log(restDetails);

function food() {
    const list = [
        { title: 'cepelinai', count: 2 },
        { title: 'saltibarsciai', count: 1 },
        { title: 'svogunu laiskai', count: 10 },
    ];
    return list[Math.floor(Math.random() * list.length)];
    }

const {title: f1Title, count: f1Count} = food();
const sentence1 = `Valgysi: ${f1Title}; Kiekis: ${f1Count}.`;
console.log(sentence1);

const {title: f2Title, count: f2Count} = food();
const sentence2 = `Valgysi: ${f2Title}; Kiekis: ${f2Count}.`;
console.log(sentence2);

console.clear();

function drinks(...list) { // rest operatorius surenka i masyva
    console.log(list); // kas yra list kintamasis? rodo masyva
    return `Gerimu kiekis: ${list.length}`;
}
console.log(drinks('a', 'b', 'c'));

function iLike(name, ...list) { // ...rest operatorius funkcijose
    return `${name} mesgsta ${list.length} spalvas`; // kadangi vardas yra kintamas istatome name
}
console.log(iLike('Petras'));
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

// function taipNegalima(a, b, c, ...restParams, d, e) { // taip negalima rasyti
//     return null;
//}

console.log(Math.max(10, 7));
console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6]; // surasti max ir min reiksmes masyve
console.log(Math.max(...marks)); // spred operatorius
console.log(Math.min(...marks));


