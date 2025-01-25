
// -------------------------------------------------------------------------------------------

const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const enteredNumber = document.querySelector(".guessfield");
const Button = document.querySelector(".btn");
const playerGuesses = document.querySelector(".guesses");
const playerRemainingGuesses = document.querySelector(".last-result");
const result = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;
// let maxGuesses = 10;

if (playGame) {
    Button.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(enteredNumber.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please, enter a valid number.");
    }
    else if (guess < 1) {
        alert("Enter number greater than 1.");
    }
    else if (guess > 100) {
        alert("Enter number less than 100.");
    }
    else {
        prevGuess.push(guess);
        numGuess++;

        if (numGuess === 11) {
            displayMessage(`Beta tu nikal tera ho gya. The correct number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Sabaash Beta..! tune sahi guess kiya! Papa ka naam roshan karega. The number is ${randomNumber}.`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Beta, number bohot chhota hai thoda bada guess kar.`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Beta, number bohot bada hai thoda apni aukaat ke hisab se guess kar.`);
    }
}

function displayGuess(guess) {
    enteredNumber.value = ''; // Clear the input field
    playerGuesses.innerHTML += `${guess} `; // Display guesses
    playerRemainingGuesses.innerHTML = `${11 - numGuess}`; // Display remaining guesses
}

function displayMessage(message) {
    result.innerHTML = `<h2>${message}</h2>`; // Display message
}

function endGame() {
    Button.setAttribute("disabled", "true"); // Disable the button after the game ends
}
