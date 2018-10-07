let inputs = document.getElementsByTagName("input");
console.log(inputs);

function wyswietlwkonsoli() {
    console.log(inputs[0].i);
    console.log(inputs[1]);
}

function action(event) {
    event.preventDefault();
    wyswietlwkonsoli();
    
    
}

inputs[2].addEventListener("click", action);