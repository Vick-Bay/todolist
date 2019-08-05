
// First Random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;


//Select Image 1
image1 = document.querySelector(".img1");

//Manipulate Image 1
image1.setAttribute("src", "/images/dice" + randomNumber1 +  ".png");

// Second Random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


//Select Image 2
image2 = document.querySelector(".img2");

//Manipulate Image 2
image2.setAttribute("src", "/images/dice" + randomNumber2 +  ".png");

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}

else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins!"

}

else {

    document.querySelector("h1").innerHTML = "Draw!"

}


