// variable declare
// variable initialize
// condition
// increament

// 2 * 1 = 2
let fruits = ["Apple", "Guawa", "Grapes", "Orange"];
// console.log(fruits[0]);
let list = document.getElementById("list");

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    list.innerHTML += "<li>" + fruits[i] + "</li>"
}


// for (let i = 1; i <= 10; i++) {
//     console.log("2" + " x " + i + " = " + (i*2));
// }
// console.log("loop completed")