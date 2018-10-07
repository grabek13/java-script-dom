let istniejacyWezel = document.getElementById("parFirst");

let newparagraf = document.createElement("p");

newparagraf.appendChild(document.createTextNode("Tekst z JavaScript'u"));

newparagraf.setAttribute("class", "custom-class");

newparagraf.removeAttribute("class");

istniejacyWezel.appendChild(newparagraf);

//istniejacyWezel.removeChild(newparagraf);

console.log(newparagraf);