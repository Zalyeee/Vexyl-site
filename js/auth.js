import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// REGISTRO
window.register = async () => {
  const nick = document.getElementById("nick").value;
  const real = document.getElementById("realname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  const cred = await createUserWithEmailAndPassword(auth, email, pass);

  await setDoc(doc(db, "users", cred.user.uid), {
    nick,
    real,
    phone,
    email,
    createdAt: Date.now()
  });

  location.href = "index.html";
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, pass);
  location.href = "index.html";
};

// LOGOUT
window.logout = async () => {
  await signOut(auth);
  location.href = "index.html";
};

// CONTROLE DE ESTADO
onAuthStateChanged(auth, user => {
  const login = document.getElementById("loginLink");
  const register = document.getElementById("registerLink");
  const logout = document.getElementById("logoutBtn");

  if (user) {
    if (login) login.style.display = "none";
    if (register) register.style.display = "none";
    if (logout) logout.style.display = "block";
  } else {
    if (login) login.style.display = "block";
    if (register) register.style.display = "block";
    if (logout) logout.style.display = "none";
  }
});