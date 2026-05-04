document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("revealBtn");
  const cards = document.querySelectorAll(".card");

  const words = [
    "HIDDEN",
    "CHAOS",
    "TRUTH",
    "IDENTITY",
    "ESCAPE",
    "SURFACE",
    "NOISE",
    "REVEAL"
  ];

  button.addEventListener("click", function () {
    document.body.classList.toggle("chaos");
    spawnWords(10);
  });

  window.addEventListener("scroll", function () {
    document.body.classList.add("chaos");
    spawnWords(3);
  });

  document.addEventListener("keydown", function () {
    document.body.classList.add("chaos");
    spawnWords(8);
  });

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      document.body.classList.add("chaos");
      spawnWords(5);
    });
  });

  function spawnWords(amount) {
    for (let i = 0; i < amount; i++) {
      const word = document.createElement("div");
      word.className = "word";
      word.textContent = words[Math.floor(Math.random() * words.length)];

      word.style.left = Math.random() * window.innerWidth + "px";
      word.style.top = Math.random() * window.innerHeight + "px";
      word.style.fontSize = Math.random() * 26 + 18 + "px";

      document.body.appendChild(word);

      setTimeout(function () {
        word.remove();
      }, 4000);
    }
  }
});