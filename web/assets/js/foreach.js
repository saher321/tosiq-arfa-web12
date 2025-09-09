// variable declare
// variable initialize
// condition
// increament

// 2 * 1 = 2
// array
let fruits = ["Apple", "Guawa", "Grapes", "Orange"];

// array of object
let fruitslList = [
    {id: 1, name: "Apple", quantity: "2KG"}, // 0
    {id: 2, name: "Guawa", quantity: "3.5KG"}, // 1
    {id: 3, name: "Grapes", quantity: "0.5KG"}, // 2
    {id: 4, name: "Orange", quantity: "1 DOZEN"}, // 3
];

// console.log(fruits[0]);
let list = document.getElementById("list");
    
fruitslList.forEach( (element, i) => {
    list.innerHTML += `<li> ${element.name}, ${element.quantity}  </li>`
});
