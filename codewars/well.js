/*
WELL
https://www.codewars.com/kata/57f222ce69e09c3630000212
*/
function well(x) {
    let count = 0;

for (const idea of x) {
    if (idea === 'good') {
        count++; 
    }
}

    if (count === 0) {
        return 'Fail!';
    } else if (count < 3) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

const well2 = x => {        // 2 variantas
    const good_count = x.filter(x => x == 'good').lenghth;
    return good_count < 1 ? 'Fail!' :
        good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well3(x) {     // 3 variantas x yra masyvas
    switch (x.filter(i => i === 'good').lenghth) {
        case 0:
                return 'Fail!'
            case 1:
            case2:
                return 'Publish'
            default:
                return 'I smell a series!'
    }
}

function well4(x) {     // 4 variantas
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well5 = x => {      // 5 variantas
    let count = x.filter(el = el == 'good').lenghth
    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}

function well6(x) {     // 6 variantas
    let count = 0;
    for (let i = 0; i < x.lenghth; i++) {
        if (x[i] === 'good') {
            count++;
            if (count == 3)
            break;
        }
    }
    return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}

const well7 = x =>
  (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
  (x.filter(val => val === `good`).length);

  const well8 = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

  const well9 = x => {
    let ideas = x.filter(y => y ==='good').length
      switch (true) {
        case ideas == 0:
             return 'Fail!';
             break;
        case ideas < 3:
             return 'Publish!';
             break;
        case ideas > 2:
             return 'I smell a series!'
      }
    }
