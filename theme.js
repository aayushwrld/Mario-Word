// definig all variables
let homeBtn = document.getElementById("home-button-image");
const nameInputLabel = document.getElementById('label');
let pressEnter = document.getElementById('username-submission');
let theme1btn = document.getElementById('theme-1');
let theme2btn = document.getElementById('theme-2');
let theme = document.querySelector(".choose-theme")
sessionStorage.setItem("theme", "")
let scoreCorrect = sessionStorage.setItem("wins", 0)
let scoreIncorrect = sessionStorage.setItem("wrong", 0)
let bgmAudio = new Audio("./assets/background-music.mp3")
let marioImage = document.getElementById("mario");


//adjusting volumes of the webpage
bgmAudio.volume = 0.6;
bgmAudio.play()
bgmAudio.loop = true

//giving pointerEvents none so when hovered it does not work
theme.style.pointerEvents = "none";

//pressEnter function will display when input is on focus
pressEnter.style.display = 'none';
theme.style.opacity = 0;

// Updates marioImage source to marioWalkLarge and adjusts paddingTop for bouncy effect
setInterval(()=>{
    setTimeout(()=>{
        marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioStandLarge.png");
        marioImage.style.paddingTop="8px";
    },300)
    marioImage.setAttribute("src","./assets/Mario Walk - Fall/MarioWalkLarge.png");
    marioImage.style.paddingTop="12px";
},600)

// when home button is clicked it will redirect to index.html
homeBtn.addEventListener("click",() => {
    window.open("./index.html", "_self")
})


// declaring the variables for input elements
const nameInput = document.getElementById('username');
const nameInputContainer = document.querySelector('.username-group');
const nameInputed = document.getElementById("username-filled")
// Check if the name is already stored in sessionStorage
const storedName = sessionStorage.getItem('userName');

//when window is loaded it focuses to the input by default
window.onload = function(){
    nameInput.focus()
}

//if username is present in the session storage or previously entered
if (storedName) {
    // If the name is already stored, hide the input box
    nameInputContainer.style.display = 'none';
    theme.style.opacity = 1;
    theme.style.pointerEvents = "auto";
    nameInputed.innerHTML = "You have already entered your name! <br> You can proceed with the game!"
} 
else {

    // If the name is not stored, detect for Enter key press
    nameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && nameInput.value.trim() !== '') {
            // When Enter is pressed and a name is entered, save it in sessionStorage
            const userName = nameInput.value.trim();
            sessionStorage.setItem('userName', userName);
            nameInputContainer.style.display = 'none'; 
            nameInputed.innerHTML = "You have entered your name!<br> Proceed with the game!";
            pressEnter.style.display = 'none';
            theme.style.opacity = 1;   
            theme.style.pointerEvents = "auto";

        }
    });
}

// Add an event listener to the input for handling user input
nameInput.addEventListener('input', function () {
    // Check if the input has a value (user has started typing)
    if (nameInput.value.trim() !== '') {
        // Remove the label by hiding it
        nameInputLabel.style.display = 'none';
        pressEnter.style.display = 'block';
    } else {
        // If the input is empty, display the label
        nameInputLabel.style.display = 'block';
        pressEnter.style.display = 'none';
    }
});

theme1btn.addEventListener("click",() => {
    window.open("./game.html", "_self")
    sessionStorage.setItem("theme", "general")
})
theme2btn.addEventListener("click",() => {
    window.open("./game.html", "_self")
    sessionStorage.setItem("theme", "mario")

})

// Get references to the elements
let questionButtonImage = document.getElementById("question-button-image");
let questionsAnswersDiv = document.querySelector(".questions-answers");
questionsAnswersDiv.style.opacity = 0;

let isVisible = false;

// Add a click event listener to the question button image
questionButtonImage.addEventListener("click", function() {
    // Toggle the visibility by changing opacity
    if (isVisible) {
        questionsAnswersDiv.style.opacity = 0;
        isVisible = false;
    } else {
        questionsAnswersDiv.style.opacity = 1;
        isVisible = true;
    }
});

document.addEventListener("click", function(e) {
    if (isVisible && !questionsAnswersDiv.contains(e.target) && e.target !== questionButtonImage) {
        questionsAnswersDiv.style.opacity = 0;
        isVisible = false;
    }
});
