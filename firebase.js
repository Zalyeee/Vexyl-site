<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

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

  onAuthStateChanged(auth, user => {
    if (user) {
      console.log("Logado:", user.email);
    } else {
      console.log("Não logado");
    }
  });
</script>