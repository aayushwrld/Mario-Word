let homeBtn = document.getElementById("home-button-image")
const nameInputLabel = document.getElementById('label');
let pressEnter = document.getElementById('username-submission')

pressEnter.style.display = 'none';


homeBtn.addEventListener("click",() => {
    window.open("./index.html", "_self")
})

// declaring the variables for input elements
const nameInput = document.getElementById('username');
const nameInputContainer = document.querySelector('.username-group');
const nameInputed = document.getElementById("username-filled")
// Check if the name is already stored in sessionStorage
const storedName = sessionStorage.getItem('userName');

if (storedName) {
    // If the name is already stored, hide the input box
    nameInputContainer.style.display = 'none';
    nameInputed.innerHTML = "You have already entered your name! <br> You can proceed with the game!"
} else {
    // If the name is not stored, listen for Enter key press
    nameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && nameInput.value.trim() !== '') {
            // When Enter is pressed and a name is entered, save it in sessionStorage
            const userName = nameInput.value.trim();
            sessionStorage.setItem('userName', userName);
            nameInputContainer.style.display = 'none'; 
            nameInputed.innerHTML = "You have entered your name!<br> Proceed with the game!";
            pressEnter.style.display = 'none';

    // Hide the input box
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

