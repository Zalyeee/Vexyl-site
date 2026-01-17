const menu = document.getElementById("menu");

if (menu) {
  menu.innerHTML = `
    <h2 style="color:red">Vexyl</h2>
    <a href="index.html">🏠 Início</a>
    <a href="assinaturas.html">💳 Assinaturas</a>
    <hr>
    <a href="login.html" id="loginBtn">🔐 Login</a>
    <a href="registro.html" id="registerBtn">📝 Registrar</a>
    <a href="#" id="logoutBtn" style="display:none">🚪 Logout</a>
  `;
}

function toggleMenu() {
  menu.classList.toggle("open");
}