
// Random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

image1 = document.querySelector(".img1");

switch(randomNumber1){

  case 1:
      image1.setAttribute("src","/images/dice1.png");
      break;

  case 2:
      image1.setAttribute("src","/images/dice2.png");
      break;
}



console.log(randomNumber1);

