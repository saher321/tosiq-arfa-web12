function getDay(){
    let no = document.getElementById("no").value;
    let output = document.getElementById("output");

    switch (no) {
        case "1":
            break;
        case "2":
            output.innerText = "Tuesday";
            break;
        case "3":
            output.innerText = "Wednesday";
            break;
        case "4":
            output.innerText = "Thursday";
            break;
        case "5":
            output.innerText = "Friday";
            break;
        case "6":
            output.innerText = "Saturday";
            break;
        case "7":
            output.innerText = "Sunday";
            break;
        default:
            output.innerText = "Invalid number!";
    }
}