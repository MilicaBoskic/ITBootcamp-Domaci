// selektovanje 'HEADER'

const sum = document.querySelector('#sum');
const incomeList = document.querySelector('#income-list');
const expenseList = document.querySelector('#expense-list');
const percent = document.querySelector('#percent');


// selektovanje 'SECTION ONE'

const select = document.querySelector('#select');
const descInput = document.querySelector('#desc-input');
const moneyInput = document.querySelector('#money-input');
const formSendInf = document.querySelector('#form');
// const addBtn = document.querySelector('#add-btn');


// selektovanje 'SECTION TWO'

const incomeOutput = document.querySelector('#income-container');
const expensesOutput = document.querySelector('#expenses-container');


//-----------------------------------------------------------------------------------------------------------//

let lists = [];
let arrIncome = [];
let arrExpenses = [];

let counter = 1;
let sumIncome = 0;
let sumExpenses = 0;

// trenutna vrednost polja 'descInput', 'moneyInput' i 'select'

let currDesc = '';
let currMoney = '';
let currSelected = '';


descInput.addEventListener('input', (e) => {
    currDesc = e.target.value
    //console.log(currDesc);
});

moneyInput.addEventListener('input', (e) => {
    currMoney = e.target.value
    //console.log(currMoney);
});

select.addEventListener('change', (e) => {
    currSelected = e.target.value;
})


//-----------------------------------------------------------------------------------------------------------//


// slanje podataka preko forme

formSendInf.addEventListener('submit', (e) => {
    e.preventDefault();

    if (currDesc.trim() == '') {
        alert('Nije moguće uneti prazno polje!')
        descInput.value = '';
        return;
    }
    if (currMoney <= 0 || isNaN(currMoney)) {
        alert('Nije moguće uneti 0, negativan broj ili tekst!')
        moneyInput.value = '';
        return;
    }

    // dodavanje u niz

    let list = {
        id: counter,
        desc: currDesc,
        money: currMoney,
        select: currSelected
    }


    counter++;
    lists.push(list);
    console.log(list);

    // dodavanje liste na stranicu

    addHTML(list);
    descInput.value = '';
    moneyInput.value = '';
    currSelected.value = '';


});

//-----------------------------------------------------------------------------------------------------------//


// kreiranje HTML elemenata na stranici

const addHTML = (list) => {

    let container = document.createElement('div');
    container.className = 'container';

    let listDescription = document.createElement('li');
    listDescription.className = 'list-description';

    if (select.value == 'Prihod') {
        listDescription.innerText = `${list.desc} + ${list.money}`;

        let x = parseInt(list.money);
        sumIncome += x; 
        // sumIncome.value = '';

        incomeOutput.appendChild(container);
        incomeList.innerHTML = sumIncome;
        incomeList.value = '';


        // listDescription.innerText = list.money;
        // listDescription.style.display = 'inline-block';

    } else {
        let percent = Math.round((list.money / sumIncome) * 100)

        listDescription.innerText = `${list.desc} - ${list.money} (${percent}%)`;

        let y = parseInt(list.money);
        sumExpenses += y;         
        // sumExpenses.value = '';

        expensesOutput.appendChild(container);
        expenseList.innerHTML = sumExpenses;
        expenseList.value = '';

        // listDescription.innerText = list.money;
        // listDescription.style.display = 'inline-block';
    }

    let listControl = document.createElement('div');
    listControl.className = 'list-control';

    let btnDelete = document.createElement('button');
    // btnDelete.className = 'btn-delete';
    btnDelete.className = 'btn btn-outline-danger';

    btnDelete.style.width = '25px';
    btnDelete.style.height = '25px';
    btnDelete.style.borderRadius = '60%';
    btnDelete.style.float = 'right';
    btnDelete.style.marginTop = '-28px';


    // btnDelete.innerText = 'x';
    btnDelete.addEventListener('click', (e) => {
        console.log(e);
        container.remove();
    });


    // sjedinjavanje elemenata

    container.appendChild(listDescription);
    container.appendChild(listControl);
    listControl.appendChild(btnDelete);

    sum.innerHTML = '';
    sum.innerHTML = parseInt(sumIncome-sumExpenses);
}