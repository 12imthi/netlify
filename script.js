var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('subit-error');
var table = document.getElementById("table");


function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'name is required'
        return false;
    }
    // else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    //     nameError.innerHTML = 'Write full name'
    //     return false;
    // }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone number is required'
        return true;
    }
    else if (phone.length !== 10) {
        phoneError.innerHTML = 'phone number must be 10 dig'
        return false;
    }
    else if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'numbers required'
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateMassage() {
    var message = document.getElementById('contact-massage').value;
    var required = 3;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more characters required';
        return false;

    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMassage()) {
        submitError.innerHTML = 'please fix error to submit';
        return false;
    }
    let d = document.getElementById("contact-name").value;
    let de = document.getElementById("contact-phone").value;
    let a = document.getElementById("contact-email").value;
    let c = document.getElementById("contact-massage").value;
    
    
    if (d && de && a && c) {
        document.getElementById('table').style.display = 'block';

        var row = table.insertRow(-1);
        var date = row.insertCell(0);
        var desc = row.insertCell(1);
        var amt = row.insertCell(2);
        var cost = row.insertCell(3);
        row.style.cssTest = 'color:green;';
        // row.style.backgroundcolor ='blue'
    
        date.innerHTML = d
        desc.innerHTML = de
        amt.innerHTML = a
        cost.innerHTML = c
    }
 
}