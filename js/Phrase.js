/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;

  }

  addPhraseToDisplay(){
    const hiddenLetters = document.querySelector('#phrase ul');

    for (let i = 0; i < game.activePhrase.length; i++) {
      const li = document.createElement('li');
      if( game.activePhrase[i] !== ' '){
        li.className = `hide letter ${game.activePhrase[i]}`;
      } else{
        li.className = `space`;
      }
      li.innerHTML = game.activePhrase[i];
      hiddenLetters.appendChild(li);
    }
  }


/**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check */
  // checkLetter(letter) {
  //   //Checks to see if the letter selected by the player matches a letter in the phrase.
  //   console.log(`I am checking the letter ${letter}`);
  //   console.log(phrase)
  //   let phraseLetters = phrase.children('li');
  //   console.log(phrase.length)
        

  // }  


  checkLetter(hiddenLettersArray){
    let letter = event.target.innerHTML;
    const matches = [];

      for (let i = 0; i < hiddenLettersArray.length; i++) {
        if (hiddenLettersArray[i] === letter){
          matches.push(letter);
        }
      }

      if (matches.length > 0){
        this.showMatchedLetter(letter);
      }else{
        console.log('take a heart away')
      }

  }

  /**
  * Displays passed letter on screen after a match is found * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
  //Reveals the letter(s) on the board that matches the player's selection. 
  //To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter
  // and replace each selected element's `hide` CSS class with the `show` CSS class
  const lettersToShow = document.querySelectorAll(`.${letter}`);
    
  for (let i = 0; i <lettersToShow.length; i++)
  if ( lettersToShow[i].classList.contains('hide') ){
    lettersToShow[i].classList.toggle('hide');
    lettersToShow[i].classList.add("show");
  }

  }
}
  