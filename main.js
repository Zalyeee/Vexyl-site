// ===============================
// 🔥 FIREBASE (CONFIG)
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 SUA CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAsHXQr5k3HviBVEFPz918g_zcjUZdFpJY",
  authDomain: "cemiteryal-site.firebaseapp.com",
  projectId: "cemiteryal-site",
  storageBucket: "cemiteryal-site.firebasestorage.app",
  messagingSenderId: "935123054222",
  appId: "1:935123054222:web:f720f6ae514631dd94a3df"
};

// ===============================
// 🚀 INIT
// ===============================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ===============================
// 🍔 MENU MOBILE
// ===============================
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

// ===============================
// 👤 AUTH STATE
// ===============================
onAuthStateChanged(auth, async (user) => {
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userNick = document.getElementById("user-nick");

  if (user) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";

    // Buscar dados do usuário
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists() && userNick) {
      userNick.innerText = snap.data().nick;
    }
  } else {
    if (loginBtn) loginBtn.style.display = "block";
    if (registerBtn) registerBtn.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (userNick) userNick.innerText = "";
  }
});

// ===============================
// 📝 REGISTRO
// ===============================
const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const nick = document.getElementById("reg-nick").value;
    const phone = document.getElementById("reg-phone").value;

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", cred.user.uid), {
        email,
        nick,
        phone,
        createdAt: Date.now()
      });

      alert("Conta criada com sucesso!");
      window.location.href = "index.html";
    } catch (err) {
      alert("Erro: " + err.message);
    }
  });
}

// ===============================
// 🔐 LOGIN
// ===============================
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "index.html";
    } catch (err) {
      alert("Erro: " + err.message);
    }
  });
}

// ===============================
// 🚪 LOGOUT
// ===============================
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
  });
}