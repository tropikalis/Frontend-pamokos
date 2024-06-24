const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

// FOR
for(let i = 0; i < words.length; i++) {
   const word = words[i];
    console.log(i, word);
}

//FOR-OF sukompaktinta 1-je vietoje, tiesiog tokia sintakse
for(const word of words) {
    console.log(word);
}

const students = [
    {name: 'Jonas', age: 99},
    {name: 'Maryte', age: 88},
    {name: 'Petras', age: 77},
    {name: 'Ona', age: 66},
];

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(i, students[i]);
}

let forOfi = 0;
for (const student of students) { // for of-as neturi indekso
    console.log('--', forOfi++, student);
}

// WHILE
const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

let whileI = 0;
while(whileI < words2.length) {      // 0<5
console.log('while:', whileI, words2[whileI]);
whileI++;  // pasididink iteratoriu, didinimo elementas
}

console.log('----------------------------------------');

// for (let i = 0; i < words2.length; i++) { // originalus for-as
  //  console.log('for:', i, words2[i]);
// }
let i = 0;
for (; i < words2.length;) {
    console.log('for:', i, words2[i]);
    i++;
}

let whileI2 = 0;
while (true) {
console.log(whileI2++);
if (whileI2 > 10) {
    break;      // cikluose galima naudoti break
    }
}
console.clear(); 

const marks = [10, 2, 8, 4, 6 ];
for (let i = 0; i < marks.length; i++) {
    if(marks[i] === 4) {
        console.log(i);     // atsk indeksas 2, stai kelintas yra 8-netas
        break;  // radau tai ko man reikia
    }
}
console.clear();
 

for (let h = 0; h <= 12; h++) { // laikrodzio laikas
    for (let m = 0; m < 60; m+= 5) {
        console.log(`${h}:${m}`);
        if (m > 13) {
            break; // stabdo artimiausia tevini cikla
         }   
        //}
        // switch(m) {
        // case 15:
        // console.log('Penkiolika');
        // break; // sitas break-as nukillina swith-a
        // } 
       }
}
console.clear();

const hackerMarks = [10, 'Desimt', 8, 2, 100, 6, 4, -7, 3.14]; // skaiciuoti pazymiu vidurki
let sum = 0;
let count = 0;

// for (const mark of hackerMarks) {
//     if(typeof mark !=== 'number' // kai esi ne skaicius ingnoruoti
//         || mark > 10    // arba jeigu tu esi skacius, bet > 10
//         || mark < 1    // arba kai pazymis yra maziau uz 1
//         || mark % 1 !== 0) {    // kai pazymis yra deimtainis yra kazkokia liekana
//         continue; //  praskipins iteracija
//     }
//     sum += mark;
//     count++;
// }

for (const mark of hackerMarks) {  // kada pazymis yra geras?
    if(typeof mark === 'number'   // duomenu tipas yra numberis
        && mark <= 10    
        && mark >= 1    
        && mark % 1 === 0) {  
        sum += mark;
        count++;
    }
}
console.log(sum / count); // atsk 6

//DO-WHILE 