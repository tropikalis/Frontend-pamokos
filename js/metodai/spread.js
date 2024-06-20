/*
Spread* operatorius
Destrukturizavimas
*/
// Value by reference nuoroda i atminties vieta
const a = [1, 2, 3];
const b = a;

console.log(a);
console.log(b);

a[0] = 44; // As kreipiuosi i masyvo viduje, tas yra leidziama, negali keisti namo
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);
console.log(b);
 // ...Spread array masyvą

const e = [1, 2, 3];
const f = [...e]; // isspredintos reiksmes surinktos atgal. Su spread-u padareme kopija
console.log(e, f);

e[0] = 111;
console.log(e, f);

f[2] = 9999;
console.log(e, f);

const g = [0, ...e, 4, 5];
console.log(g);

const h = [...e, ...e, ...e, 777]; //kai konstruojame nauja masyva, ideja kiek noriu ir kokiu noriu informaciju galima idėti
console.log(h);

console.clear();
// ...Spread object

const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1; // kopijuojasi adresas i informcijos vieta

obj1.name = 'Maryte';
console.log(obj1);

obj2.age = 88;
console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: '80'};
const obj4 = {...obj3};
console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';
console.log(obj3);
console.log(obj4); // vienas pasikeite, kitas ne, nes jie nesidalina atmintimi

obj4.model = 'S40'; // pasikeite tik kopijoje esanti informacija
console.log(obj3);
console.log(obj4);

const person = {
    name: 'Petras',
    age: 77,
};

const address = {
    city: 'Miestas',
    street: 'Gatve 123',
    number: 45,
};

const fullPersonDetails = {
    id: 11111111,
    phone: 861234567,
    ...person,
    ...address,
    name: 'Ona',
    name: 'Petras',
    number: 666,
};
console.log(fullPersonDetails);
console.log(fullPersonDetails.id);
console.log(fullPersonDetails.name);
console.log(fullPersonDetails.age);

const str = 'abc';
const arr = [      // Kas yra raktai masyve? Tai yra indeksai pozicijos numeris 0,1,2,3
    'a',   // 0 indeksas
    'b',   // 1
    'c',   // 2
];
const obj = {   // cia sedi key value poros
    0: 'a',
    1: 'b',
    2: 'c',
};

console.log(str[0], str[0], obj[0]);

const k = [1, 2, 3];
const l = { name: 'Ona', age: 66 };

// const o = [...k, ...l]; // NELEIDZIA l is not iterable. Jos tiesiog privalo buti masyvas
// console.log(o);

const p = { ...k, ...l};
console.log(p);


