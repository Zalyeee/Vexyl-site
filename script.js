const canvas = document.getElementById("stars")
const ctx = canvas.getContext("2d")

let w, h
let stars = []

function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
}
window.addEventListener("resize", resize)
resize()

function createStars() {
  stars = []
  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.3 + 0.1
    })
  }
}
createStars()

function drawStars() {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = "white"

  stars.forEach(star => {
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
    ctx.fill()

    star.y += star.speed
    if (star.y > h) {
      star.y = 0
      star.x = Math.random() * w
    }
  })

  requestAnimationFrame(drawStars)
}

drawStars()
