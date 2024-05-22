/*
BOOLEAN - logines reiksmes
- true
- false

Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)
*/
const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', true + true + true + true);
console.log('KAIP NENAUDOTI:', true * false);

console.log('-----------------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Vaikinas
//kada eina i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = false;
const isYoung = true;
const isRich = true;

const willIGoTo = isBeautiful || isYoung || isRich;
console.log('>>>>', willIGoTo);

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.clear();
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// su 2 -> 8 variantai (2 su end ir 2 su or)

console.clear();
console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);

console.log('-------------------');

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);
// 3 -> 16 variantu

console.log('--------------------');

console.log(true && true && true && true);
console.log(true && true && true && false);

console.log(true && true && true || true);
console.log(true && true && true || false);
console.clear();
/*
2 -> 8
3 -> 16
4 -> ???
2
a x b x c
2*2*2*2*2 = 32
2**7 = 128
*/

console.log(!true);
console.log(!false);
// daugiau nei 2 sauktukai - nerasyti