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
    let selectedkey = e.target;
        game.handleInteraction(selectedkey)

}));



document.addEventListener('keydown', keyToButton);

    /**
    * Function to handle keyboard interaction.
    * takes the keydown event as parameter. Loops through the game's keyboard 
    * finds the button that corresponds to that key, and passes the button to the handleInteraction()
    *  
    */

function keyToButton(e) {
    if(game){
        let myKey = e.key.toLowerCase();
        let keyboardToKey = document.querySelectorAll('.keyrow button');
            keyboardToKey.forEach(element => {
                if(myKey === element.innerHTML){
                    myKey = element;
                    return myKey;
                }
            });            
        game.handleInteraction(myKey)
    }
}


let confettiPop = document.createElement('div');
confettiPop.id = 'confetti-div';
let overlay = document.querySelector('#overlay');
overlay.appendChild(confettiPop);

/**
* Function makes confetti if you win the game
*/

function makeConffeti (){
    for(let i = 0; i < 10; i++){
        let confetties = document.createElement('div');
        confetties.className = 'confetti';
        confettiPop.appendChild(confetties);
    }
}
 




