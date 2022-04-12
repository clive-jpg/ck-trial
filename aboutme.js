alert("Hi, this's Clive");

let h1 = document.getElementsByClassName("heading")[0];

console.log(h1);

h1.style.fontSize = "100px";


let name = prompt("What's your name");
h1.innerHTML = "Hello `$(name)`";
