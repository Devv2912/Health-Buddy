document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const profilePic = document.getElementById("profilePic").files[0];
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const bloodType = document.getElementById("bloodType").value;
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
