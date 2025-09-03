function insertItem(){
    var newItem = document.getElementById("new-item").value;
    var output = document.getElementById("output");

    output.innerHTML += "<li>" + newItem + "</li>";
}