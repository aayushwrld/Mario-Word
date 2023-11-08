// Defining all variables
let playBtn = document.querySelector("#play-button span");
let instructionBtn = document.querySelector(".instructions-button span");
let marioImage = document.getElementById("mario");
let scoreCorrect = sessionStorage.setItem("wins", 0)
let scoreIncorrect = sessionStorage.setItem("wrong", 0)

let bgmAudio = new Audio("./assets/background-music.mp3")
bgmAudio.volume = 0.6;
bgmAudio.play()
bgmAudio.loop = true

// Updates marioImage source to marioWalkLarge and adjusts paddingTop for bouncy effect
setInterval(()=>{
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
        marioImage.style.paddingTop="8px";
    },300)
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioWalkLarge.png");
    marioImage.style.paddingTop="12px";
},600)

// when instruction button is clicked it will redirect to instructions.html
instructionBtn.addEventListener("click",() => {
    window.open("./instructions.html", "_self")
})

// when play button is clicked it will redirect to theme.html
playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})