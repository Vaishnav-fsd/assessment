function validate() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("check").value.trim();
    const email = document.getElementById("email").value.trim();
    const areaCode = document.getElementById("pno").value.trim();
    const phoneNumber = document.getElementById("phn").value.trim();
    const date = document.getElementById("date").value;

    if (!firstName || !lastName || !email || !areaCode || !phoneNumber || !date) {
        alert("All fields are required.");
        return false;
    }

    if (isNaN(areaCode) || isNaN(phoneNumber)) {
        alert("Phone fields must contain only numbers.");
        return false;
    }

    return true; // allow form to submit
}



function validate() {
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('pno').value.trim();
    var emailMsg = document.getElementById('check');
    var phoneMsg = document.getElementById('phn');

    var emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var phoneRegex = /^[6-9]\d{9}$/;

    let isValid = true;

    // Email validation
    if (emailRegex.test(email)) {
        emailMsg.innerHTML = "Valid email";
        emailMsg.style.color = "green";
    } else {
        emailMsg.innerHTML = "Invalid email";
        emailMsg.style.color = "red";
        isValid = false;
    }

    // Phone validation
    if (phoneRegex.test(phone)) {
        phoneMsg.innerHTML = "Valid phone";
        phoneMsg.style.color = "green";
    } else {
        phoneMsg.innerHTML = "Invalid phone";
        phoneMsg.style.color = "red";
        isValid = false;
    }

    return isValid; // return true only if both are valid
}


