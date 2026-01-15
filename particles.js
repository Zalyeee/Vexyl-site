const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")
let w, h, stars = []

function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
}
window.onresize = resize
resize()

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*2
  })
}

function draw() {
  ctx.clearRect(0,0,w,h)
  ctx.fillStyle = "white"
  stars.forEach(s=>{
    ctx.beginPath()
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
    ctx.fill()
    s.y += .2
    if (s.y > h) s.y = 0
  })
  requestAnimationFrame(draw)
}
draw()