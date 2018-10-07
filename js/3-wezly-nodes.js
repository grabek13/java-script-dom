//let pierwszyDiv = document.getElementById("parFirst").parentNode;

//let pierwszyDiv = document.getElementById("parFirst").parentElement;
//console.log(pierwszyDiv);

//let header = document.getElementsByTagName("header")[0].children;

//let header = document.getElementsByTagName("header")[0].childNodes;


let header = document.getElementsByTagName("header")[0].firstElementChild;

let linki = document.querySelectorAll("#sectionFirst .link")[1].previousElementSibling;

console.log(linki);