const users = [
    {id: 1, firstName: "John", lastName: "Samith", email: "john@gmail.com"},
    {id: 2, firstName: "Sam", lastName: "Jonathan", email: "sam@gmail.com"},
    {id: 3, firstName: "Jane", lastName: "Alexendar", email: "jane@gmail.com"},
    {id: 4, firstName: "Adil", lastName: "Murfy", email: "Adil@gmail.com"},
    {id: 5, firstName: "Usman", lastName: "Asad", email: "usman@gmail.com"}, 
];

$(document).ready(function (){

    showUsers();
    function showUsers(){
        users.forEach((user, i) => {
            let data = `
            <tr> 
                <td> ${i+1} </td> 
                <td> ${user.firstName} </td> 
                <td> ${user.lastName} </td> 
                <td> ${user.email} </td> 
            </tr>
            `;
            $("#myTable").append(data);
        })
    }
    $("#myInput").on("input", function (){
        // console.log($(this).val());
        let value = $(this).val();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().indexOf(value) > -1)
        })
    })
})