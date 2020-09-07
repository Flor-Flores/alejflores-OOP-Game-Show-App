/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;

  }


  /**
   * Display phrase on game board
   */
  addPhraseToDisplay(){
      const hiddenPhrase = document.querySelector('#phrase ul');

      for (let i = 0; i < game.activePhrase.length; i++) {
      const li = document.createElement('li');
      if( game.activePhrase[i] !== ' '){
          li.className = `hide letter ${game.activePhrase[i].toLowerCase()}`;
      } else{
          li.className = `space`;
      }
      li.innerHTML = game.activePhrase[i].toLowerCase();
      hiddenPhrase.appendChild(li);
      }
  }


  // /**
  // * Checks if passed letter is in phrase
  // * @param (string) letter - Letter to check */
  checkLetter(letter) {
      const hiddenPhrase = game.activePhrase.toLowerCase();
      for (let i = 0; i < hiddenPhrase.length; i++) {
         if (letter === hiddenPhrase[i]){
           return true;
         }
      }      
    

  };
    
  /**
  * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display
  */            

  showMatchedLetter(letter){
  const lettersToShow = document.querySelectorAll(`.${letter}`);
  for (let i = 0; i <lettersToShow.length; i++)
  if ( lettersToShow[i].classList.contains('hide') ){
      lettersToShow[i].classList.toggle('hide');
      lettersToShow[i].classList.add("show");
      lettersToShow[i].classList.add("flip-vertical-right");

  }
  
  }
  


}