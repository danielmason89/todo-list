// generate a random number Done
// generate give the user the ability to guess Done
// If they guess and they are wrong, ask them again (hint);
// If they win - say that they won

function guessGame() {
    let randomNr = Math.floor(Math.random() * 10 + 1);
    let guess;

    do {
        randomNr = Math.floor(Math.random() * 10 + 1)
        guess = prompt('Guess a Number Between 1 and 10');
        console.log(guess, randomNr);
        if (randomNr > guess) {
            console.log('Your Guess was too Low !!');
        } else if (randomNr < guess) {
            console.log('Your Guess was too High !!');
        }
    } while (guess != randomNr);
    console.log('You Won  !!');
}

guessGame();