
let play=document.getElementById("playbuut");
console.log(play);
let audio1=new Audio('Flowers(PaglaSongs).mp3');
play.addEventListener('click',()=>{
    console.log('im clicked')
    if(audio1.paused||audio1.currentTime<=0){
    audio1.play();}
    else{
        audio1.pause();
    }
})