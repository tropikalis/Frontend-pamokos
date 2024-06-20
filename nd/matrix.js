//              0   1  2  3  4
const matrix = [10, 2, 8, 4, 6]; // vienmatis sarasas

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
console.log(i, '-', matrix[i]);
}
// n-matis masyvas nth matrix
const students = [           // galima su valstybe, sudaryta is apskriciu, o apskriti viduje sudaro rajonai
    [10, 9, 8, 7,],                 // jono pazymiai
    [9, 9, 9, 9, 9],                // marytes
    [7, 8, 9, 7, 8, 9, 7, 8, 9],    // petro
    [8, 8, 8, 8, 8, 8, 8],         // onos
];
 
// jonas (0) nulinis indeksas
const jonoPazymiai = students[0];
console.log(jonoPazymiai);
for (let i = 0; i<jonoPazymiai.length; i++) { // Kad nereiketu rankomis koreguoti,tada rašome CIKLa
    console.log('jonas', jonoPazymiai[i]);
}

console.log(students [0]);
for (let i = 0; i< students[0].length; i++) { 
    console.log('jonas', students[0][i]);
}

// maryte (1)
const marytesPazymiai = students[1];
console.log(marytesPazymiai);
console.log(marytesPazymiai[0]);
console.log(marytesPazymiai[1]);
console.log(marytesPazymiai[2]);
console.log(marytesPazymiai[3]);
console.log(marytesPazymiai[4]);

console.clear();

const gorila = [
[1, 2, 3],
[4, [5, 6], 7],
[
    [8, 9, 10],
    [11, 12, 13, [14, 15]],
],
];

console.log(gorila[2]);
console.log(gorila[2][1][3][1]);
