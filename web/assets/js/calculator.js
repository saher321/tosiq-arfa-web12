let displayValue = document.getElementById("display");

// add value into display
function addValueToDisplay(val){
    displayValue.value += val;
}

// calculate value
function calculate(){
    try {
        displayValue.value = eval(displayValue.value);
    } catch {
        displayValue.value = "Error in calculation";
    }
}

// clear screen
function clearDisplay(){
    displayValue.value = "";
}