/*
Duomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius)
*/

function empty() {

}

console.log(typeof 5);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'Labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);	
console.log(typeof [1, 2, 3]);	
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});	
console.log(typeof empty);
console.clear();
console.log('----------------------------');
// Kai norime patikrinti ar tai masyvas
console.log(Array.isArray([]));

const tikirinimasDalykas = null;
if (tikirinimasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}
console.clear();

const a = 21564;
console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:');
}
console.clear();

const x = '';
const y = 7;

console.log(x && y); // ka pasilikti x ar y? kadangi x yra pozityvas, tai ji ir pasilieka
console.log(typeof (x && y));

if (typeof (x && y) !== 'number') {
    console.log('ERROR');
} else {
    console.log('OK');
}
// && ampersand-as
// if (typeof x !== 'number') {
// console.log('ERROR: x');
// } else if (typeof y !== 'number') {
//    console.log('ERROR: y');
// } else {
//    console.log('VISKAS OK');
// }

