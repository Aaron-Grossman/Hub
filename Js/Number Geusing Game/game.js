var secretNumer = 31;

var guess = prompt("Guess a Numer");
// alert("You guessed " + guess + " right?");

if(Number(guess) === secretNumer) {
	alert(guess + " is CORRECT!!!");
}

else if (Number(guess) > secretNumer){
	alert(guess + " is to HIGH!!!")
}

else {
	alert(guess + " is to LOW!!!")
}









 // else{
// 	alert("Wrong Try Aging")
// }