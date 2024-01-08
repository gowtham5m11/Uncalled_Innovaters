
function openRegistrationForm() {
    var selectBox = document.getElementById("name");
    var selectedValue = selectBox.value;
    var ele = document.getElementById(selectedValue);
    ele.style.display = "block";
}

function closeRegistrationForm() {
    var selectBox = document.getElementById("name");
    var selectedValue = selectBox.value;
    var ele = document.getElementById(selectedValue);
    ele.style.display = "none";
}