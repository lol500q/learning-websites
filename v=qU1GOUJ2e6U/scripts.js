const abc=()=>{
    let time=new Date();
    let hr=time.getHours() /12 *360+time.getMinutes() /60 *6;
    let min=time.getMinutes() /60 *360 + time.getSeconds() / 60 *6;
    let sec=time.getSeconds() / 60 *360;
    alert(hr+"hr"+min+"min"+sec+"sec")  
    animation=[
      "@keyframes sec_hand{from{transform:rotate("+sec+"deg);}transform:rotate("+(sec +360) +"deg);}}",
      "@keyframes min_hand{from{transform:rotate("+min+"deg);}transform:rotate("+(min+360) +"deg);}}",
      "@keyframes sec_hand{from{transform:rotate("+hr+"deg);}transform:rotate("+(hr +360) +"deg);}}"
      
    ].join("");
    document.querySelector('#clock-animate').innerHTML=animation;
}
abc();