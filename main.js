console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped queen");
var cardThree = cards[3];
cardsInPlay.push(cardThree);
console.log("User flipped king");
var cardFour = cards[2];
cardsInPlay.push(cardFour);
console.log("User flipped king");
console.log(cardsInPlay);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You have a match!");
} else {
	alert("Sorry, try again.");
}





