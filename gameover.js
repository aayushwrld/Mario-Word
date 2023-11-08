//defining all variables
let playBtn = document.querySelector("#play-button span");
let marioImage = document.getElementById("mario");
let homeBtn = document.getElementById("home-button-image")
let scoreCorrect = sessionStorage.getItem("wins")
let scoreIncorrect = sessionStorage.getItem("wrong")
let mainHeadSpan = document.querySelector(".main-heading span")
let correctWords = document.querySelector(".correct-score")
let incorrectWords = document.querySelector(".incorrect-score")

//adjusting volumes of the webpage
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
    marioImage.style.paddingTop="0px";
},600)

// when play button is clicked it will redirect to theme.html
playBtn.addEventListener("click",() => {
    window.open("./theme.html", "_self")
})

// when home button is clicked it will redirect to index.html
homeBtn.addEventListener("click",() => {
    window.open("./index.html", "_self")
})

// when game is ended, it will compare scores and get an output acc. to it 
if (scoreCorrect > scoreIncorrect){
    mainHeadSpan.textContent = "You did Good!"
}else if(scoreCorrect == scoreIncorrect){
    mainHeadSpan.textContent = "Almost there!"
}else{
    mainHeadSpan.textContent = "Nice try!"
}
correctWords.textContent = `Correct words - ${scoreCorrect}`
incorrectWords.textContent = `Incorrect words - ${scoreIncorrect}`

