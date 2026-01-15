const container = document.querySelector(".particles")

for (let i = 0; i < 150; i++) {
  const star = document.createElement("div")
  star.className = "particle"

  const size = Math.random() * 2 + 1
  star.style.width = size + "px"
  star.style.height = size + "px"

  star.style.left = Math.random() * 100 + "vw"
  star.style.top = Math.random() * 100 + "vh"

  star.style.animationDuration =
    (Math.random() * 20 + 5) + "s"

  container.appendChild(star)
}
