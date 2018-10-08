let ar = [1, 2, 3, 4, 5, 6];

function sum_and_multiply(tab) {
    let sum = 0;
    let multiply = 1;
    tab.forEach(function (elem, index) {
        sum = sum + elem;
        multiply = multiply * elem;
    });
    console.log(sum);
    console.log(multiply);
}

sum_and_multiply(ar);
