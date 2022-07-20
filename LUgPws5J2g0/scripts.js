let signup=document.querySelector(".a1");
let login=document.querySelector(".a2");
let signup_form=document.querySelector('.signup-form');
let login_form=document.querySelector('.login-form');
login.addEventListener('click',sigup_hide);
signup.addEventListener('click',login_hide);
let firstname=document.forms['signup_form']['firstname'];
let lastname=document.forms['signup_form']['lastname'];
let email=document.forms['signup_form']['email'];
let password=document.forms['signup_form']['password'];
let signup_error=document.querySelector('.signup_error');
firstname.addEventListener('textInput',fstnameVerify);
lastname.addEventListener('textInput',lstnameVerify);
email.addEventListener('textInput',emailVerify);
password.addEventListener('textInput',passVerify);

function signupValid(){
    if(firstname.value.length<=2){
        signup_error.style.display="block";
        firstname.style.border="1px solid red";
        signup_error.innerText="Please Fill up your Firstname";
        firstname.focus();
        return false;
    }
    if(lastname.value.length<=2){
        signup_error.style.display="block";
        lastname.style.border="1px solid red";
        signup_error.innerText="Please Fill up your Lastname";
        lastname.focus();
        return false;
    }
    if(lastname.value.length<=2){
        signup_error.style.display="block";
        lastname.style.border="1px solid red";
        signup_error.innerText="Please Fill up your Lastname";
        lastname.focus();
        return false;
    }
    if(password.value.length<=3){
        signup_error.style.display="block";
        password.style.border="1px solid red";
        signup_error.innerText="Please Fill up your Password";
        password.focus();
        return false;
    }
    if(email.value.length<=8){
        signup_error.style.display="block";
        email.style.border="1px solid red";
        signup_error.innerText="Please Fill up your email";
        email.focus();
        return false;
    }
}

console.log(signup_btn);


// function alertsignin(){
//     alert("Form Sucessfully Sign");
//     console.log(signup_btn);
// }
// function alertlogin(){
//     alert("Form Sucessfully logged  in");
// }


function sigup_hide(){
    signup_form.style.display="none";
    login_form.style.display="block";
    signup.style.background="#34495e";
    login.style.background="#2981bc";

}
function login_hide(){
    login_form.style.display="none";
    signup_form.style.display="block";
    signup.style.background="#2981bc";
    login.style.background="#34495e";

}
function fstnameVerify(){
    if(firstname.value.length>1){
        signup_error.style.display="none";
        firstname.style.border="1px solid #3498db";
        signup_error.innerText="";
        return true;
    }
}
function lstnameVerify(){
    if(lastname.value.length>1){
        signup_error.style.display="none";
        lastname.style.border="1px solid #3498db";
        signup_error.innerText="";
        return true;
    }
}
function emailVerify(){
    if(email.value.length>7){
        signup_error.style.display="none";
        email.style.border="1px solid #3498db";
        signup_error.innerText="";
        return true;
    }
}
function passVerify(){
    if(password.value.length>7){
        signup_error.style.display="none";
        password.style.border="1px solid #3498db";
        signup_error.innerText="";
        return true;
    }
}
