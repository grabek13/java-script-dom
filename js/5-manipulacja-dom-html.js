let parSecond = document.querySelectorAll("#parSecond p");

parSecond.forEach(function(el, index) {
    /*el.style.color = "red";
    el.innerHTML = "Nowy tekst";
    el.outerHTML = "<a href='#'> teraz link</a> <br />";
   console.log(el.innerHTML); */
    el.setAttribute("class", "pierwsza-klasa");
});

let allLinks = document.getElementsByClassName("link");

allLinks[1].href = "https://www.google.com";
allLinks[1].classList.add("google-class");

console.log(allLinks);
//console.log(parSecond);