import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Update fields from the Firebase auth user (additional details may be stored separately)
      document.getElementById("displayName").innerText = user.displayName || "";
      document.getElementById("displayEmail").innerText = user.email || "";
      // You can optionally update other elements if available
    } else {
      // If no user is logged in, redirect to login page
      window.location.href = "pat-login.html";
    }
  });
});

document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const profilePic = document.getElementById("profilePic").files[0];
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const bloodType = document.getElementById("blood-group").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const medicalHistory = document.getElementById("medicalHistory").value;
  const emergencyContact = document.getElementById("emergencyContact").value;

  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById("displayPic").src = event.target.result;
    };
    reader.readAsDataURL(profilePic);
  }

  document.getElementById("displayName").innerText = name;
  document.getElementById("displayEmail").innerText = email;
  document.getElementById("displayAge").innerText = age;
  document.getElementById("displayGender").innerText = gender;
  document.getElementById("displayBloodType").innerText = bloodType;
  document.getElementById("displayPhone").innerText = phone;
  document.getElementById("displayAddress").innerText = address;
  document.getElementById("displayMedicalHistory").innerText = medicalHistory;
  document.getElementById("displayEmergencyContact").innerText = emergencyContact;

  document.getElementById("profileForm").classList.add("hidden");
  document.getElementById("profileDisplay").classList.remove("hidden");
});

document.getElementById("editProfileBtn").addEventListener("click", function() {
  document.getElementById("profileForm").classList.remove("hidden");
  document.getElementById("profileDisplay").classList.add("hidden");
});
