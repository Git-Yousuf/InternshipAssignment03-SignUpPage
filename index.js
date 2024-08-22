document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("area");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const cpassword = document.getElementById("cpassword");

    form.addEventListener("submit", function (event) {
        // Prevent form submission
        event.preventDefault();

        // Clear previous error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());

        let valid = true;

        // Validate First Name
        if (firstname.value.trim() === "") {
            showError(firstname, "First name is required.");
            valid = false;
        }

        // Validate Last Name
        if (lastname.value.trim() === "") {
            showError(lastname, "Last name is required.");
            valid = false;
        }

        // Validate Email
        if (email.value.trim() === "") {
            showError(email, "Email is required.");
            valid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, "Please enter a valid email.");
            valid = false;
        }

        // Validate Phone Number (basic validation for digits and length)
        if (phone.value.trim() === "") {
            showError(phone, "Area code is required.");
            valid = false;
        } else if (!/^\d{3,4}$/.test(phone.value)) {
            showError(phone, "Please enter a valid area code.");
            valid = false;
        }

        // Validate Username
        if (username.value.trim() === "") {
            showError(username, "Username is required.");
            valid = false;
        } else if (username.value.length < 5) {
            showError(username, "Username must be at least 5 characters long.");
            valid = false;
        }

        // Validate Password
        if (password.value.trim() === "") {
            showError(password, "Password is required.");
            valid = false;
        } else if (password.value.length < 8) {
            showError(password, "Password must be at least 8 characters long.");
            valid = false;
        }

        // Validate Confirm Password
        if (cpassword.value.trim() === "") {
            showError(cpassword, "Confirm password is required.");
            valid = false;
        } else if (password.value !== cpassword.value) {
            showError(cpassword, "Passwords do not match.");
            valid = false;
        }

        // If all validations pass, submit the form
        if (valid) {
            form.submit();
        }
    });

    function showError(input, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.style.color = "red";
        errorDiv.style.marginTop = "5px";
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
