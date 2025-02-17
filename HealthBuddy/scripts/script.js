document.addEventListener("DOMContentLoaded", function () {
    const patientBtn = document.getElementById("patient-btn");
    const doctorBtn = document.getElementById("doctor-btn");
    const patientForm = document.getElementById("patient-form");
    const doctorForm = document.getElementById("doctor-form");
    const googleLoginBtn = document.querySelector(".google-login"); // Google login button

    let selectedUserType = null; // Track whether the user selects Patient or Doctor

    // Function to toggle between forms
    function toggleForms(showForm, hideForm, activeBtn, inactiveBtn, userType) {
        showForm.style.display = "block";
        hideForm.style.display = "none";
        activeBtn.classList.add("active");
        inactiveBtn.classList.remove("active");
        selectedUserType = userType; // Store the selected user type
    }

    if (patientBtn && doctorBtn && patientForm && doctorForm) {
        // Event listener for patient button
        patientBtn.addEventListener("click", function () {
            toggleForms(patientForm, doctorForm, patientBtn, doctorBtn, "patient");
        });

        // Event listener for doctor button
        doctorBtn.addEventListener("click", function () {
            toggleForms(doctorForm, patientForm, doctorBtn, patientBtn, "doctor");
        });
    }

    // Handle Google Login with user type selection
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener("click", function () {
            if (!selectedUserType) {
                alert("Please select whether you are a patient or a doctor before logging in.");
                return;
            }

            signInWithPopup(auth, provider)
                .then((result) => {
                    const user = result.user;
                    console.log(`User signed in as ${selectedUserType}:`, user);

                    // Redirect based on selection
                    if (selectedUserType === "patient") {
                        window.location.href = "pat-login.html";
                    } else if (selectedUserType === "doctor") {
                        window.location.href = "doc-login.html";
                    }
                })
                .catch((error) => {
                    console.error("Error during Google sign-in:", error);
                });
        });
    }
});
