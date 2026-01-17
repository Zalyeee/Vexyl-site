document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("side-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});