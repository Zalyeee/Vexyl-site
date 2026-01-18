// Menu
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#ff0000" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});