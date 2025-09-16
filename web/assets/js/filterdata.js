$(document).ready(function (){

    $("#myInput").on("input", function (){
        // console.log($(this).val());
        let value = $(this).val();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().indexOf(value) > -1)
        })
    })


})