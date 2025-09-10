const cities = [
    {id: 1, country_id: 2, name: "Mexico"},
    {id: 2, country_id: 2, name: "LA"},
    {id: 3, country_id: 1, name: "Lahore"},
    {id: 4, country_id: 1, name: "Faisalabad"},
    {id: 5, country_id: 1, name: "Karachi"},
    {id: 6, country_id: 3, name: "Riyad"},
    {id: 7, country_id: 3, name: "Makka"}
];
function showSelect(){
    let countryId = document.getElementById("country").value;
    let cityList = document.getElementById("city");

    cityList.innerHTML = "";
    
    cities.forEach((city)=>{
        if (countryId == city.country_id) {
            cityList.innerHTML +=
            `<option> ${city.name} </option>` 
        }
    })
}