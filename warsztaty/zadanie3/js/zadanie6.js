employees = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
};

employees.pracownicy.forEach(function (elem, index) {
   console.log(index + ". " + elem.firstName + ", " + elem.lastName); 
});