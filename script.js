import { auth } from "./firebase.js"

const content = document.getElementById("content")

window.toggleMenu = () =>
  document.getElementById("menu").classList.toggle("open")

window.navigate = page => {
  toggleMenu()
  if (page === "home") {
    const g = localStorage.getItem("gender") || "*"
    const word = g === "m" ? "bem-vindo" : g === "f" ? "bem-vinda" : "bem vind*"

    content.innerHTML = `
      <h1>Olá! Seja ${word} ao site do Vexyl's place!</h1>
      <p>Deslize para baixo para explorar ✨</p>
    `
  }

  if (page === "stories") {
    content.innerHTML = `
      <h2>🗞 Histórias & Fofocas</h2>
      <p>Aqui você poderá publicar histórias, análises ou textos.</p>
    `
  }

  if (page === "subs") {
    content.innerHTML = `<h2>Assinaturas</h2><p>Em breve…</p>`
  }

  if (page === "links") {
    content.innerHTML = `
      <h2>Links</h2>
      <a href="#">Canal</a><br>
      <a href="#">Grupo</a><br>
      <a href="#">Instagram</a>
    `
  }

  if (page === "config") {
    content.innerHTML = `
      <h2>Configurações</h2>
      <button onclick="toggleTheme()">Alternar tema</button>
    `
  }
}

window.toggleTheme = () => {
  document.body.classList.toggle("dark")
}

window.setGender = g => {
  localStorage.setItem("gender", g)
  document.getElementById("genderPopup").style.display = "none"
  navigate("home")
}

if (!localStorage.getItem("gender"))
  document.getElementById("genderPopup").style.display = "flex"

navigate("home")