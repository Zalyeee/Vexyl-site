// ==========================
// ☰ MENU LATERAL
// ==========================
function toggleMenu() {
  const menu = document.getElementById("menu")

  if (!menu) return

  if (menu.classList.contains("open")) {
    menu.classList.remove("open")
  } else {
    menu.classList.add("open")
  }
}

// Fecha o menu ao clicar fora
document.addEventListener("click", (e) => {
  const menu = document.getElementById("menu")
  const button = document.getElementById("menu-btn")

  if (!menu || !button) return

  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.remove("open")
  }
})

// ==========================
// 📜 SCROLL SUAVE
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))
    if (!target) return

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })

    // Fecha menu no mobile
    const menu = document.getElementById("menu")
    if (menu) menu.classList.remove("open")
  })
})

// ==========================
// 💬 ASSINATURAS (WHATSAPP)
// ==========================
function assinar(plano) {
  const numero = "5532998258844"

  const mensagem = encodeURIComponent(
    `Olá! Quero assinar o plano ${plano}.\n\n` +
    `Meu canal/grupo é:\n` +
    `Link:\n`
  )

  const url = `https://wa.me/${numero}?text=${mensagem}`
  window.open(url, "_blank")
}

// ==========================
// ✨ PEQUENA ANIMAÇÃO AO SCROLL
// ==========================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card)
})