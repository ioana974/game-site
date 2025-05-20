
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADT_zCEls_mMMEgvY44bWI3zzrvWdxIxY",
  authDomain: "chat-feedback-20336.firebaseapp.com",
  projectId: "chat-feedback-20336",
  storageBucket: "chat-feedback-20336.appspot.com",
  messagingSenderId: "920648385861",
  appId: "1:920648385861:web:c297bd0df63b93b6b66a2c",
  measurementId: "G-GN9DRMND12"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Logat cu succes!");
    window.location.href = "descarca.html";
  } catch (error) {
    alert("Eroare la logare: " + error.message);
  }
});

document.getElementById('signup-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("Cont creat cu succes!");
    window.location.href = "descarca.html";
  } catch (error) {
    alert("Eroare la creare cont: " + error.message);
  }
});
