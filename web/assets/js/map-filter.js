let arr1 = ["Apple", "Mango", "Grapes", "Orange"];
let arr2 = ["Sports", "Cricket", "Hockey", "Football"];

// let result = arr1.concat(arr2);
// let result = [...arr1, ...arr2];
// console.log(result);

// let arr3 = [2,3,4,5,6,7,8,9];
let list = document.getElementById("list");
let result = arr1.map((element) => {
    let data = `<li> ${element} </li>`
    return list.innerHTML += data;
});

// console.log(result);

const users = [
    {id: 1, name: "Samith", role: "Admin"},
    {id: 2, name: "John", role: "Vendor"},
    {id: 3, name: "Alice", role: "User"},
    {id: 4, name: "Jane", role: "Vendor"},
    {id: 5, name: "Martha", role: "User"},
    {id: 6, name: "Sam", role: "Vendor"},
];


let userRole = "Vendor";

function check(user){
    if (user.role == userRole) {
        return user;
    }
}
let output = users.filter(check);
console.log(output);