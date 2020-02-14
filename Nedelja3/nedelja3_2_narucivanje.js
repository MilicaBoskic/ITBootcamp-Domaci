// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица,
//  [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах 
//  избацује одговарајућу поруку за грешку


/*Start count*/

let parCount = document.querySelector('#count');
let count = 0;

let Order = '.order';
let btnOrder = document.querySelectorAll(Order);
console.log(btnOrder);

btnOrder.forEach(button => {
    button.addEventListener('click', function () {
        buttonOrder(button);
    });
});

function buttonOrder(el) {
    console.log(el);
    count++;
    parCount.innerHTML = count;
}

/*End count*/


/*Start date and time*/

let dateTimeNow = new Date();

let seconds = dateTimeNow.getSeconds();
let minutes = dateTimeNow.getMinutes();
let hours = dateTimeNow.getHours(); 
let timeStampString = `${hours}:${minutes}:${seconds}`;

let dateDay = dateTimeNow.getDate(); 
let month = dateTimeNow.getMonth()+1; 
let year = dateTimeNow.getFullYear();
let dateStampString = `${dateDay}-${month}-${year}`; 

/*End date and time*/


/*Start order-now button*/

let OrderNow = '.order-now';
let btnOrderNow = document.querySelectorAll(OrderNow);
console.log(btnOrderNow);


btnOrderNow.forEach(button => {
    button.addEventListener('click', function () {
        message(button)
    });
});

/*End order-now button*/


/*Start message*/

function message(msg) {
    console.log(msg);
    
    if (count > 0) {
    document.getElementById("count").innerHTML = `You ordered  ${count}  pizzas <br> Time   ${timeStampString}`;
    } else {
        document.getElementById("count").innerHTML = "0";
    }
    return count = 0;
}

/*End message*/
