import { auth } from "./firebase.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.onclick = () => {
  sideMenu.classList.toggle("show");
};

const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, user => {
  if (user) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginLink.style.display = "block";
    registerLink.style.display = "block";
    logoutBtn.style.display = "none";
  }
});