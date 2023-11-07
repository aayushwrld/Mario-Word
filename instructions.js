let marioImage = document.getElementById("mario");
let playBtn = document.getElementById("play-button");
let homeBtn = document.getElementById("home-button-image")

let bgmAudio = new Audio("./assets/background-music.mp3")
bgmAudio.volume = 0.6;
bgmAudio.play()
bgmAudio.loop = true

setInterval(()=>{
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
        marioImage.style.paddingTop="8px";
    },300)
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioWalkLarge.png");
    marioImage.style.paddingTop="12px";
},600)
homeBtn.addEventListener("click",() => {
    window.open("./index.html", "_self")
})

playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})
