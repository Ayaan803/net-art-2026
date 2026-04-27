document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("revealBtn");
    const wordArea = document.getElementById("floatingWords");
  
    const words = ["HIDDEN", "CHAOS", "TRUTH", "IDENTITY"];
  
    // BUTTON CLICK
    button.addEventListener("click", function () {
      document.body.classList.toggle("chaos");
      spawnWords();
    });
  
    // SCROLL
    window.addEventListener("scroll", function () {
      document.body.classList.add("chaos");
      spawnWords();
    });
  
    // KEY PRESS
    document.addEventListener("keydown", function () {
      document.body.classList.add("chaos");
      spawnWords();
    });
  
    // HOVER CARD
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", function () {
        document.body.classList.add("chaos");
        spawnWords();
      });
    });
  
    function spawnWords() {
      for (let i = 0; i < 5; i++) {
        let word = document.createElement("div");
        word.className = "word";
        word.innerText = words[Math.floor(Math.random() * words.length)];
  
        word.style.left = Math.random() * window.innerWidth + "px";
        word.style.top = Math.random() * window.innerHeight + "px";
  
        document.body.appendChild(word);
  
        setTimeout(() => word.remove(), 4000);
      }
    }
  
  });