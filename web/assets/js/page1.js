// naming convention
// javascript_language // snack case
// javascriptLanguage // camel
function showResult() {

  var obtainedMark = document.getElementById("number1").value;
  var totalMarks = document.getElementById("number2").value;
  var output  = document.getElementById("output");
  var percent = (parseInt(obtainedMark) / parseInt(totalMarks)) * 100;

  output.innerText = "Percentage: " + percent.toFixed(2);
}

function getPercentageAverage(){
    var totalMarks  = 300;
    var english     = 67;
    var math        = 80;
    var urdu        = 45;

    var sum     = english + math + urdu;
    var avg     = sum / 3;
    var percent = (sum / totalMarks) * 100;
    
    output.innerText = "Percentage: " + percent.toFixed(2) + ", AVG: " + avg.toFixed(2);
}

function convert() {

  var f = document.getElementById("f").value;
  var c = document.getElementById("c");

  //   (F - 32) * 5/9
  var res = (parseFloat(f) - 32) * 5/9;

  c.value = res.toFixed(2);
}