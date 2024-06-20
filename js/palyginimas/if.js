/*
IF - palyginimas
Palyginimo opratoriai: 
VISI: <, > mažiau arba daugiau, <= mažiau arba lygu, >= daugiau arba lygu, == lygu arba nelygu,
 != nelygu, === triguba lygybe, !== tribuba nelygybe
NAUDOTINI:<, >, <=, >=, ===, !==
NENAUDOTINI: ==, !=
Šitie dažniausiai buna su skaičiais: <, >, <=, >=, <, >, <=, >=
O lygu nelygu vadinamas griežtasis palyginimas galimas ir su skaičiais ir su tekstais ir su
 booleans lyginti: ==, !=, ===, !== 
Sablonai:
if () {}
if () {} else {}        Du statybiniai blokai yra if ir if else

if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}
= lygybes zenklas priskirimo operatorius
*/

const age = 99;
const agelimit = 18;

// 1 variantas
if (age < agelimit) {
    console.log('Sorry, bet esi per jaunas...');
}

// 2 variantas
if (age < agelimit) {
    console.log('Sorry, bet esi per jaunas...');
} else {
console.log('Ok, uzeik ir pasismagink ;');
}
console.clear();

if (4 >= 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}
console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos...
const color = 'blue';
let translation = '';

if (color === 'red') {
    translation = 'Raudona';
} else if (color === 'blue') {
    translation = 'Melyna';
} else if (color === 'green') {
    translation = 'Zalia';
} else {
    translation = 'Nezinau tokios spalvos...';
}

console.log('>>>', translation);

function colorTranslation(color) {
    let translation = '';

    if (color === 'red') {
        translation = 'Raudona';
    } else if (color === 'blue') {
        translation = 'Melyna';
    } else if (color === 'green') {
        translation = 'Zalia';
    } else {
        translation = '...';
}

return color + ' -> ' + translation;

}
console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('orange'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('violet'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));
