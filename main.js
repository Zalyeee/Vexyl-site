document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn")
  const menu = document.getElementById("side-menu")

  if (!btn || !menu) return

  btn.addEventListener("click", () => {
    menu.classList.toggle("open")
  })
})