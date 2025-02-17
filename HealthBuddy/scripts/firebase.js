import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWLdi9yquI5g5Av4fHOU_PlCXg6vbiGiE",
  authDomain: "healthbuddy-1ad1d.firebaseapp.com",
  projectId: "healthbuddy-1ad1d",
  storageBucket: "healthbuddy-1ad1d.firebasestorage.app",
  messagingSenderId: "423843040621",
  appId: "1:423843040621:web:aa626160e2d2e94d715e64",
  measurementId: "G-RKR9VPDNPV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  // Google Login Implementation
  const googleBtn = document.querySelector('.google-login');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("User signed in with Google:", user);
          // Optionally redirect the user after a successful Google login
        })
        .catch((error) => {
          console.error("Error during Google sign in:", error);
        });
    });
  }

  // Patient Signup Implementation
  const patientForm = document.querySelector('#patient-form');
  if (patientForm) {
    patientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = patientForm.querySelector("input[placeholder='First Name']").value;
      const lastName = patientForm.querySelector("input[placeholder='Last Name']").value;
      const fullName = `${firstName} ${lastName}`;
      const email = patientForm.querySelector("input[type='email']").value;
      const password = patientForm.querySelector("input[type='password']").value;
      const phone = patientForm.querySelector("input[placeholder='Phone Number']").value;
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: fullName })
            .then(() => {
              console.log("Patient display name set to:", fullName);
            })
            .catch((error) => {
              console.error("Error updating patient display name:", error);
            });
          console.log("Patient signed up with phone:", phone);
          console.log("Patient signed up:", user);
          // Redirect to patient dashboard after signup
          window.location.href = "pat-login.html";
        })
        .catch((error) => {
          console.error("Error during patient sign up:", error);
        });
    });
  }

  // Doctor Signup Implementation
  const doctorForm = document.querySelector('#doctor-form');
  if (doctorForm) {
    doctorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = doctorForm.querySelector("input[placeholder='First Name']").value;
      const lastName = doctorForm.querySelector("input[placeholder='Last Name']").value;
      const fullName = `${firstName} ${lastName}`;
      const email = doctorForm.querySelector("input[type='email']").value;
      const password = doctorForm.querySelector("input[type='password']").value;
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: fullName })
            .then(() => {
              console.log("Doctor display name set to:", fullName);
            })
            .catch((error) => {
              console.error("Error updating doctor display name:", error);
            });
          console.log("Doctor signed up:", user);
          // Redirect to doctor dashboard after signup
          window.location.href = "doc-login.html";
        })
        .catch((error) => {
          console.error("Error during doctor sign up:", error);
        });
    });
  }
  
  // Patient Login Implementation (in login-btn-login.html)
  // Assumes the "Patient Id" input contains the email used during sign up.
  const patientLoginForm = document.querySelector('#patient-form');
  if (patientLoginForm) {
    patientLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = patientLoginForm.querySelector("input[placeholder='Email']").value;
      const password = patientLoginForm.querySelector("input[placeholder='Password']").value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Patient signed in:", userCredential.user);
          window.location.href = "pat-login.html";
        })
        .catch((error) => {
          console.error("Patient login error:", error);
        });
    });
  }
  
  // Doctor Login Implementation (in login-btn-login.html)
  // Assumes the "Doctor Id" input contains the email used during sign up.
  const doctorLoginForm = document.querySelector('#doctor-form');
  if (doctorLoginForm) {
    doctorLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = doctorLoginForm.querySelector("input[placeholder='Email']").value;
      const password = doctorLoginForm.querySelector("input[placeholder='Password']").value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Doctor signed in:", userCredential.user);
          window.location.href = "doc-login.html";
        })
        .catch((error) => {
          console.error("Doctor login error:", error);
        });
    });
  }
});

