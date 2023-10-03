// Function to validate the login form
function validateLoginForm() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }

    return true;
}

// Function to validate the sign-up form
function validateSignUpForm() {
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var termsCheckbox = document.getElementById('terms-checkbox').checked;

    if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!termsCheckbox) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    return true;
}
