function getRandomColor(){
    let symbols,color,content;
    symbols="0123456789ABCDEF";
    color="#";
    content=document.getElementById('text');
    for(let i=0;i<6;i++){
        color=color+symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.background=color;
    content.textContent=color;
}