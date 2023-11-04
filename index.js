let playBtn = document.getElementById("play-button");
let instructionBtn = document.querySelector(".instructions-button");
let marioImage = document.getElementById("mario");

setInterval(()=>{
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioJumpLarge.png");
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
        console.log("hello")
    },500)
},1000)

playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})

instructionBtn.addEventListener("click",() => {
    window.open("./instructions.html", "_self")
})