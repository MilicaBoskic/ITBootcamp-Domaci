// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)
{

function maks (a, b, c){
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}
console.log(maks(10, 25, 50));

}


// Написати функцију која израчунава цену пице по квадратном центиметру 
// (параметри функције су полупречник у цм, и цена пице)
{

function cenaPoCm (r, price) {
    let pov = Math.pow(r, 2) * Math.PI;
    return price / pov;
}
console.log(cenaPoCm(10, 300));

}
