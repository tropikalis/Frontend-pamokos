const text = 'Labas rytas';

String.prototype.firstSymbol = function () {
    return this[0]; // istraukti 1-a simbolį
}

console.log(text[0]);
console.log(text.firstSymbol());

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toUpperCase();
    // return '' + this === ('' + this).toUpperCase();
  //  return this === this.toUpperCase(); 
}

console.log('ABS'.isUpperCase());
console.log('Abc'.isUpperCase());
console.log('abc'.isUpperCase());

console.log(3.1415.toFixed(2)); // daro 3.14

Number.prototype.double = function () {
    return 5;
}

console.log((7).double());

function triple(n) {
    return n * 3;
}

console.log(triple(888));