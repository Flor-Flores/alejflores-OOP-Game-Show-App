/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startGameButton = document.getElementById('btn__reset');
let game = null;

startGameButton.addEventListener( 'click', () => {
    game = new Game();
    game.startGame();


})

const qwerty = document.querySelectorAll('.key');

qwerty.forEach(letter => letter.addEventListener("click",  (e)=> {
    const selectedkey = e.target;
        game.handleInteraction(selectedkey)

}));















