// zadatak1.js:
// 1. За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)

let a = 25;
let b = 5;

let zbir = a + b;
let razlika = a - b;
let proizvod = a * b;
let količnik = a / b;
let ostatak = a % b;
let stepen = Math.pow(a, b);

console.log(zbir, razlika, proizvod, količnik, ostatak, stepen);


// zadatak2.js  - Продавница
//  1. Направити променљиву која представља цену производа коју купац жели да купи
//  2. Направити променљиву која представља количину новца коју купац има
//  3. Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//  4. Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

var cena = 950;
var novčanik = 1000;

if (novčanik < cena) {
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje je: ' + novčanik);
} else if (novčanik > cena) {
    console.log('Uspešno ste kupili proizvod');
    console.log('Trenutno stanje je: ' + (novčanik - cena));
};


// zadatak3.js
//  1. Направити променљиву која има вредност неког броја (цео број)
//  2. Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//  3. Ако није, Број _ није дељив са 3


let x = 256;
if (x / 3 == 0) {
    console.log('Broj ' + x + ' je deljiv sa 3');
} else {
    console.log('Broj ' + x + ' nije deljiv sa 3');
};



// zadatak4.js
//  1. Исписати првих 1000 бројева дељивих са 5

for (i = 0; i < 1000; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
};
