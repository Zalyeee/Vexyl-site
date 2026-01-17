import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

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
const db = getFirestore(app);

/* LOGIN */
window.login = async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    location.href = "assinaturas.html";
  } catch (e) {
    document.getElementById("msg").innerText = e.message;
  }
};

/* REGISTRO */
window.register = async () => {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);

    await setDoc(doc(db, "users", cred.user.uid), {
      nome,
      telefone,
      email,
      criadoEm: new Date()
    });

    location.href = "assinaturas.html";
  } catch (e) {
    document.getElementById("msg").innerText = e.message;
  }
};

/* LOGOUT */
window.logout = async () => {
  await signOut(auth);
  location.href = "index.html";
};

/* MENU DINÂMICO */
onAuthStateChanged(auth, user => {
  const menu = document.getElementById("menu");
  if (!menu) return;

  if (user) {
    menu.innerHTML = `
      <a href="index.html">🏠 Início</a>
      <a href="assinaturas.html">💳 Assinaturas</a>
      <a href="links.html">🔗 Links</a>
      <a href="#" onclick="logout()">🚪 Logout</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="index.html">🏠 Início</a>
      <a href="login.html">🔐 Login</a>
      <a href="registro.html">📝 Registro</a>
    `;
  }
});