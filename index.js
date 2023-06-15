
var randomNumber1 = parseInt(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];
var image1 = document.querySelector("img.img1");

image1.setAttribute("src", randomImageSource);


var randomNumber2 = parseInt(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img2").setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}
