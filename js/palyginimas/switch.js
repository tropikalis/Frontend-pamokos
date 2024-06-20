
const diena = 1;

if (diena === 1) {
    stopList.push('Pirmadienis');
} else if (diena === 2) {
    stopList.push('Antradienis');
} else if (diena === 3) {
    stopList.push('Treciadienis');
} else if (diena === 4) {
    stopList.push('Ketvirtadienis');
} else if (diena ===5) {
    stopList.push('Penktadienis');
} else if (diena === 6) {
    stopList.push('Sestadienis');
} else if (diena === 7) {
    stopList.push('Sekmadienis');
} else {
    stopList.push('ERROR, ivesk teisingai duomenis')
}  

const day = 8;

switch (day) {
    case 1:
        stopList.push('Pirm');
        break;
    case 2:
        stopList.push('Antr');
        break;     
    case 3:
        stopList.push('Trec');
        break;  
    case 4:
        stopList.push('Ketvr');
        break;  
    case 5:
        stopList.push('Penkt');
        break; 
    case 6:
        stopList.push('Sest');
        break; 
    case 7:
        stopList.push('Sekm');
        break;
    default:
        stopList.push('ERROR: switch');  
        break;
}
// 6g
// autobusas -> marsrutas -> a->b; b->a.
const stop = 'Rudens2';
const stopList = [];
switch (stop) {
    case 'N. Vilnia1':
        stopList.push('N. Vilnia'); 
    case 'Tremtiniu1':
        stopList.push('Tremtiniu'); 
    case 'Rudens1':
        stopList.push('Rudens');
    case 'K. Mindaugo':
        stopList.push('K. Mindaugo');
    case 'Z. Tiltas':
        stopList.push('Z. Tiltas');
        break;
    case 'Lvovo':
        stopList.push('Lvovo'); 
    case 'Vasaros':
        stopList.push('Vasaros');
    case 'Rudens2':
        stopList.push('Rudens');
    case 'Tremtiniu2':
        stopList.push('Tremtiniu');
    case 'N. Vilnios2':
        stopList.push('N. Vilnios');
}
console.log(stopList); // kazkur klaidele, neisispasudina