let marioImage = document.getElementById("mario");
let marioWrongSound = new Audio("./assets/wrong-word.mp3")
let marioWrongSound2 = new Audio("./assets/wrong-word-2.mp3")
let marioCorrectSound = new Audio("./assets/correct-word.mp3")
let marioCorrectSound2 = new Audio("./assets/correct-word-2.mp3")
let bgmAudio = new Audio("./assets/background-music.mp3")
let winningAudio = new Audio("./assets/mario-won.mp3")
let marioLostHurt = new Audio("./assets/mario-lost.mp3")
let themeChosen = sessionStorage.getItem("theme")
let nextWordBtn = document.querySelector("#play-button span");
let playAgain = document.querySelector(".result-play-again")
playAgain.style.opacity = "0";
playAgain.style.pointerEvents = "none";


bgmAudio.volume = 0.3;
bgmAudio.loop = true
marioWrongSound.volume = 0.3;
marioWrongSound2.volume = 0.8;
marioCorrectSound.volume = 0.5;
marioCorrectSound2.volume = 0.5;
marioLostHurt.volume = 1;
bgmAudio.play()

function randomSound(){
    let numRandom = Math.ceil(Math.random()*2)
    return numRandom
}
// setTimeout(()=>{
//     marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioWalkLarge.png");
//     setTimeout(()=>{
//         marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
//     },300)
// },600)



let questionButtonImage = document.getElementById("question-button-image");
let questionsAnswersDiv = document.querySelector(".questions-answers");
questionsAnswersDiv.style.opacity = 0;
questionsAnswersDiv.style.pointerEvents = "none";

let isVisible = false;

// Add a click event listener to the question button image
questionButtonImage.addEventListener("click", function() {
    // Toggle the visibility by changing opacity
    if (isVisible) {
    questionsAnswersDiv.style.opacity = 0;
    questionsAnswersDiv.style.pointerEvents = "none";
    isVisible = false;
} else {
        questionsAnswersDiv.style.opacity = 1;
        questionsAnswersDiv.style.pointerEvents = "auto";
        isVisible = true;
    }
});

document.addEventListener("click", function(e) {
    if (isVisible && !questionsAnswersDiv.contains(e.target) && e.target !== questionButtonImage) {
        questionsAnswersDiv.style.opacity = 0;
        questionsAnswersDiv.style.pointerEvents = "none";
        isVisible = false;
    }
});

let usernameDiv = document.getElementById("username");
let username = sessionStorage.getItem("userName")
usernameDiv.textContent = username;
var usernameImg = document.getElementById('username-img');
usernameImg.addEventListener('click', function() {
    // Scale up to 1.2
    usernameDiv.style.transform = 'scale(1.1)';
    
    // After a delay, scale back down to 1
    setTimeout(function() {
        usernameDiv.style.transform = 'scale(1)';
    }, 500); // 500 milliseconds (0.5 seconds)
});

let wordListMario = [
    {
        word: "plumber",
        hint: "Related to pipes!"
    },
    {
        word: "mushroom",
        hint: "Collecting these changes's size of Mario!"
    },
    {
        word: "coins",
        hint: "These are the in-game currency and you collect them!"
    },
    {
        word: "power ups",
        hint: "Enhances your abilities in game!"
    },
    {
        word: "goombas",
        hint: "They are brown in color."
    },
    {
        word: "warp pipe",
        hint: "They transport you to different locations!"
    },
    {
        word: "koopa troopa",
        hint: "They are green in color and have shells!"
    },
    {
        word: "bowser",
        hint: "The one we are supposed to save the princess from!"
    },
    {
        word: "toad",
        hint: "It is blue in color and has a tail!"
    },
    {
        word: "fire flower",
        hint: "It is a flower which helps mario!"
    },
    {
        word: "one up",
        hint: "You get extra chance to play if you get it."
    },
    {
        word: "yoshi",
        hint: "The friendly dinosaur!"
    },
    {
        word: "nintendo",
        hint: "The famous device in which the game is famous!"
    },
    {
        word: "adventure",
        hint: "The style of the game!"
    },
    {
        word: "princess",
        hint: "The one who needs the rescue!"
    }
]

