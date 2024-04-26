let imgs = document.getElementById("pics").querySelectorAll("img");
for(let i =0; i<imgs.length;i++){
    imgs[i].style.animationDelay=String(10*i-21)+'s'
}