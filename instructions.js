let marioImage = document.getElementById("mario");
let playBtn = document.getElementById("play-button");
let homeBtn = document.getElementById("home-button-image")

setInterval(()=>{
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioJumpLarge.png");
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
    },500)
},1000)

homeBtn.addEventListener("click",() => {
    window.open("./index.html", "_self")
})

playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})