let wordListGeneral = [
    {
        word: "html",
        hint: "The coding language to code webpages."
    },
    {
        word: "javascript",
        hint: "The dynamic coding languages used in coding webpages."
    },
    {
        word: "russia",
        hint: "The largest country."
    },
    {
        word: "cricket",
        hint: "A sport, very popular!"
    }, 
    {
        word: "basketball",
        hint: "A sport!"
    },
    {
        word: "cricket",
        hint: "A sport, very popular!"
    }
]

let chosenList;
if (themeChosen == "mario"){
    chosenList = wordListMario;
}else{
    chosenList = wordListGeneral;
}

console.log(chosenList);
let wordClass = document.querySelector(".word")
let starClass = document.querySelector(".stars")
let wrongTries = 3;
let marioLeftValue = 0;
let animationCount = 0;
let winningDetect = 0;
const randNum =  Math.ceil(Math.random()*`${chosenList.length}`);
function randomWord(){
    return `${chosenList[randNum-1].word}`
}
function hintOfWord(){
    return `${chosenList[randNum-1].hint}`
}
let wordGenerated = randomWord();
let hintGenerated = hintOfWord();
let hint = document.getElementById("hint");
hint.textContent = hintGenerated;
let splitWord = wordGenerated.split("")
let winningDetectArr = splitWord.filter(element => element !== ' ');
let letterKeyboard = document.querySelectorAll(".letter-keyboard")

// let usedWords = [];
// usedWords.push(rand)
// sessionStorage.setItem("wordused", randNum)


letterKeyboard.forEach((e)=>{
    e.addEventListener("click", ()=> {
        e.style.pointerEvents="none";
        
        if (splitWord.includes(`${e.id}`)){
            if (randomSound() == 1){
                marioCorrectSound.play()
        }else{
                marioCorrectSound2.play()
        }
            e.style.backgroundImage = 'url("./assets/keyword-used-correct.png")';
            for (let i = 0; i < splitWord.length; i++) {
                    wordClass.querySelectorAll(`#${e.id}-letter`)[i].innerText = `${e.id} `;
                    winningDetect++;
                    if (winningDetect == winningDetectArr.length){
                        winningAudio.play()
                        setTimeout(()=>{
                            window.open("./gameover.html", "_self")
                        },5500);
                    }
                }
        }else{
            e.style.backgroundImage = 'url("./assets/keyword-used-wrong.png")';
            wrongTries--;
            starClass.querySelectorAll(`#star-img`)[wrongTries].setAttribute("src", "./assets/star-grey.png");
            animationCount = 0;
            if (wrongTries == 0){
                animationCount = 10;
                marioImage.style.height = "100px"
                marioImage.style.width = "110px"
                marioLostAnimation();
                randomSound = 0;
                marioImage.style.transform = `translateX(15vw)`;
                setTimeout(()=>{
                marioImage.style.top = "25vh";
                },800)
                setTimeout(()=>{
                    playAgain.style.opacity = "1";
                playAgain.style.pointerEvents = "auto";
                },2500)
            }
            animateMarioThreeTimes();
            marioLeftValue+=15;
            marioImage.style.transform = `translateX(${marioLeftValue}vw)`
            if (randomSound() == 1){
                    marioWrongSound.play()
            }else{
                    marioWrongSound2.play()
            }
        }
    })
})
let addingSpan ="";
for (let i = 0; i < wordGenerated.length; i++) {
    if (splitWord[i]==" "){
    addingSpan+=`<span id="${splitWord[i]}-letter"> / </span>`
    }else{
    addingSpan+=`<span id="${splitWord[i]}-letter">_ </span>`
    }
}
wordClass.innerHTML = addingSpan;

// console.log(randNum);

// Define a function for the animation
function runMarioAnimation() {
    marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioWalkLarge.png");
    setTimeout(() => {
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioStandLarge.png");
    }, 280);
}

// Run the animation three times with a delay
function animateMarioThreeTimes() {
    if (animationCount < 3) {
        runMarioAnimation();
        animationCount++;
        setTimeout(animateMarioThreeTimes, 500); // 650ms delay before the next animation
    }
}

function marioLostAnimation(){
    setTimeout(()=>{
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioJumpLarge.png");
    },100)
    setTimeout(()=>{
        marioLostHurt.play()
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioLoseLarge.png");
    },1900)
}

nextWordBtn.addEventListener("click",() => {
    window.open("./game.html", "_self")
    // playAgain.style.background = "rgba( 81, 218, 221, 0)";
    // playAgain.style.boxShadow = "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )";
    // playAgain.style.backdropFilter = "blur( 0px )";
})