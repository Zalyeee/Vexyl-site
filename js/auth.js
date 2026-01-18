import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// REGISTRO
window.register = async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  const nick = nickInput.value;
  const telefone = telefoneInput.value;

  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    nick,
    telefone,
    email,
    criadoEm: new Date()
  });

  window.location.href = "index.html";
};

// LOGIN
window.login = async () => {
  await signInWithEmailAndPassword(
    auth,
    emailInput.value,
    passwordInput.value
  );
  window.location.href = "index.html";
};

// LOGOUT
window.logout = async () => {
  await signOut(auth);
  window.location.href = "index.html";
};