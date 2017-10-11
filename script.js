document.addEventListener('DOMContentLoaded', function() { 
    var randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(randomNumber);
    var guess = document.querySelector('#guess');
    var resultMessage = document.querySelector('#message');
    var clearButton = document.querySelector('.guess-button');
    var resetButton = document.querySelector('.reset-game-button');
    var guessButton = document.querySelector('.guess-button');
    var inputBox = document.querySelector('.input-box');

  
   guessButton.addEventListener('click', function() {
      event.preventDefault();
      var guess = parseInt(inputBox.value);
      document.getElementById('guess').innerHTML = guess;

    clearButton.addEventListener('click', function() {
      event.preventDefault();
    
      inputBox.value = '';
    })

    resetButton.addEventListener('click', function() {
      window.location.reaload();
    })
    

      if (randomNumber === guess) {
   
          resultMessage.innerText = "BOOM";

      } else if (randomNumber > guess && guess > 0) {

          resultMessage.innerText = "That is too low.";

      } else if (randomNumber < guess && guess < 101) {

          resultMessage.innerText = "That is too high.";
      }

      if (guess > 100 || guess < 1) {
   
          console.log('ERROR')
      }
   });

   

}, false);
    










  



