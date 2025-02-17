document.addEventListener("DOMContentLoaded", function () {
    const patientBtn = document.getElementById("patient-btn");
    const doctorBtn = document.getElementById("doctor-btn");
    const patientForm = document.getElementById("patient-form");
    const doctorForm = document.getElementById("doctor-form");

    // Function to toggle between forms
    function toggleForms(showForm, hideForm, activeBtn, inactiveBtn) {
        showForm.style.display = "block";
        hideForm.style.display = "none";
        activeBtn.classList.add("active");
        inactiveBtn.classList.remove("active");
    }

    if (patientBtn && doctorBtn && patientForm && doctorForm) {
        // Event listener for patient button
        patientBtn.addEventListener("click", function () {
            toggleForms(patientForm, doctorForm, patientBtn, doctorBtn);
        });

        // Event listener for doctor button
        doctorBtn.addEventListener("click", function () {
            toggleForms(doctorForm, patientForm, doctorBtn, patientBtn);
        });
    }
});