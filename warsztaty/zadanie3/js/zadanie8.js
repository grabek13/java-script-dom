function BubbleSortImproved(tablica) {
    let pass, i, temp, swapped = true;
    for (pass = tablica.length - 1; pass >= 0 && swapped; pass--) {
        swapped = false;
        for (i = 0; i <= pass - 1; i++) {
            if (tablica[i] > tablica[i + 1]) {
                temp = tablica[i];
                tablica[i] = tablica[i + 1];
                tablica[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return tablica;
}

A = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(A);

B = BubbleSortImproved(A);

console.log(B);
