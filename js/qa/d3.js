const text = 'pomidoras';
let reverseText = '';

for (let i=0; i<text.length; i++) {
    const symbol = text[i];
    reverseText = symbol + reverseText;
}
console.log(text, '-->', reverseText);

let reverseText2 = '';

for (const symbol of text) {        // tiesiog sukeiteme cikla vietomis
    reverseText2 = symbol + reverseText2;
}
console.log(text, '-->', reverseText2);

const marks = [10, 2, 8, 4, 6];

// 0+10+2+8+4+6
const sum = marks.reduce((total, item) => total + item, 0);
console.log(sum);

// 10+2+8+4+6
const sum2 = marks.reduce((total, item) => total + item);
console.log(sum2);

// 1000+10+2+8+4+6
const sum3 = marks.reduce((total, item) => total + item, 1000);
console.log(sum3);

const diff1 = marks.reduce((total, item) => total - item);
console.log(diff1);

const diff2 = marks.reduce((total, item) => total - item, 0);
console.log(diff2);

const dict = ['labas', 'rytas', 'sakau', 'tau', 'Lietuva']; // kiek cia yra raidziu, visokiu simboliu?
const symbolInDict = dict.reduce((t, w) => t + w.length, 0);
console.log(symbolInDict);

const firstLetters = dict.reduce((t, w) => t + w[0], '');
console.log(firstLetters);

const firstLetters2 = dict.reduce((t, w) => t + w[0], 'Pirmos raides:'); // sureduce-ini supaprastini
console.log(firstLetters2);

for { // ciklas riestiniai skliaustai

}
