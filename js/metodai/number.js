/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
*/

console.log('Number.isFinite()');
console.log(Number.isFinite(154357));
console.log(Number.isFinite(-154357));
console.log(Number.isFinite(1526.14));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));

console.log('-------------------------');
console.log('isFinite()');

console.log(isFinite(154357));
console.log(isFinite(-154357));
console.log(isFinite(1526.14));
console.log(isFinite(0));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

console.log('-------------------------');
console.log('parseInt()');

const a = '87';
const b = parseInt('87');
console.log(typeof a);
console.log(typeof b);

console.log(parseInt('87'));
console.log(parseInt('0'));
console.log(parseInt('3.14')); // 3 sveikasis skaičius
console.log(parseInt('-3.14'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity')); // turi eiti su if-ais ir klausti ar sis strin-as toks ar ne toks
console.log(parseInt('grybu karas'));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('123abc123abc'));
console.log(parseInt('1.252e5'));

console.log('-------------------------');
console.log('parseFloat()');

console.log(parseFloat('87'));
console.log(parseFloat('0'));
console.log(parseFloat('3.14'));
console.log(parseFloat('-3.14'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Infinity')); 
console.log(parseFloat('grybu karas'));
console.log(parseFloat('123abc'));
console.log(parseFloat('125e5')); 
console.log(parseFloat('1.25e5'));
console.log(parseFloat('7e5'));

// 100 -> 1 * 10^2 -> 1e2   10^2 pakelta kvadratu)
// 1.000.000 -> 1 * 10^6 -> 1e6    (10^6 yra milijonas kas yra 7 skaitmenys)
// 125 -> 1.25 * 10^2 -> 1.25e2
// 0.001 -> 1 * 10^-3 -> 1e-3
// 0.00125 -> 1.25 * 10^-3 -> 1.25e-3

console.log('-------------------------');
console.log('Number.toFixed()');

const c = 5.123;

console.log(c);  // 5.123
console.log(c.toFixed(2)); // 5.12 gražina string-ą
console.log(parseFloat(c.toFixed(2))); // 5.12  atstatytų skaitinę išraišką 