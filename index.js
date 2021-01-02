
var randomNumber1 = Math.floor( Math.random() * 6) + 1;  //random number for dice 1
var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";//dice image for the  randomNumber1
document.querySelector(".img-1").setAttribute("src",randomDiceImg1);//changing the image of the dice 1

var randomNumber2 = Math.floor( Math.random() * 6) + 1;//random number for dice 2
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";//dice image for the randomNumber2
document.querySelector(".img-2").setAttribute("src",randomDiceImg2);//changing the image of the dice 2

//to change the heading to result of the dise role
//check if the randomNumber1 is equal to randomNumber2
if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
//check if randomNumber1 is greater than randomNumber2
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="🎉Player 1 Wins!";
}
//else the randomNumber2 is greater than randomNumber1
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!🎉";
}
