function validate() {
    // Get input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("check").value.trim();
    const email = document.getElementById("email").value.trim();
    const areaCode = document.getElementById("pno").value.trim();
    const phoneNumber = document.getElementById("phn").value.trim();
    const date = document.getElementById("date").value;

    // Reset all error labels
    document.querySelectorAll("label[style*='color: red']").forEach(label => {
        label.style.visibility = "hidden";
    });

    // Validation flags
    let isValid = true;

    // Email regex from the second function
    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    // Phone regex for a 10-digit number starting with 6-9
    const phoneRegex = /^[6-9]\d{9}$/;

    // Check required fields
    if (!firstName || !lastName) {
        document.querySelector("label[for='firstName']").style.visibility = "visible";
        isValid = false;
    }

    // Check email
    if (!emailRegex.test(email)) {
        document.querySelector("label[for='email']").style.visibility = "visible";
        isValid = false;
    }

    // Check phone number (validate phoneNumber, not areaCode, with phoneRegex)
    if (!phoneRegex.test(phoneNumber)) {
        document.querySelector("label[for='phn']").style.visibility = "visible";
        isValid = false;
    }

    // Check area code (optional: only validate if provided)
    if (areaCode && isNaN(areaCode)) {
        document.querySelector("label[for='phn']").style.visibility = "visible";
        isValid = false;
    }

    // Check date
    if (!date) {
        document.querySelector("label[for='date']").style.visibility = "visible";
        isValid = false;
    }

    return isValid; // Return true to submit, false to block
}

