//defining all variables
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
let buttons = document.querySelector(".buttons")
let playAgainbtn = document.querySelector(".play-again-button")
let endbtn = document.querySelector(".end-button")
let parentKeyboard = document.querySelector(".parent-keyboard")
let questionButtonImage = document.getElementById("question-button-image");
let questionsAnswersDiv = document.querySelector(".questions-answers");
let usernameDiv = document.getElementById("username");
let username = sessionStorage.getItem("userName")
let usernameImg = document.getElementById('username-img');

//adding display none to buttons which display after guessing a word
buttons.style.display = "none";

//adjusting volumes of the webpage
bgmAudio.volume = 0.08;
bgmAudio.loop = true
marioWrongSound.volume = 0.3;
marioWrongSound2.volume = 0.8;
marioCorrectSound.volume = 0.5;
marioCorrectSound2.volume = 0.5;
marioLostHurt.volume = 1;
bgmAudio.play()

// giving opacity 0 to answer div which appears on clicking the question button
questionsAnswersDiv.style.opacity = 0;
questionsAnswersDiv.style.pointerEvents = "none";
let isVisible = false;

// adding event listener for the question button that if button is pressed opacity will be 0
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

// adding event listener for question button that if while question button is opened, if user clicks anywhere else the button will close
document.addEventListener("click", function(e) {
    if (isVisible && !questionsAnswersDiv.contains(e.target) && e.target !== questionButtonImage) {
        questionsAnswersDiv.style.opacity = 0;
        questionsAnswersDiv.style.pointerEvents = "none";
        isVisible = false;
    }
});

// giving the name of the user to the div so it can display it
usernameDiv.textContent = username;

// adding event listener if username icon is clicked username will come up and go down as an effect
usernameImg.addEventListener('click', function() {
    // Scale up to 1.1
    usernameDiv.style.transform = 'scale(1.1)';
    // After a delay, scale back down to 1
    setTimeout(function() {
        usernameDiv.style.transform = 'scale(1)';
    }, 500); // 500 milliseconds (0.5 seconds)
});

// creating list of words for mario theme
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

//creating list of words for general theme
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

// giving chosen list in a variable so its easier to navigate
let chosenList;
if (themeChosen == "mario"){
    chosenList = wordListMario;
}else{
    chosenList = wordListGeneral;
}

//defining variables for creating the game functionality 
let wordClass = document.querySelector(".word")
let starClass = document.querySelector(".stars")
let wrongTries = 3;
let marioLeftValue = 0;
let animationCount = 0;
let winningDetect = 0;
const randNum =  Math.ceil(Math.random()*`${chosenList.length}`);

let wordGenerated = randomWord();
let hintGenerated = hintOfWord();
let hint = document.getElementById("hint");

//adding the text content of hint in the webpage
hint.textContent = hintGenerated;
let splitWord = wordGenerated.split("")
let winningDetectArr = splitWord.filter(element => element !== ' ');
let letterKeyboard = document.querySelectorAll(".letter-keyboard")


