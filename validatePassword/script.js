const submitForm = document.querySelector('.form')


submitForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    console.log(email)
    const password = document.getElementById('password').value

    if(validateEmail(email) && validatePassword(password)){
        showMessage("Valid email and password", "green")
    }else{
        showMessage("Invalid email or password", "red")
    }
})

// validation function of email input
function validateEmail(email){
    return email.includes('@')
}

// validate function of password input
function validatePassword(password){
    return password.length >= 8
}

// display message function after form submission
function showMessage(text, color){
    const message = document.getElementById('message')
    message.innerText = text
    message.style.color = color
}


