/*
As noriu, pamatyti visas laiko/laikrodzio kombinacijas
valandos tikslumu
Intervalas nuo 1 iki 12. Kai matome nuo iki mintyse ciklas:-)
Pateikimo formatas: 1:00, 2:00
for (let val =1; val <= 4; val ++) {
console.log('-------');
let min = 0;
console.log(val + ':' + min);
min += 15;
console.log(val + ':' + min);
min += 15;
console.log(val + ':' + min);
min += 15;
console.log(val + ':' + min);
min += 15;
}
*/
for (let val = 15; val <= 15; val ++) {  
    for (let min = 0; min < ; min++) {
        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }
    }
}