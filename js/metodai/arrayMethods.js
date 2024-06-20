/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];  //abc masyvas

console.log('\n Concat --------------------');
console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat([4, 5]));
console.log([...marks].concat([1, 2, 3], 4, 5));
console.log([...marks].concat(4, [1, 2, 3], 5));
console.log([...marks].concat(4, 5, [1, 2, 3])); // is gala prides viska is eiles

console.log(...marks, 4, 5, ...[1, 2, 3]);

console.log('\n Fill --------------------');
console.log([...marks].fill(999)); //visas reiksmes uzfill-ino tavo pasakytinomis
console.log([...marks].fill('', 1, 3)); // tam tikra intevala leidzia nuresetinti overaidinti naujomis statinemis reiksmemis

const desimtZuikiu = [];

for (let i=0; i<10; i++) {
    desimtZuikiu.push('zuikis');
}
console.log(desimtZuikiu);

const penkiolikaZuikiu = new Array(15).fill('zuikis');
console.log(penkiolikaZuikiu);

console.log('\n Fill --------------------');
console.log([1, 2, 3].flat()); // isfliatina masyvą
console.log([1, [2, 4], 3].flat());
console.log([1, [2, 4], 3, [5, 6], 7].flat());
console.log([1, [[2, 4], 3, [5, 6]], 7].flat());
console.log([1, [[2, 4], 3, [5, 6]], 7].flat(2));

const matrix = [
    [1, 2, 3, 4],
    [1, 2, 3, 5],
    [1, 2, 3, 6],
];

console.log('\n includes --------------------');
console.log([...marks]);
console.log([...marks].includes(0));
console.log([...marks].includes(1));
console.log([...marks].includes(2));

console.log([[1], [2], [3], [4]].includes([2]));
console.log([[2, 2], [2, 2, 2]].includes([2]));

const two = [2];
console.log([[1], two, [3], [4]].includes(two));

console.log('\n indexOf --------------------');
console.log([...marks]);
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));
console.log([...marks].indexOf(14568454));

function turboIndexOf(list, search) { // Pasibandyti isspresti uzdavini
   // [10, 2, 8, 4, 6] -> [2] true Ar yra 2
   // [10, 2, 8, 4, 6] -> [2, 8] true Ar yra 2 ir 8 salia?
   // [10, 2, 8, 4, 6] -> [2, 8, 4] true Ar yra 2,8,4? 
   // [10, 2, 8, 4, 6] -> [2, 8, 6] false
}

console.log([...marks].indexOf(10)); // randa 0-ne pozicija
console.log([...marks].indexOf(10, 2));
console.log([...marks, 10].indexOf(10, 2));

console.log('\n join --------------------');
console.log(abc);
console.log([...abc].join());
console.log([...marks].join());
console.log([...abc].join(', '));
console.log([...marks].join(', ')); // visus skaicius surinks ir per kableli atskirs
console.log([...abc].join(' xXx '));
console.log([...marks].join(' xXx '));
console.log([...abc].join(''));
console.log([...marks].join(''));

console.log('\n lastIndexOf --------------------');
console.log([...marks]); // [ 10, 2, 8, 4, 6 ]
console.log([...marks].lastIndexOf(10)); // ziurint is galo, desines puses
console.log([...marks].lastIndexOf(7));
console.log([...marks].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].join(', '));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4, 5)); // ieskot nuo 5 pozicijos

console.log('\n pop --------------------');
const marks2 = [...marks];
console.log(marks2);
console.log(marks2.pop()); //pasalino paskutini nari 6 ir ji grazino
console.log(marks2);
console.log(marks2.pop()); // dabar netekau 4-to
console.log(marks2);

console.log('\n push --------------------');
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7)); // buvusio paskutinio nario 6 ir naujojo masyvo ilgio
console.log(marks3);
console.log(marks3.push(8));
console.log(marks3); // po push-o toks yra nariu kiekis masyve

console.log('\n unshift --------------------');
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0)); // 0 prideda i prieki
console.log(marks4);
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4.unshift(3));
console.log(marks4);

console.log('\n shift --------------------');
const marks5 = [...marks];
console.log(marks5);
console.log(marks5.shift(0)); // pasalino 10 [ 10, 2, 8, 4, 6 ]
console.log(marks5); // [ 2, 8, 4, 6 ] trinat, iskarto gausit ka istrinet

console.log('\n reverse --------------------');
console.log([...marks]); // [ 10, 2, 8, 4, 6 ]
console.log([...marks].reverse()); // [ 6, 4, 8, 2, 10 ]

const demo = ['Labas', 'rytas', ',', 'Lietuva', '!'];
console.log(demo);

const reverseDemo = demo.reverse(); // norint apversti
console.log(demo); // 2 kintamieji kurie ziuri i ta pacia vieta
console.log(reverseDemo);

const reversedDemo2 = demo.toReversed();
console.log(reversedDemo2);
console.clear();

console.error();
console.warn();
console.table();