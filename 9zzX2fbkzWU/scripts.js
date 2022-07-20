// validation code for inputs
let email=document.getElementById("email");
let password=document.getElementById("password");
let email_error=document.getElementById("email_error");
let password_error=document.getElementById("password_error");
email.addEventListener('textInput',email_Verify);
password.addEventListener('passwordInput',password_Verify);

function validated(){
    if(email.value.length<9){
        email.style.border="1px solid red";
        email_error.style.display="block"
        email.focus();
        return false;
    }
    if(password.value.length<9){
        password.style.border="1px solid red";
        password_error.style.display="block"
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.validated.length>=8){
        email.style.border="1px solid silver";
        email_error.style.display="none";
        return true;
    }
}
function password_Verify(){
    if(password.validated.length>=8){
        password.style.border="1px solid silver";
        password_error.style.display="none";
        return true;
    }
}