import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsHXQr5k3HviBVEFPz918g_zcjUZdFpJY",
  authDomain: "cemiteryal-site.firebaseapp.com",
  projectId: "cemiteryal-site"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.toggleMenu = () => {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

window.register = async () => {
  const nick = document.getElementById("nick").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", user.user.uid), {
    nick,
    email
  });

  alert("Conta criada!");
  window.location.href = "index.html";
};

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await signInWithEmailAndPassword(auth, email, password);
  window.location.href = "index.html";
};

window.logout = async () => {
  await signOut(auth);
  location.reload();
};

onAuthStateChanged(auth, user => {
  if (!document.getElementById("loginBtn")) return;
  document.getElementById("loginBtn").style.display = user ? "none" : "block";
  document.getElementById("registerBtn").style.display = user ? "none" : "block";
  document.getElementById("logoutBtn").style.display = user ? "block" : "none";
});