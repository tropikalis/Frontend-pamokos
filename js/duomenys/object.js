/*
OBJECT - objektas
*/
const empty = {};
console.log(empty);

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

console.clear();

const students = [    // []masyvas, o studentai objektai. Vienskaita ar dgs? Jeigu dgs tada masyvas
    {name: 'Jonas', age: 99, isMarried: true},
    {name: 'Maryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},
    {name: 'Chuck', age: Infinity, isMarried: 'maybe'},
]; 
// console.log(students[1].name);
// console.log(students[1].age);
// console.log(students[1].isMarried);

// Sveiki, as VARDAS, man xx metu ir esu/nesu vedes.

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
        return `Sveiki, as ${stud.name}, man ${stud.age} metu ir ${status} vedes.`;
}

for (let i = 0; i< students.length; i++) {
    console.log(introduction(students[i]));
}
console.clear();

// Standartine objekto sintakse
// vs.
// Supaprastinta objekto sintakse

const stud3 = {
    name: 'Petras',
    age: 77,
    isMarried: false, // nera vedes
};
// Supaprastinta objekto sintakse
console.log(stud3.name);
console.log(stud3.age);
console.log(stud3.isMarried);

// Standartine objekto sintakse
console.log(stud3['name']); // string ir aaray yra giminingi
console.log(stud3['age']);
console.log(stud3['isMarried']);

const key = 'age';
console.log(stud3.key);
console.log(stud3['age']);
console.log(stud3[key]);

console.clear();
function giveMe(data, key) {
    return data[key];
}
console.log(giveMe({name: 'Jonas', age: 99}, 'name'));
console.log(giveMe({name: 'Jonas', age: 99}, 'age'));
console.log(giveMe({name: 'Jonas', age: 99}, 'isMarried'));
console.log(giveMe({title: 'Svente', page: 1, size: 3}, 'title'));
console.log(giveMe({title: 'Svente', page: 1, size: 3}, 'page'));
console.log(giveMe({title: 'Svente', page: 1, size: 3}, 'size'));
console.log(giveMe({title: 'Svente', page: 1, size: 3}, 'xxx')); //gal but noriu suzinoti xxx

const sum = (a, b) => a + b; // galima ir taip pradeti
 function diff(a,b) {
 }
 
 function calcObj(n1, operation, n2) {
    const mathFunctions = {
        '+': sum, // Kiekvienas raktas reprezentuoja funkciją.
        '-': (a, b) => a - b, // cia yra logikos gabas, ka daryti
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,  
    };
    return mathFunctions[operation](n1, n2);           
}
console.log(calcObj(7, '+', 5));
console.log(calcObj(7, '-', 5));
console.log(calcObj(7, '*', 5));
console.log(calcObj(7, '/', 5));