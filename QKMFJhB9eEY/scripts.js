let click=document.querySelector('.click');
let pop=document.querySelector('.popup_box');
let btn1=document.querySelector(".btn1");
let  btn2=document.querySelector(".btn2")
click.addEventListener('click',()=>{
    pop.style.opacity="1";
    pop.style.pointerEvents="auto";
})
btn1.addEventListener('click',()=>{
    pop.style.opacity="0";
    pop.style.pointerEvents="";
})
btn2.addEventListener('click',()=>{
    pop.style.opacity="0";
    pop.style.pointerEvents="";
    alert('Your Account Deleteed Successfully.');
    click.innerText="Account Deleted";
    
})
