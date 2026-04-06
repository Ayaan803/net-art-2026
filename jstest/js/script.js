let button = document.getElementById("btn");
let title = document.getElementById("title");

function changeText() {
    title.innerHTML = "The button was clicked!";
    title.classList.add("red");
}

button.addEventListener("click", changeText);