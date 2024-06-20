function numberSize(n) {    // n kintamojo number
    if (typeof n !== 'number') {
        return 'Blogas duomenu tipas'
    }
const nAsText = '' + n;     // 'Infinity'

if (!isFinite(n)) {     // ne yra baigtine reiksme
    return 'Duok normalu skaiciu'; // buvo noras atpažinti normalius nuo nenormaliu
}

    let size = nAsText.length;

    // desimtainis
    if (n % 1 !== 0) {
        size--;
    }
 
    // neigiamas
    if (n < 0) {
        size--; // size sumažinam 1 vnt
    }
    return size;
}

console.log(numberSize(2), '-->', 1); // tikimės, kad čia gražins 1
console.log(numberSize(25), '-->', 2);
console.log(numberSize(4895), '-->', 4);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(3.1415), '-->', 5);
console.log(numberSize(-25), '-->', 2);
console.log(numberSize(-4895), '-->', 4);
console.log(numberSize(-3.14), '-->', 3);
console.log(numberSize(-3.1415), '-->', 5);

console.log(numberSize(NaN));


// console.log(1425); // kai dirbate su skaiciais jisai zalias
// console.log('Labas' + 1425); // kai paverti i tekstini formata, jisai black-as

// console.log(typeof 1425);       // gavosi number
// console.log(typeof ('Labas' + 1425)); // gavosi string-as, nes ji sutekstinome

// const a = 1425;
// console.log(a);
// console.log('' + a); // dažniau konvertavimui skaiciu i string-us naudoju 
// console.log(a.toString());

// console.log(typeof a);
// console.log(typeof ('Labas' + a));
// console.log(typeof a.toString());

// console.log('' + 'Labas');
