let i=0;
let text;
text='Welcome to Ayesh Code';
function typing(){
    if(i<text.length){
document.getElementById('text').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();