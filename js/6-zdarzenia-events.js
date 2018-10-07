let mojh2 = document.querySelector(" #sectionFirst > h2 ");

function pokazNaClicku() {
    console.log(mojh2.innerHTML);
}

function zmiencolor() {
    mainheader.style.color = "red";
}
mojh2.onclick = pokazNaClicku;

let mainheader = document.querySelector("#main-header");
mainheader.addEventListener("mouseover", zmiencolor);
mainheader.addEventListener("mouseout", function() {
    this.style.color = "green";
});

mainheader.removeEventListener("mouseover", zmiencolor);

//prevent default

let superlink = document.getElementById("super-link");

function zablokuj(event) {
    event.preventDefault();
    console.log("click");
    
}

superlink.onclick = zablokuj;

//stopPropagation()

function clickHeader() {
    console.log("kliknieto w <header>");
    
}

function clickH1(event) {
    event.stopPropagation();
    console.log("kliknieto w <h1>");
}

document.querySelector("header").onclick = clickHeader;
document.querySelector("header h1").onclick = clickH1;