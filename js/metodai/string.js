/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log('Labas rytas, Lietuva!');

console.log(word[0]);
console.log('Labas rytas, Lietuva!'[0]);

console.log(word.charAt(0));
console.log('Labas rytas, Lietuva!'[0]);

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));
console.log('L'.charCodeAt(0));
console.log('l'.charCodeAt(0));

console.log('Labas'.concat('rytas', 'Lietuva')); // viena string-a sujunge su n kitu stringu
console.log('Labas'.concat('rytas','Lietuva'));
console.log('Labas'.concat('rytas').concat('Lietuva'));

console.log('-------------------');
console.log('endsWith()');
console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('s'));

console.log('-------------------');
console.log('startsWith()');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('L'));

console.log('-------------------');
console.log('includes()');
console.log('Pomidoras'.includes('o'));

console.log('-------------------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x')); // Atsakymas -1
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));

console.log('-------------------');
console.log('repeat()');
console.log('A'.repeat(10));
console.log('Labas'.repeat(5));

let ats = '';
for (let i = 0; i < 5; i++) {
    ats += 'Labas';
}
console.log(ats);

console.log('-------------------');
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B')); // pasiimk P ir pakeisk į B raidę
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_')); // sujunge grandinele
console.log('Pomidoras'.replace('mido', 'ukuo')); // keicia Pomidoras  i Poukuoras

console.log('-------------------');
console.log('replaceAll()');
console.log('Pomidoras'.replaceAll('o', '_'));

console.log('-------------------');
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
// console.log('Pyragelis'.slice(-3)); VG
// console.log('Pyragelis'.slice(6)); VG

const p = 'Vasara';

// p. length-3=9-3=6
console.log(p.slice(-3));
console.log(p.slice(p. length - 3));
//           012345678
console.log('Pyragelis'.slice(2, 4)); // nuo 2 iki 4
console.log('Pyragelis'.slice(-100));

const dalis = 'Pyragelis'.slice(2, 100); // issikirpti, issisaugoti kaip atskira kintamaji, kaip atskira rezultata
console.log(dalis, dalis.length); // ir pasimatuoti sito rezultato ilgi. Atsakymas: 7 simboliai

console.clear();

console.log('-------------------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';
const zodziai = sakinys.split(' ');
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

const  dalys = 'asd'.split('asdd');
console.log(dalys);

// sakinys => tuscias / ne tuscias
// split => tuscias / ne tuscias
// split => (ne)buvo kur kirpti

console.log('-------------------');
console.log('toLowerCase() toUpperCase');
console.log('Pomidoras'.toLowerCase());
console.log('Pomidoras'.toUpperCase());

console.log('-------------------');
console.log('trim()');
console.log('"' + 'Pomidoras'.trim() + '"');
console.log('"' + 'Labas rytas'.trim() + '"');
console.log('"' + 'Labas rytas      '.trim() + '"');
console.log('"' + '     Labas rytas      '.trim() + '"'); // "Labas rytas"
console.log('"' + '     Labas      rytas      '.trim() + '"'); // "Labas      rytas"

const username = '  vardenis     '.trim();
console.log(username);

console.clear();

// console.log('fsg'.trimEnd());
// console.log('fsg'.trimStart());

const text = 'Labas rytas, Lietuva!';

// const dictionary = ['Labas', 'rytas', 'Lietuva'];

const dictionary = text.replace(',', '').replace('!', '');
console.log(dictionary);


