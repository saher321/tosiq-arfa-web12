varletconst();
function varletconst(){
    const myname = "Tosiq";
    // myname = "Asad";

    console.log(myname);
}
// 1- 200, 2- 300, 3- above
function calcUnits(){
    
    var units   = document.getElementById("units").value;
    var output  = document.getElementById("output");

    var unitPrice   = 11;
    var tax         = 467;
    var fuelTax     = 356;

    if (units <= 200) {
        output.innerText = units * unitPrice + tax + fuelTax;
    } else if (units > 200 && units <= 300){ // range defined
        unitPrice = 44;
        output.innerText = units * unitPrice + tax + fuelTax;
    } else {
        unitPrice = 67;
        output.innerText = units * unitPrice + tax + fuelTax;     
    }
}