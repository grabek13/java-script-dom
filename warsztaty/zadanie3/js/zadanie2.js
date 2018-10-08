function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function sortstring(str) {
    let i, j, v;
    for (i = 1; i <= (str.length - 1); i++) {
//        console.log(str[i - 1]);
        v = str.charAt(i);
//        console.log(v);
        j = i;
//        console.log(str.charAt(j - 1) > v);
        while ((j >= 1) && (str.charAt(j - 1) > v)) {
            str = setCharAt(str, j, str.charAt(j - 1));
            j--;
        }
        
        str = setCharAt(str, j, v);
//        console.log(str);
    }
    return str;
}


tekst = "Akademia108";
console.log(tekst);
tekst = sortstring(tekst);
//tekst = setCharAt(tekst, 2 , "s");
//sortstring(tekst);

console.log(tekst);
