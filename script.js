document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("menu-btn")
  const menu = document.getElementById("menu")

  btn.addEventListener("click", () => {
    menu.classList.toggle("open")
  })

  window.assinar = (plano) => {
    alert("Você escolheu o plano " + plano)
  }

  // Partículas simples
  const canvas = document.getElementById("particles")
  const ctx = canvas.getContext("2d")

  canvas.width = innerWidth
  canvas.height = innerHeight

  let particles = Array.from({length: 60}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 0.5 + 0.2
  }))

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "white"

    particles.forEach(p => {
      p.y += p.v
      if (p.y > canvas.height) p.y = 0
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }

  animate()
})