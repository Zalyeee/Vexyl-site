// MENU
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.onclick = () => {
  sideMenu.classList.toggle("open");
};

// FECHA MENU AO CLICAR FORA
document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && e.target !== menuBtn) {
    sideMenu.classList.remove("open");
  }
});

// FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from
"https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsHXQr5k3HviBVEFPz918g_zcjUZdFpJY",
  authDomain: "cemiteryal-site.firebaseapp.com",
  projectId: "cemiteryal-site",
  storageBucket: "cemiteryal-site.firebasestorage.app",
  messagingSenderId: "935123054222",
  appId: "1:935123054222:web:f720f6ae514631dd94a3df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutBtn = document.getElementById("logoutBtn");
const configLink = document.getElementById("configLink");

onAuthStateChanged(auth, user => {
  if (user) {
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutBtn.style.display = "block";
    configLink.style.display = "block";
  } else {
    loginLink.style.display = "block";
    registerLink.style.display = "block";
    logoutBtn.style.display = "none";
    configLink.style.display = "none";
  }
});

logoutBtn.onclick = () => {
  signOut(auth);
};