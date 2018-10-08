function backword(str) {

    let stringlenght = str.length;
    let newstr;

    while (stringlenght > 0) {

        if (newstr == undefined) {

            newstr = str[(stringlenght - 1)];

        } else {

            newstr = newstr + str[(stringlenght - 1)];

        }

        stringlenght--;
    }

    return newstr;
}

let text = backword("Akademia108");

console.log(`Odwrócony string to: ${text}`);
