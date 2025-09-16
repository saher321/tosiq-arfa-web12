$(document).ready(function () {
  // console.log("Hello, world");

  $("#btn").on("click", function () {
    // alert("Function is called using jquery")
    // $("#text").fadeToggle();
    // $("#text").fadeToggle(3000); // 3s
    $("#text").css({
      color: "red",
      "background-color": "yellow",
    });
  });

  // convert from F to C
  $("#convert").on("click", function () {
    let fValue = $("#fr").val();
    let c = ((Number(fValue) - 32) * 5) / 9;
    // console.log(c.toFixed(2));
    $("#cl").val(c.toFixed(2));
  });
});
