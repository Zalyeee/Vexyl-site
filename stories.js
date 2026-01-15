// ================================
// FIREBASE (WEB SDK)
// ================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// ================================
// CONFIG DO FIREBASE
// ================================
const firebaseConfig = {
  apiKey: "AIzaSyAsHXQr5k3HviBVEFPz918g_zcjUZdFpJY",
  authDomain: "cemiteryal-site.firebaseapp.com",
  projectId: "cemiteryal-site",
  storageBucket: "cemiteryal-site.firebasestorage.app",
  messagingSenderId: "935123054222",
  appId: "1:935123054222:web:1a047c9c051001ee94a3df"
};

// ================================
// INIT
// ================================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase conectado (stories)");

// ================================
// ELEMENTOS HTML
// ================================
const storiesList = document.getElementById("storiesList");
const storyForm = document.getElementById("storyForm");
const titleInput = document.getElementById("storyTitle");
const contentInput = document.getElementById("storyContent");

// ================================
// CARREGAR HISTÓRIAS
// ================================
async function loadStories() {
  storiesList.innerHTML = "Carregando histórias...";

  const querySnapshot = await getDocs(collection(db, "stories"));
  storiesList.innerHTML = "";

  if (querySnapshot.empty) {
    storiesList.innerHTML = "<p>Nenhuma história ainda 😢</p>";
    return;
  }

  querySnapshot.forEach((doc) => {
    const story = doc.data();

    const div = document.createElement("div");
    div.className = "story";

    div.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.content}</p>
      <small>📅 ${story.createdAt?.toDate?.().toLocaleString() || "Agora"}</small>
    `;

    storiesList.appendChild(div);
  });
}

// ================================
// ENVIAR NOVA HISTÓRIA
// ================================
if (storyForm) {
  storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await addDoc(collection(db, "stories"), {
        title,
        content,
        createdAt: serverTimestamp()
      });

      titleInput.value = "";
      contentInput.value = "";

      loadStories();
    } catch (err) {
      console.error("Erro ao salvar história:", err);
      alert("Erro ao salvar história 😭");
    }
  });
}

// ================================
// START
// ================================
loadStories();