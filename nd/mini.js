// 1 etapas
const n1 = 7; // n - numbers?
const n2 = 5;
const n3 = 2;

const str1 = 'Labas'; // str trumpinys string
const str2 = 'rytas';
const str3 = 'Lietuva';

const marks1 = [10, 2, 8, 4, 6];     // 5 reiksmes viduje
const marks2 = [9, 8, 7];    // antras masyvas 

const class1 = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const class2 = ['Chuk', 'Noris', 'Jan', 'Clod', 'Van', 'Damas'];

// 2 etapas
const sum = n1 + n2 + n3; // ir sako išvesti rezultata į console
console.log(sum);

const sentence = str1 + ' ' + ' ' + str2 + ' ' + str3;
console.log(sentence);

const marksSum1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4]; // kiek tiek yra masyve nariu
console.log(marksSum1);

const marksSum2 = marks2[0] - marks2[1] + marks2[2];
console.log(marksSum2);

const class1Total = class1[3] + ', ' + class1[2] + ', ' + class1[1] + ', ' + class1[0];
console.log(class1Total);

const class2Total = class2[5] + ', ' + class2[4] + ', ' + class2[3] + ', ' + class2[2]+ ', ' + class2[1] + ', ' + class2[0];
console.log(class2Total);

console.log('-----------------------------------');
console.clear();

console.log(str1, str1.length); // Taip išsiskaičiuoja, kiek yra simbolių
console.log(str2, str2.length);
console.log(str3, str3.length);
console.log('                       '.length); // space tarpas yra simbolis, vizualiai nematomas

if (class1.length === class2.length) {
console.log('taip');
} else {
    console.log('ne');
}
console.clear();

function intervalSum(start, finish) {
    let ans = 0;    //answer

  for (let i = start; i <= finish; i++) {
    ans += i; // 13+...21=153
  }

    return ans;
}

console.log(intervalSum(0, 0)); // atsakymas 0
console.log(intervalSum(0, 4)); // 10
console.log(intervalSum(13, 21)); // 153
console.log(intervalSum(0, 100)); // 5050
console.log(intervalSum(574, 815)); // 168069
console.log(intervalSum(-50, 50)); // 0
console.log(intervalSum(-70, 30)); // -2020

// 0 ... 0 Galima taip spresti
let ans1 = 0;
for (let i = 0; i <= 0; i++) {
    ans1 += i;
}
console.log('>>>', ans1);

// 0 ... 4
let ans2 = 0;
for (let i = 0; i <= 4; i++) {
    ans2 += i;
}
console.log('>>>', ans2);

console.clear();

function reverseString(text) {
    let ans = '';

    // for (let i = 0; i < text.length; i++) {
    //   ans += text[text.length - 1 - i];
   // }

    for (let i = 0; i < text.length; i++) {  // cia kombinacija, kad ciklas einma i priekį
         ans = text[i] + ans;               // man sitas patinka kodas, trumpiausias
    }

    //for (let i = text.length - 1; i >= 0; i--) {
    // ans += text[i];  // ir sitas neblogas kodas
    //}

    //for (let i = text.length - 1; i >= 0; i--) {
    //  ans = text[text.length - 1 - i] + ans;
   // }

    return ans;
}

console.log(reverseString('labukas'), '-->', 'sakubal');
console.log(reverseString('alus'), '-->', 'sula');
console.log(reverseString('sedek uzu kedes'), '-->', 'sedek uzu kedes');

console.clear();

function numberCount (start, finish, step) {
    let answer = 0;
// artitmetiniai operatoriai +-/* %
    for (let i = start; i <= finish; i++) {
        // jeigu skaiciu dalinam is step liekana yra 0, tai answer didiname 1 vienetu
        if (i % step === 0) {
            answer++;
            // console.log(i);
        }
        // console.log(i, '>>>', i % step);
       // answer++;
    }
    // Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai
    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai. ';
}

function numberCount(start, finish, step) {
/*
- reikia kintamojo kuris skaiciuoja kiek turiu skaiciu, kurie dalijasi be liekanos
- einam per intervala, nuo START iki FINISH 
    - pasiimu kiekviena skaiciu ir dalinu is STEP
    - tikrinu, jeigu dalybos liekana yra nulis (0)
        - ANSWER didinam +1
- o jeigu ne
    - tai darau
- grazinam ANSWER
*/
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 31, 5));
console.log(numberCount(-18, 31, 7));

function tusciaFunkcija(){
    return false;
}
console.log(tusciaFunkcija());
console.clear();


function reverseArrayOfNumbers(list) {
    // for (let i = 0; i < list.length; i++) { 
    //     console.log(list[i]);           
    // }

    const rev = [];

    for (let i = list.length - 1; i >= 0; i--) {
        rev.push(list[i]);
    }
    return rev;
}

const ats = reverseArrayOfNumbers([1, 2, 3, 4, 5]);
console.log(ats);
const powerOfTwo = [];

for (let i=0; i<10; i++) {
    powerOfTwo.push(i);

console.log(powerOfTwo);
}

// switch
// ...rest funkcijose
