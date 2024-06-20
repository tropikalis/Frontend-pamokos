/*
STRING - tekstas, tekstiniu simboliu grandinele
iniciavimas: ' (vienguba), " (dviguba), ` (backtick)
*/
const name = 'Jonas';
console.log(name);

//Vienguba (') kabute
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

//Dviguba (") kabute
const kabutes2 = 'Dviguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Norris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

// Viena (') ir dviguba (") kabutes.
const kabutes12 = "Vienguba (') ir " + ' dviguba (") kabutes.';
console.log(kabutes12);

// Viena (') ir dviguba (") kabutes. Viduje esancias kabutes reikia escapinti
const kabutes12_1 = "Vienguba (\') ir " + 'dviguba (") kabutes.';
const kabutes12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabutes12_3 = 'Vienguba (\') ir dviguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\') ir dviguba (\") kabutes.";

// escaping
console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
Reikia suformuoti sakinius ir juos isspausdinti. Is tu number.js idejos, 
sumuoti prie kintamuju turini, kur turi buti sumuojamas tais papildomais 
kas yra inesama i saskaita.
*/

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/
console.clear();
// \r - return
// \n - new line
// \t - tab
// \r\n\
const HTML = '\
<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';
console.log(HTML);

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;
const backtick2 = 'Backtikine (`) kabute.';
const backtick3 = "Backtikine (`) kabute.";

const HTML2 = `<header>
<img>
<nav>
    <a></a>
    <a></a>
    <a></a>
</nav>
</header>`;
console.log(HTML2);

console.clear();
const a = 7;
const b = 5;
const c = a + b;

// 7 + 5 = 12
const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);

const ats3 = `${a} + ${b} = ${c}`;
console.log(ats3);

const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 = `Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.`;
console.log(mini1);

const mini2 = `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;
console.log(mini2);

const gg = 'Good game';
const number = 'Number; ' + answer;

console.log(mini1.length);
console.log(mini1[0]);

console.log('' + true);
console.log(true.toString());

