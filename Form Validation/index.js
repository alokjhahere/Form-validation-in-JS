const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    validateName();
    validateEmail();
    validatePassword();

});

function validateName(){
    const name = document.getElementById('name').value;

    if(name.length === 0){
         nameError.innerHTML = "Name is required";
         nameError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }

    if(!name.match(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)){
         nameError.innerHTML = "Write Full Name"
         nameError.previousElementSibling.classList.add('fa-xmark');
         return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}


function validateEmail(){
    const email = document.getElementById('email').value;

    if(email.length ===0){
        emailError.innerHTML = "Email is required"
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Write a Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    emailError.innerHTML= "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}


function validatePassword(){
    const pass = document.getElementById('password').value;

    if(pass.length===0){
        passError.innerHTML = "Password is required"
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(pass.length<8){
        passError.innerHTML = "Password must be of 8 letters"
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    passError.innerHTML="";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}


