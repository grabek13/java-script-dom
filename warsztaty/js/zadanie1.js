/*let przycisk = document.getElementsByTagName("button");
console.log(przycisk);
function ustawTlo() {
    let paragrafs = document.getElementsByTagName("p");
    console.log(paragrafs);
    paragrafs[0].style.backgroundColor = "red";
    paragrafs[1].style.backgroundColor = "yellow";
}

przycisk[0].addEventListener("click", ustawTlo);*/

function ustawTlo() { 
    let paragrafs = document.getElementsByTagName("p");
    paragrafs = Array.from(paragrafs);
    
    paragrafs.forEach(function(element,index) {
        if(index % 2 == 0) {
            element.style.backgroundColor = "red";
        } else {
            element.style.backgroundColor = "green";
        }
    });
}

document.querySelector("button").onclick = ustawTlo;