//creating an event listener such that whenever a letter is clicked it compares it with the letters in the word generated
letterKeyboard.forEach((e)=>{
    e.addEventListener("click", ()=> {
        e.style.pointerEvents="none";
        
        //if the split word consists of the letter in word generated it will make a sound and change background
        if (splitWord.includes(`${e.id}`)){
            if (randomSound() == 1){
                marioCorrectSound.play()
        }else{
                marioCorrectSound2.play()
        }
        e.style.backgroundImage = 'url("./assets/keyword-used-correct.png")';

        //loop for going through each span tag
            for (let i = 0; i < splitWord.length; i++) {
                    wordClass.querySelectorAll(`#${e.id}-letter`)[i].innerText = `${e.id} `;
                    winningDetect++;

                    //if the user has won, then animation will play and play again buttons will appear
                    if (winningDetect == winningDetectArr.length){
                        animateMarioJump10Times();
                        winningAudio.play();
                        parentKeyboard.style.pointerEvents = "none";

                        //the score gets updated in session storage by parsing
                        const correctWordScore = parseInt(sessionStorage.getItem('wins') || 0);
                        const correctScore = correctWordScore + 1;
                        sessionStorage.setItem('wins', correctScore);
                        setTimeout(()=>{
                        buttons.style.display = "flex";
                        },5200);
                    }
                }

        //if the clicked letter is not present in the splitword
        }else{
            e.style.backgroundImage = 'url("./assets/keyword-used-wrong.png")';
            wrongTries--;

            //changing color fo star to grey
            starClass.querySelectorAll(`#star-img`)[wrongTries].setAttribute("src", "./assets/star-grey.png");
            animationCount = 0;

            //if the user has got 3 times wrong
            if (wrongTries == 0){
                parentKeyboard.style.pointerEvents = "none";

                //the score gets updated in session storage by parsing
                const wrongWordScore = parseInt(sessionStorage.getItem('wrong') || 0);
                const wrongScore = wrongWordScore + 1;
                sessionStorage.setItem('wrong', wrongScore);

                //changes width and height of mario for jump effect
                animationCount = 10;
                marioImage.style.height = "100px"
                marioImage.style.width = "110px"
                marioLostAnimation();
                randomSound = 0;

                //moves 15vw ahead every time user gets letter wrong
                marioImage.style.transform = `translateX(15vw)`;
                setTimeout(()=>{
                marioImage.style.top = "25vh";
                },800)
                setTimeout(()=>{
                buttons.style.display = "flex";
                },2000)
            }
            animateMarioThreeTimes();
            marioLeftValue+=15;
            marioImage.style.transform = `translateX(${marioLeftValue}vw)`

            //random wrong sound is played
            if (randomSound() == 1){
                    marioWrongSound.play()
            }else{
                    marioWrongSound2.play()
            }
        }
    })
})

//creates span id's for word which user has to guess
let addingSpan ="";
for (let i = 0; i < wordGenerated.length; i++) {
    if (splitWord[i]==" "){
    addingSpan+=`<span id="${splitWord[i]}-letter"> / </span>`
    }else{
    addingSpan+=`<span id="${splitWord[i]}-letter">_ </span>`
    }
}
wordClass.innerHTML = addingSpan;

// when playagain button is clicked it will redirect to the same page
playAgainbtn.addEventListener("click",() => {
    window.open("./game.html", "_self")
})

// when end button is clicked it will redirect to gameover.html
endbtn.addEventListener("click",() => {
    window.open("./gameover.html", "_self")
})


//major functions of the page

//creating a function that will choose random no. to generate random sound
function randomSound(){
    let numRandom = Math.ceil(Math.random()*2)
    return numRandom
}

//creating function to generate random word of the list
function randomWord(){
    return `${chosenList[randNum-1].word}`
}

//creating function to call the hint of the word
function hintOfWord(){
    return `${chosenList[randNum-1].hint}`
}

//function for running animation of mario
function runMarioAnimation() {
    marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioWalkLarge.png");
    setTimeout(() => {
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioStandLarge.png");
    }, 280);
}

//function for running the above function 3 times
function animateMarioThreeTimes() {
    if (animationCount < 3) {
        runMarioAnimation();
        animationCount++;
        setTimeout(animateMarioThreeTimes, 500); // 650ms delay before the next animation
    }
}

//function to create an animation if the word guessed is wrong
function marioLostAnimation(){
    setTimeout(()=>{
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioJumpLarge.png");
    },400)
    setTimeout(()=>{
        marioLostHurt.play()
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioLoseLarge.png");
    },1800)
}

//function to create animation of mario jumping
function jumpMarioAnimation() {
    marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioJumpLarge.png");
    setTimeout(() => {
        marioImage.setAttribute("src", "./assets/Mario Walk - Fall/MarioStandLarge.png");
    }, 280);
}

//function to create animation of mario jumping 10 times
function animateMarioJump10Times() {
    if (animationCount < 10) {
        jumpMarioAnimation();
        animationCount++;
        setTimeout(animateMarioJump10Times, 500); // 650ms delay before the next animation
    }
}
