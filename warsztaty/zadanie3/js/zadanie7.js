class Ksiazka {
    constructor(title, autor, readed) {
        this.tytul = title;
        this.autor = autor;
        this.przeczytana = readed;
    }
    opiszKsiazke() {

        let description;

        if (this.przeczytana) {
            return description = `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`;
        } else {
            return description = `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.`;
        }
    }

}

let book1 = new Ksiazka("Harry Potter", "J.K. Rowling", false);
let book2 = new Ksiazka("Chłopi", "W.S. Reymont", false);
let book3 = new Ksiazka("Ferdydurke", "W. Gombrowicz", true);

let books = [book1, book2, book3];

function iloscPrzeczytanych(ksiazki) {
    let numberOfReadedBooks = 0;
    ksiazki.forEach(function (elem, index) {
        console.log(elem.opiszKsiazke());
        if (elem.przeczytana) {
            numberOfReadedBooks++;
        }

    });
    return numberOfReadedBooks;
}

console.log(`Liczba przeczytanych ksiazek: ${iloscPrzeczytanych(books)}`);
