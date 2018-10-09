function fibonacci(n) {
    let fib, fib1, fib2;
    if (n == 0) {
        fib = 0;
    }
    else if (n > 0 && n % 1 == 0) {
        for (let i = 1; i <= n; i++) {
            if (i < 3) {
                fib = 1;
                fib1 = 1;
                fib2 = 1;
                console.log("Wyraz F" + i + " ciągu to: " + fib);
            }
            else {
            fib = fib1 + fib2;
            console.log("Wyraz F" + i + " ciągu to: " + fib);
            
            }
            fib2 = fib1;
            fib1 = fib;
        }
    }
    else (fib = "Podaj liczbe naturalna!");
    return fib;

}

let result = fibonacci(13);

console.log("Szukana wartość wyrazu ciągu Fibbonacciego to: " + result);
