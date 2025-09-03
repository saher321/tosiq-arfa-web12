function insertItem(){
    var newItem = document.getElementById("new-item").value;
    var output = document.getElementById("result");

    output.innerHTML += "<option>" + newItem + "</option>";
}

function showSelected(){
    var val = document.getElementById("result").value;
    var output = document.getElementById("output");

    output.innerText = val;

}