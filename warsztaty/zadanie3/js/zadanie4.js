let ar = [0, 1, 2, 3, 4, 5];

function sumOfTheSqueres(tab) {
    let sum = 0;
    tab.forEach(function (elem, index) {
        sum = sum + Math.pow(elem, 2);
    });
    console.log(tab);
    
    return sum;
}

console.log("Suma kwadratów elementów tablicy: " + sumOfTheSqueres(ar));
