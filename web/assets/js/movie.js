const categories = [
    {id: 1, name: "Horror"},
    {id: 2, name: "Drama / Season"},
    {id: 3, name: "Funny"},
];
const movies = [
    {id: 1, cat_id: 1, name: "Conjuring 1"},
    {id: 2, cat_id: 1, name: "Conjuring 2"},
    {id: 3, cat_id: 1, name: "Conjuring 3"},
    {id: 3, cat_id: 3, name: "Mr. Bean"},
    {id: 3, cat_id: 3, name: "Punjabi movie 1"},
    {id: 3, cat_id: 2, name: "Stranger thing"},
]
let i;
let j;
let output = document.getElementById("output");
 for(i = 0; i < categories.length; i++){ // outer loop
    for(j = 0; j < movies.length; j++){ // inner loop
        if (categories[i].id == movies[j].cat_id) {
            output.innerHTML +=
            `${categories[i].name} - ${movies[j].name}
             <br>
            ` 
        }
    }    
 }