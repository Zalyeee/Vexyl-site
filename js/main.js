import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// MENU
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if(menuBtn) menuBtn.onclick = () => menu.classList.toggle("active");

// AUTH
window.registrar = () => {
  const email = email.value;
  const password = password.value;
  createUserWithEmailAndPassword(auth, email, password);
};

window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value);
};

onAuthStateChanged(auth, user => {
  if(user){
    document.getElementById("loginLink")?.style.display="none";
    document.getElementById("registroLink")?.style.display="none";
    document.getElementById("logoutBtn")?.style.display="block";
  }
});

document.getElementById("logoutBtn")?.addEventListener("click", ()=>signOut(auth));
