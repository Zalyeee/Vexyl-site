// ===== MENU LATERAL =====
function toggleMenu() {
  const menu = document.getElementById("menu")
  if (!menu) return

  menu.classList.toggle("open")
}

// ===== PREVENIR ERRO AO RECARREGAR =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script carregado com sucesso")
})