function guessNumber() {
    const randomNumber = Math.floor(Math.random() *10) + 1;

    let userGuess = null;
    let attempts = 0;

    const logContainer = document.getElementById('logContainer');
    logContainer.innerHTML = '';
    logContainer.style.display = 'block';

    function addLog (message, className = 'log-info') {
        const p = document.createElement('p');
        p.className = className;
        p.textContent = message;
        logContainer.appendChild(p);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    addLog('Game started! Pick a number between 1 and 10:');

    while (userGuess !== randomNumber) {
        const input = prompt("Guess a nummber between 1 and 10:");

        if (input === null) {
            addLog('Game canceled by the user');
            return;
        }

        userGuess = parseInt(input.trim(), 10)

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Invalid input! Please enter a valid number between 1 to 10.");
            continue;
        }

        attempts ++;

        if (userGuess > randomNumber) {
            alert ("Too high! Try again.");
            addLog (`Attempt ${attempts}: ${userGuess} is too high!`, 'log-high');
        } else if (userGuess < randomNumber) {
            alert("Too low! Try again.");
            addLog(`Attempt ${attempts}: ${userGuess} is too low!`, log-low);  
        } else {
            alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`);
            addLog(`Success! ${userGuess} is correct! (Attempts: ${attempts})`, 'log--success');
        }
    }
}