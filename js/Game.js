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
            'Vice Versa'
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
    checkForWin(){
    //This method checks to see if the player has revealed all of the letters in the active phrase.

    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife(){
    //This method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images` folder)
    // and increments the `missed` property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method.

    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game */
    gameOver(){
    // This method displays the original start screen overlay, and depending on the outcome of the game, 
    //updates the overlay `h1` element with a friendly win or loss message, 
    //and replaces the overlay’s `start` CSS class with either the `win` or `lose` CSS class.


    }


    // handleInteraction(selectedLetter) {
    //     let letter = selectedLetter;
    //     const phrase = new Phrase(this.activePhrase); 
    //     phrase.checkLetter(letter);
    // }
    handleInteraction() {
        const phrase = new Phrase(this.activePhrase); 
        const hiddenLetters = document.querySelectorAll('.hide');
        const hiddenLettersArray = [];
    
        for(let i = 0; i < hiddenLetters.length; i++) {
            hiddenLettersArray.push(hiddenLetters[i].innerHTML.toLowerCase());
        }
        phrase.checkLetter(hiddenLettersArray);

    }

    
  }
  