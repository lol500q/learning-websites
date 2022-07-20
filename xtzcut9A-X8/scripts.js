icon=document.querySelector('.fa-chevron-up')
console.log(icon);
window.scroll(()=>{
    if(window.scrollTo() > 300){
        console.log('its happen mother fucker');
        icon.style.opacity="1";
    icon.tyle.pointerEvents="auto"
    }
    else{
        console.log('what');
        icon.style.opacity="0";
        icon.tyle.pointerEvents="none"
    }
})