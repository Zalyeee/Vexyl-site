import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

/* 🔥 SUA CONFIG DO FIREBASE */
const firebaseConfig = {
  apiKey: "AIzaSyAsHXQr5k3HviBVEFPz918g_zcjUZdFpJY",
  authDomain: "cemiteryal-site.firebaseapp.com",
  projectId: "cemiteryal-site",
  storageBucket: "cemiteryal-site.firebasestorage.app",
  messagingSenderId: "935123054222",
  appId: "1:935123054222:web:1a047c9c051001ee94a3df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* LOGIN */
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    location.href = "assinaturas.html";
  } catch (err) {
    document.getElementById("msg").innerText = err.message;
  }
};

/* CADASTRO */
window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    location.href = "assinaturas.html";
  } catch (err) {
    document.getElementById("msg").innerText = err.message;
  }
};

/* PROTEÇÃO DE PÁGINA */
onAuthStateChanged(auth, user => {
  if (location.pathname.includes("assinaturas") && !user) {
    location.href = "login.html";
  }
});