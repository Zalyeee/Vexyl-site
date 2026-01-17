const canvas = document.createElement("canvas");
document.getElementById("particles").appendChild(canvas);
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
onresize = resize;

const stars = Array.from({length: 100}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
    s.y += 0.3;
    if(s.y>canvas.height) s.y=0;
  });
  requestAnimationFrame(draw);
}
draw();