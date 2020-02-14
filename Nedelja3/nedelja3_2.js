// Написати функцију која исписује све елементе низа који су дељиви са 5

{

    function divisibleByFive(arr) {
        arr.forEach(element => {
            if (element % 5 === 0) {
                console.log(element)
            }
        });
    }
    divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5]);

}


// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате 
// (Рачуна се да је довољно достављати до стоте године)


// function lifeSupply(numPerMonth,age){
//     ...
// }

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880


{

    function lifeSupply(numPerMonth, age) {
        return numPerMonth * 12 * (100 - age);
    }
    lifeSupply(10, 26)
    console.log(lifeSupply(10, 26))

}
