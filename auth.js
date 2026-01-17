import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./firebase.js";

window.login = () => {
  signInWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => location.href = "index.html");
};

window.register = () => {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  ).then(() => location.href = "index.html");
};

onAuthStateChanged(auth, user => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn) return;

  if (user) {
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logoutBtn.style.display = "block";
    logoutBtn.onclick = () => signOut(auth);
  }
});