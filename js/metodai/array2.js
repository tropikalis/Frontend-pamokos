// [1, 2, 3] -> [2, 4, 6] // * 2?
// as turiu masyva ir as noriu gauti analogiska masyva
function double(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 2); // skirsis tik sita 1-a logikos dalis (item * 2)
    }
return result;
}

const a1 = [1, 2, 3];
console.log(a1, double(a1));

const a2 = [10, 2, 8, 4, 6];
console.log(a2, double(a2));

function triple(list) {
    const result = [];
    for (const item of list) {
        result.push(item * 3); // domina sita transformacija. Ka daryti su duomenimis?
    }
        return result;
}
console.log(a1, triple(a1));
console.log(a2, triple(a2));

function map(list, transformFunc) { // savotiskai universali funkcija
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }
    return result;
}
console.log(map(a1, n => n * 2)); // viena gauna
console.log(map(a2, n => n * 3)); // kazka kita grazina

console.log(map(a1, n => 1)); // cia visalaika grazini 0
console.log(map(a2, n => 0));

console.log(map(a2, n => n + 1)); 
console.log(map(a2, n => (2 * n + 1) % 10)); 

console.log('----------------------------------------------');
console.log(a1);
console.log(a1.map(n => n * 2));

console.log(a2);
console.log(a2.map(n => n * 3)); // map-inu per masyva

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

const firstSymbol = s => s[0]; // rodyklines funkcijos
const lastSymbol = s => s[s.length -1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));
console.clear();

const marks = [10, 2, 8, 4, 6];

const updatedMarks = marks.map(n => n + 1 > 10 ? 10 : n + 1); // pasidina 1 vnt visi išskirus 10. Ternary operatorius
console.log(updatedMarks);

function increaseMarks(mark) {
    if (mark === 10) {
        return 10;
    }
    return mark + 1;
}
const updateMarks2 = marks.map(increaseMarks);
console.log(updateMarks2);
console.clear();

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];

const positiveNumbers = randomNumbers.filter(n => n >= 0); //jinai eina per nurodyta masyva ir filtruoja
console.log(positiveNumbers);

const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
console.log(integerNumbers);

const decimalNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(decimalNumbers);

console.clear();

const randomData = [0, 10, NaN, Infinity, -3, 'labas', 3.14, 'true', 5, [], 777, -13, {}, undefined, -2.727]; //15 reiksmiu
// teigiami sveikieji skaciai yra visi i desine puse isskirus 0 (0 neieina)
// ne neigiami sveikieji skaiciai
const tss = randomData                //turi 15 reiksmiu
    .filter(n => Number.isInteger(n)) //6
    .filter(n => n >= 0);
console.log(tss);

const tss2 = randomData                   //15
    .filter(n => typeof n === 'number')   //15
    .filter(n => isFinite(n))             //10. Pasiliekam visus kurie yra baigtines reiksmes
    .filter(n => n >= 0)                  //6                
    .filter(n => n % 1 === 0);          //5
console.log(tss2);

const tss3 = randomData                    //15
.filter(n => Number.isInteger(n) && n>=0); //15. Pasiliekam sveikus sk ir tas skaicius kartu turi buti >=0
console.log(tss3);

// SORT

const dictionary = [ 'Labas', 'rytas', 'asla', 'medis', 'zuvis']; // norisi issortinti ABC tvarka
console.log(dictionary);

dictionary.sort();
console.log(dictionary);

const jonasMarks = [10, 2, 8, 11, 143, 123, 120, 12, 117, 100, 4, 6];
console.log(jonasMarks);

//neigiamas skaicius -> a eina i prieki tasykles
//                      0 -> a ir b lieka savo vietose
// teigiamas skaicius ->a eina i gala

// (5, 7) => neigiamas
// (7, 5) => teigiamas
// (7, 7) => 0
// (a,b) => a-b >>> ???

jonasMarks.sort((a, b) => a - b); // uzvesti MOUSE ant SORT
console.log(jonasMarks);

jonasMarks.sort((a, b) => b - a); // uzvesti mouse ant sort
console.log(jonasMarks);

const du = [7, 5];
const duSorted = du[0] < du[1] ? [...du] : [du[1], du[0]];
// radex algoritmas kuris su dideliais duomenu kiekiais, skaiciais 
console.log(duSorted);

const students = [
    {name: 'Jonas', marks: 7},
    {name: 'Maryte', marks: 10},
    {name: 'Petras', marks: 4},
    {name: 'Ona', marks: 2},
];
students.sort((a, b) => a.marks - b.marks );
console.log(students);
console.log('Maziausias vidurkis:', students[0].marks);
console.log('Maziausio autorius:', students[0].name);

console.log('Didziausias vidurkis:', students.at(-1).marks); // at paskutinio objekto po isrikiavimo 10
console.log('Didziausio autorius:', students.at(-1).name);

function varduPalyginimas(a, b) { // tekstu palyginimo funcija
    if (a.name < b.name) {
        return -1; // betkoks neigiamas skaicius
    } else if (a.name===b.name) { // yra  vienodi
        return 0;
    } else {
        return 1; // nes a bus daugiau uz b
    }             // yra 3 scenarijai
}

students.sort(varduPalyginimas); // palyginimo operatoriai true/false puikiai dirba su tekstais
console.log(students);
