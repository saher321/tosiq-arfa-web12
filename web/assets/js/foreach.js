// variable declare
// variable initialize
// condition
// increament

// 2 * 1 = 2
// array
let fruits = ["Apple", "Guawa", "Grapes", "Orange"];

// array of object
let fruitslList = [
    {id: 1, name: "Apple", quantity: "2KG"},
    {id: 2, name: "Guawa", quantity: "3.5KG"},
    {id: 3, name: "Grapes", quantity: "0.5KG"},
    {id: 4, name: "Orange", quantity: "1 DOZEN"},
];

// console.log(fruits[0]);
let list = document.getElementById("list");
    
fruitslList.forEach( (element, i) => {
    list.innerHTML += `<li> ${element.name}, ${element.quantity}  </li>`
})
