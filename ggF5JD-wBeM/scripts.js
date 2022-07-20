let scroll=window.pageYOffset;
window.onscroll=()=>{
    let scroll2=window.pageYOffset;
    if(scroll>scroll2){
        document.querySelector('nav').style.top="0";
    }
    else{
        document.querySelector('nav').style.top="-100px";
    }
scroll=scroll2;
}