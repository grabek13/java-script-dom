let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let list = document.createElement("ol");

let cityitems = [],
    citynames = [],
    classAtr = [];



cities.forEach(function (elem, index) {
    cityitems[index] = document.createElement("li");
    citynames[index] = document.createTextNode(elem);
    classAtr[index] = document.createAttribute("class");
    classAtr[index].value = "city";

    document.body.appendChild(list).appendChild(cityitems[index]);
    cityitems[index].appendChild(citynames[index]);
    cityitems[index].setAttributeNode(classAtr[index]);
});
