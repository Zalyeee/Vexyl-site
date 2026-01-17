// Menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// WhatsApp bot
function enviarBot(plano) {
  const numero = "5532998258844";
  const texto = encodeURIComponent(
    `Olá! Quero saber mais sobre o ${plano}.`
  );
  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}

// Partículas simples
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h;
let particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function draw() {
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();