// script.js

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
    // Get the user's guess from the input field
    let userGuess = document.getElementById('guessField').value;
    guessCount++;
    
    // Convert userGuess to a number
    userGuess = Number(userGuess);
    
    // Get the elements to display messages
    let resultMessage = document.getElementById('resultMessage');
    let guessCountMessage = document.getElementById('guessCount');

    // Check if the user's guess is correct
    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the right number!';
        resultMessage.style.color = 'green';
        setGameOver();
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    }
    
    // Update the guess count
    guessCountMessage.textContent = `Guess count: ${guessCount}`;
}

function setGameOver() {
    // Disable the input field and button
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;

    // Create a button to restart the game
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    resetButton.onclick = resetGame;
    document.body.appendChild(resetButton);
}

function resetGame() {
    // Reset variables and UI elements
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessField').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('guessField').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessCount').textContent = '';
    document.querySelector('button').style.display = 'inline';
    
    // Remove the reset button
    let resetButton = document.querySelector('body button:nth-of-type(2)');
    document.body.removeChild(resetButton);
}
