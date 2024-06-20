// [0..1) (skaiciu aibe nuo 0 iki 1, intrvalas)
console.log(Math.random());

function moneta () {
    if (Math.random() < 0.5) {
    // [0..0.5)
    return 'Skaicius';
    } else {
    // [0.5..1)
    return'Herbas';
    }
}

const metimuKiekis = 8;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}
console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai); // magic numbers

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm']; // random generatorius
// [0..1step) 1 (Pirmadienis)
// [1step..2step) 2
// [2step..3step) 3
// ...
// [6step..7step) 7 sekmad

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
console.log(week[index]);
}

//Man reikia atsitiktinio skaičiaus intervale nuo 1 iki 10 imtinai

for (let i = 0; i < 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

// Namu darbas: Man reikia atsitiktinio skaičiaus intervale nuo 23 iki 617 imtinai
for (let i = 23; i < 617; i++) {
    console.log(Math.floor(Math.random() * 617) + 23); // ar gerai issprendziau??
}
