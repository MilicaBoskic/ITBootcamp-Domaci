// zadatak5.js
//  1. Сачувати у променљиве цену и пречник пице
//  2. Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
//  3. Исписати тај резултат у конзолу

{

    var cenaPice = 750;
    var precnikPice = 50;
    var poluprecnikPice = precnikPice / 2;

    var povrsinaPice = Math.pow(poluprecnikPice, 2) * Math.PI;

    console.log(povrsinaPice.toFixed(2));

    var cenaPoCm = povrsinaPice / cenaPice;

    console.log(cenaPoCm.toFixed(2));

}

// zadatak6.js
//  1. За првих 100 бројева исписати:
//     * FizzBuzz ако је број дељив и са 3 и са 5
//     * Fizz ако је број дељив само са 3
//     * Buzz ако је број дељив само са 5
//     * Број ако није дељив ни са 3 ни са 5

//         ```(1,2,Fizz,4,Buzz,...)```

{

    let broj = '';
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            broj += 'FizzBuzz, ';
        } else if (i % 3 == 0) {
            broj += 'Fizz, ';
        } else if (i % 5 == 0) {
            broj += 'Buzz, ';
        } else {
            broj += i + ', ';
        }
    } console.log(broj);

}

// zadatak7.js
//     1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//     #
//     ##
//     ###
//     ####
//     #####
//     ```



{
    let n = 5;
    let row = '';
    for (i = 1; i <= n; i++) {
        row += '#';
        console.log(row);
    }
}



// zadatak8.js
//  1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//         #
//        ## 
//       ###
//      ####   
//     #####
//     ```

{
    let n = 5;
    let row = '';
    for (i = 0; i <= n; i++) {
        for (j = 0; j < n; j++) {
            if (i + j >= n) {
                row = row.concat('#');
            } else {
                row = row.concat(' ');
            }
        }
        row = row.concat('\n')
    }
    console.log(row);

}




// zadatak9.js
//     1. Исписати Марио пирамиду одређене висине:

//     ```
//     За n = 5

//         # #
//        ## ##
//       ### ###
//      #### ####  
//     ##### #####

{

    let n = 5;

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= 11; j++) {
            if (5 - i >= j || 6 == j || 11 - 4 + i <= j) {
                row += ' ';
            } else {
                row += '#';
            }
        }
        console.log(row);
    }
    
}