function toggleMenu() {
  const menu = document.getElementById("menu")
  if (!menu) return
  menu.classList.toggle("open")
}

// Fecha menu clicando fora
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu")
  const btn = document.getElementById("menu-btn")
  if (!menu || !btn) return
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("open")
  }
})

// Assinaturas (WhatsApp)
function assinar(plano) {
  const numero = "5532998258844"
  const msg = encodeURIComponent(
    `Olá! Quero assinar o plano ${plano}.\n\nMeu canal/grupo:\nLink:`
  )
  window.open(`https://wa.me/${numero}?text=${msg}`, "_blank")
}