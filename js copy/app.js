/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase); 
// phrase.addPhraseToDisplay();
const startGameButton = document.getElementById('btn__reset');
let game = null;



startGameButton.addEventListener( 'click', () => {
    game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    
    // game.handleInteraction();

})

const qwerty = document.querySelectorAll('.key');

qwerty.forEach(letter => letter.addEventListener("click",  (e)=> {
    const selectedLetter = e.target.innerHTML;
    game.handleInteraction();
        // game.handleInteraction(selectedLetter)
        // return selectedLetter;

}));

