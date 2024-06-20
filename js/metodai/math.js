/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
console.log('\n Abs ---------------------------');
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2) // istraukti sakni

// Math bibliotekos metodai

console.log('\n Cbrt ---------------------------');
console.log(Math.cbrt(8)); // kubine saknis skaicius istrauktas is 3-io laipsnio
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

console.log('\n Ceil ---------------------------');
console.log(Math.ceil(5)); // lubos skaičiaus apvalinimas į didėjančia puse
console.log(Math.ceil(-5));
console.log(Math.ceil(0));
console.log(Math.ceil(3.14));
console.log(Math.ceil(-3.14));

console.log('\n Floor ---------------------------');
console.log(Math.floor(5)); // grindys skaičiaus apvalinimas į mažėjančia pusę
console.log(Math.floor(-5));
console.log(Math.floor(0));
console.log(Math.floor(3.14));
console.log(Math.floor(-3.14));

console.log('\n Round ---------------------------');
console.log(Math.round(5));  // matematinis apvalinimas
console.log(Math.round(-5));
console.log(Math.round(0));
console.log(Math.round(-3.14));

console.log(Math.round(3.00001));
console.log(Math.round(3.49999));
console.log(Math.round(3.5));
console.log(Math.round(3.50001));
console.log(Math.round(3.99999));

console.log('\n Trunc ---------------------------');
console.log(Math.trunc(5));  // matematinis apvalinimas, maziau po kalbelio, kableli ingonoruoja
console.log(Math.trunc(0)); // numeta visas reikšmes po kalbelio
console.log(Math.trunc(-5));

console.log(Math.trunc(-3.00001));
console.log(Math.trunc(-3.49999));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.50001));
console.log(Math.trunc(-3.99999));

console.log('\n Exp ---------------------------');
console.log(Math.exp(2)); // exponente grzina laipsnio rodikli, priima 2 parametrus
console.log(Math.exp(17));
console.log(Math.E ** 17);

console.log('\n Fround ---------------------------');
console.log(Math.fround(5));
console.log(Math.fround(0));
console.log(Math.fround(-5));
console.log(Math.fround(3.1415));
console.log(Math.fround(0.1));
console.log(Math.fround(-0.1));

console.log('\n Hypot ---------------------------');
console.log(Math.hypot(3, 4)); // Pitagoras
console.log(Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(1, 1, 1, 1)); // keturmateje erdveje esantis vienetinio ilgio ilgis

console.log('\n Imul ---------------------------');
console.log(Math.imul(10, 17));

console.log('\n Max ---------------------------');
console.log(Math.max(1, 3)); // atsak 3. Ka duosi, ras max didziausia skaiciu
console.log(Math.max(-1, -3, 7, 10, 3.14));

console.log('\n Min ---------------------------');
console.log(Math.min(1, 3)); // is duotos imties randa maziausia skaiciu
console.log(Math.min(-1, -3, 7, 10, 3.14));

console.log('\n Pow ---------------------------');
console.log(Math.pow(2, 3)); // (2 ** 3)
console.log(2 ** 3);

console.log('\n Random ---------------------------');
console.log('Intervale nuo 0 iki 1 -> [0..1)');// nuo 0 imtinai 1 iki ne imtinai
console.log(Math.random()); // pergeneruoja skaicius. Sugeneruoti atsitiktinius skaicius

console.log('\n Sign ---------------------------');
console.log(Math.sign(5));  // Zenklas. Grazina 1 arba  -1
console.log(Math.sign(-5)); 
console.log(Math.sign(-3.1415)); 
console.log(Math.sign(2.7178)); 
console.log(Math.sign(0)); 
console.log(Math.sign(-0)); // neigiamas nulis. Vienas ir tas pats asmuo, tiktai 2-juose asmenybese
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));

console.log('\n Sqrt ---------------------------');
console.log(Math.sqrt(4)); // saknis yra 2
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(81)); // 9
// i*i = -1

