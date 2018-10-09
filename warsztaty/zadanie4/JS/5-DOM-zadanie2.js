//console.log(nodes);

//let nodes = [];
//let index;

function buttonpressed() {
    console.log("Button pressed");
    let node = document.getElementById("items");
    let newtext = node.lastElementChild.innerHTML;
    console.log(newtext);
    let index = newtext.split(" ");

    console.log(index);
   
    
    let newitem = document.createElement("li");
    let text = document.createTextNode(`Item ${parseInt(index[1])+1}`);
    let classAttr = document.createAttribute("class");
   
    classAttr.value = "item";

    node.appendChild(newitem); // dodaj element do elementu <body>
    newitem.appendChild(text); // dodaj tekst do elementu <button>
    newitem.setAttributeNode(classAttr);
    //    return nodes;
}

let button = document.getElementsByTagName("button");

button[0].addEventListener("click", buttonpressed);
