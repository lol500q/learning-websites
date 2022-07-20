function show(){
    let pasword=document.getElementById("password");
    let icon=document.querySelector('.fa-lock');
    if(pasword.type==="password"){
        password.type="text";
        password.style.marginTop="20px";
        icon.style.color="#7f2092";   
    }
    else{
        password.type="password";
        icon.style.color="grey";

    }
}