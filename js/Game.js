/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null ;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game */
   createPhrases() {
    const phrases = [
        'A Chip on Your Shoulder',
        'Beating Around the Bush',
        'Yada Yada',
        'Under Your Nose',
        'Vice Versa',
        'The quick brown fox jumps over the lazy dog'

    ];
    return phrases;

};

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[ Math.floor(Math.random() * this.phrases.length)];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase().toLowerCase();
        const phrase = new Phrase(this.activePhrase); 
        phrase.addPhraseToDisplay();

    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if(hiddenLetters.length === 0 ){
            this.gameOver(true);
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        this.missed++
        const heartBreak = document.querySelector(".tries > img[src='images/liveHeart.png']");
        heartBreak.src = 'images/lostHeart.png';        
        if(this.missed === 5 ){
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message   overlay
    * @param {boolean} gameWon - Whether or not the user won the game */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        let gameOverMessage = document.getElementById('game-over-message');

        overlay.style.display = 'block';

        function gameReset() {
            const hiddenPhrase = document.querySelector('#phrase ul');
            hiddenPhrase.innerHTML = '';
            let enableKeys = document.querySelectorAll('.keyrow button');

            enableKeys.forEach(element => {
                element.className = 'key';
                element.disabled = false;
            });            

            game.missed = 0;
            const restoreLives = document.querySelectorAll(".tries > img");
            restoreLives.forEach(element => {
                element.src = 'images/liveHeart.png';
            });            
            game = null;
        }
        
        if(gameWon){
            gameOverMessage.innerHTML = 'Whats That Phrase? The Victory is Yours!';
            overlay.className = "win";
            makeConffeti();
            gameReset();
        } 
        if(!gameWon) {
            gameOverMessage.innerHTML = 'Whats That Phrase? did someone skip breakfast of champions! (you lost!)';
            overlay.className = "lose";
            let cleanConfetti = document.querySelector('#confetti-div');
                cleanConfetti.innerHTML = '';
            gameReset();

        }

    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element */
    handleInteraction(selectedKey) { 
        const phrase = new Phrase(this.activePhrase.toLowerCase()); 
        const selectedLetter = selectedKey.innerHTML;
        selectedKey.disabled = true;

        if(phrase.checkLetter(selectedLetter)){
            phrase.showMatchedLetter(selectedLetter);
            selectedKey.className= 'chosen';

            this.checkForWin();
        }else{
            selectedKey.className= 'wrong';
            this.removeLife();
        }
    };

}