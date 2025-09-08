function getDay(){
    let no = document.getElementById("no").value;
    let output = document.getElementById("output");

    if (no == 1) {
        output.innerText = "Monday";
    } else if (no == 2) {
        output.innerText = "Tuesday";
    } else if (no == 3) {
        output.innerText = "Wednesday";
    } else if (no == 4) {
        output.innerText = "Thursday";
    } else if (no == 5) {
        output.innerText = "Friday";
    } else if (no == 6) {
        output.innerText = "Saturday";
    } else if (no == 7) {
        output.innerText = "Sunday";
    } else {
        output.innerText = "Invalid number!";
    }
}