/* MENU */
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () => {
  sideMenu.classList.toggle("open");
};

/* LOGIN FAKE */
const isLogged = localStorage.getItem("logado") === "true";
const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");

if (isLogged) {
  document.body.classList.add("logado");
  if (loginLink) loginLink.style.display = "none";
  if (logoutLink) logoutLink.style.display = "block";
}

if (logoutLink) {
  logoutLink.onclick = () => {
    localStorage.removeItem("logado");
    location.reload();
  };
}

/* PARTÍCULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();