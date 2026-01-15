const container = document.querySelector(".particles")

const total = window.innerWidth < 600 ? 80 : 150

for (let i = 0; i < total; i++) {
  const star = document.createElement("div")
  star.className = "particle"

  const size = Math.random() * 2.5 + 1.5
  star.style.width = size + "px"
  star.style.height = size + "px"

  star.style.left = Math.random() * 100 + "vw"
  star.style.top = Math.random() * 100 + "vh"

  star.style.opacity = Math.random() * 0.8 + 0.2

  star.style.animationDuration =
    (Math.random() * 20 + 10) + "s"

  container.appendChild(star)
}
