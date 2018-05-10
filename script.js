var numberGuess = document.querySelector('.guess-input');
var guessButton = document.querySelector('.form-guess');
var lastGuessWas = document.querySelector('.last-guess-was');
var displayGuess = document.querySelector('.display-guess');
var guessHint = document.querySelector('.guess-hint');
var clearButton = document.querySelector('.form-clear');
var resetButton = document.querySelector('.reset-button');
var customLimits = document.querySelector('.custom-limits');
var minInput = document.querySelector('.new-min');
var maxInput = document.querySelector('.new-max');
var minValue = 1;
var maxValue = 100;
var randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);

minInput.addEventListener('keyup', function() {
  var parsedMin = parseInt(minInput.value);
  if (minInput.value || minInput.value == 0) {
    minValue = minInput.value;
  } else {
    minValue = 1;
  }
})

maxInput.addEventListener('keyup', function() {
  var parsedMax = parseInt(maxInput.value);
  if (maxInput.value || maxInput.value == 0) {
    maxValue = maxInput.value;
  } else {
    maxValue = 100;
  }
})

guessButton.addEventListener('click', function() {
  event.preventDefault();
  var parsedNumber = parseInt(numberGuess.value);
  if (parsedNumber < minValue || parsedNumber > maxValue) {
    lastGuessWas.innerText = parsedNumber + " is invalid!";
    guessHint.innerText = "Choose a number between " + minValue + " and " + maxValue + "!";
  } else if (parsedNumber < randomNumber) {
    lastGuessWas.innerText = "Your last guess was";
    displayGuess.innerText = parsedNumber;
    guessHint.innerText = "That's too low!";
  } else if (parsedNumber > randomNumber) {
    lastGuessWas.innerText = "Your last guess was";
    displayGuess.innerText = parsedNumber;
    guessHint.innerText = "That's too high!";
  } else if (parsedNumber === randomNumber) {
    lastGuessWas.innerText = "Your last guess was";
    displayGuess.innerText = parsedNumber;
    guessHint.innerText = "That's correct! You win!";
    unhideCustomLimits()
  } else if(isNaN(parsedNumber)) {
    lastGuessWas.innerText = "Please give a valid input!";
    guessHint.innerText = "That's not a number!";
  }
});

function unhideCustomLimits() {
  customLimits.classList.add('custom-limits-show');
}

clearButton.addEventListener('click', function clearInput() {
  document.querySelector('.guess-input').value = "";
});

resetButton.addEventListener('click', function resetGame() {
  window.location.reload();
});

numberGuess.addEventListener('keyup', function buttonDisable() {
  if (numberGuess.value === "") {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  };
})

















