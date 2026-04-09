const button = document.getElementById("transform-btn");
const body = document.body;
const title = document.getElementById("main-title");
const tagline = document.getElementById("tagline");
const description = document.getElementById("main-description");
const cards = document.querySelectorAll(".card");

let transformed = false;

function createSpark(x, y) {
  const spark = document.createElement("div");
  spark.classList.add("spark");

  const colors = ["#ffffff", "#ffe066", "#ff9f1c", "#ff4d6d", "#c77dff"];
  spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  spark.style.left = x + "px";
  spark.style.top = y + "px";

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 1200);
}

function burstSparks() {
  for (let i = 0; i < 18; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createSpark(x, y);
  }
}

function transformPage() {
  transformed = !transformed;

  if (transformed) {
    body.classList.remove("business-mode");
    body.classList.add("after-hours");

    title.textContent = "MIDNIGHT MAYHEM";
    tagline.textContent = "Loud. Unfiltered. Unpredictable.";
    description.textContent =
      "This page has dropped the polished act. It now feels energetic, messy, playful, and alive.";

    cards[0].querySelector("h2").textContent = "Energy";
    cards[0].querySelector("p").textContent = "The calm system becomes expressive and animated.";

    cards[1].querySelector("h2").textContent = "Chaos";
    cards[1].querySelector("p").textContent = "Bright colors, motion, and glowing shapes replace restraint.";

    cards[2].querySelector("h2").textContent = "Personality";
    cards[2].querySelector("p").textContent = "The site changes identity from formal business to nightlife poster.";

    button.textContent = "Switch Back";

    burstSparks();
  } else {
    body.classList.remove("after-hours");
    body.classList.add("business-mode");

    title.textContent = "Vertex Consulting";
    tagline.textContent = "Professional. Polished. Predictable.";
    description.textContent =
      "We provide structured solutions, reliable systems, and a calm digital experience.";

    cards[0].querySelector("h2").textContent = "Efficiency";
    cards[0].querySelector("p").textContent = "Clear goals. Neat layout. Controlled motion.";

    cards[1].querySelector("h2").textContent = "Trust";
    cards[1].querySelector("p").textContent = "Neutral colors and stable composition create a serious tone.";

    cards[2].querySelector("h2").textContent = "Order";
    cards[2].querySelector("p").textContent = "This mode feels corporate, formal, and restrained.";

    button.textContent = "Switch Identity";
  }
}

button.addEventListener("click", transformPage);

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault();
    transformPage();
  }
});

document.addEventListener("mousemove", function(event) {
  if (transformed && Math.random() < 0.08) {
    createSpark(event.clientX, event.clientY);
  }
});