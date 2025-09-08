
function printValue(){
    let a = 10;
    let b = 6;

    let operator = document.getElementById("operator").value;
    let output = document.getElementById("output");
    // console.log(operator);

    switch(operator){
        case "+":
            output.innerText = a+b;
            break;
        case "-":
            output.innerText = a-b;
            break;
        case "/":
            output.innerText = a/b;
            break;
        case "*":
            output.innerText = a*b;
            break;
        case "%":
            output.innerText = a%b;
            break;
        default: 
            output.innerText = "Please choose operator";

    }
}