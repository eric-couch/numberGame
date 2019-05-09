// Math.random()*100+1
let rnd = 0;
document.addEventListener("DOMContentLoaded", function() {
  rnd = Math.round(Math.random() * 100 + 1);
  //console.log(rnd);
});

function guess() {
  let ourGuess = document.querySelector("#guess");
  let list = document.querySelector("#listOfGuesses");

  let close = "";
  if (Math.abs(ourGuess.value - rnd) < 5) {
    close = " and you're hot";
  } else if (Math.abs(ourGuess.value - rnd) < 10) {
    close = " and you're warm";
  } else if (Math.abs(ourGuess.value - rnd) > 40) {
    close = " and you're ice cold";
  } else if (Math.abs(ourGuess.value - rnd) > 30) {
    close = " and you're cold";
  }

  let response;

  console.log(ourGuess.value);
  if (ourGuess.value > 100 || ourGuess.value < 1) {
    response = "outside 1-100. try again";
  } else {
    if (ourGuess.value > rnd) {
      response = "greater then number";
    } else {
      if (ourGuess.value == rnd) {
        response = "you win";
        close = "";
      } else {
        response = "less than number";
      }
    }
  }

  let guess = document.createElement("li");
  guess.innerText =
    "Your Guess was: " + ourGuess.value + " and it was " + response + close;
  list.appendChild(guess);
}
