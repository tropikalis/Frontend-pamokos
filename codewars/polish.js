/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/
// function polish (string) { 

function polish(string) {
    const polishAbc = 'ąćęłńóśźż'; // ko as ieskau
    const normalAbc = 'acelnoszz'; // ka as panaudosiu
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];           // ę

        let index = -1;  //turime default atsakymą ups neradau -1  indexOf-o metodą implementavome
        for (let j=0; j<polishAbc.length; j++) { // einu per abecele 
            const polishLetter = polishAbc[j];  // ieskau, ieskau
            if (polishLetter === letter) {      // mes turime atitikima
                result += normalAbc[j];
                index = j;                      // jeigu rangu grazinu index-a
        }
        }
        
        if (index === -1) {
             result += letter;
        }
}
    return result;
}


    // for (let i = 0; i < string.length; i++){
    //  const letter = string[i];   // letter raide
    // if (letter === 'ą'){ // jeigu gavai ne a nosine, tai tada priesingu atveju prie rezultato pridedame ten ta raide kuri tiesiog papuole
    // result += 'a';  // prie rezultato string-o pridedame ten kazkokia kita raidę
    //} else if (letter === 'ę') {
    // result += 'e';
    //} else {
    //result += letter;
    //}
    // }
    //  return result;
    // }

console.log(polish('Wałęsa'), '-->', 'Walesa');
console.log(polish('Jędrzej Bładziński'), '-->', 'Jedrzej Bladzinski');
console.log(polish('Lech Wałęsa'), '-->', 'Lech Walesa');
console.log(polish('Maria Skłodowska-Curie'), '-->', 'Maria Sklodowska-Curie');

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"





