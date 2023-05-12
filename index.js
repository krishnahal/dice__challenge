    /*Player 1 dice*/

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice"+randomNumber1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
    /*Player 2 Dice */

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

/* Changing dynamically the h1 as the number changes  */
/* If Player 1 is highest execute this statement */

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
}

/* If in case Player 2 is highest execute this statement */

else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

/* If in case draw execute this statement */
else {
    document.querySelector("h1").innerHTML="Draw!";
}





