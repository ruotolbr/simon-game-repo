# Simon
The game is called Simon. Simon displays a sequence of colors on each tile. The player must click the tiles in the same sequence as shown by the computer in order to pass the level. As levels progress, color sequences increase in length and complexity. 
## Why Simon?
I chose Simon because it is engaging and relies on a players memory. Unlike many other games that require the player to have technical skills in order to do well, Simon doesn't require that. It's a simple point and click game, but can still challenge your brain.
## Screenshots
Here is a screenshot of Simon upon startup.
[Alt text](https://imgur.com/JIoxKcE "Simon Startup")
## Code Snippet 
const redBtn = document.querySelector(".red");

const yellowBtn = document.querySelector(".yellow");

const blueBtn = document.querySelector(".blue");

const greenBtn = document.querySelector(".green");

const allButtons = document.querySelectorAll(".button");

const startLevel = document.querySelector("#begin");
startLevel.addEventListener("click", function () {
  document.querySelector("#start").style.color = "white";
  setTimeout(function () {
    document.querySelector("#start").style.color = "black";
  }, 3000);
});
let modal = document.querySelector("#modal");
const buttons = [redBtn, yellowBtn, blueBtn, greenBtn];

buttons[0].value = 0;
buttons[1].value = 1;
buttons[2].value = 2;
buttons[3].value = 3;
console.log(buttons);
let newSeq = [];
let numNotes = 3;

//Keep this ^^^ On page refresh the computer is selecting random values from buttons array! Yay :)
document.querySelector("#begin").onclick = computerTurn;

function computerTurn(button) {
  //function that changes number of index in array depending on how many times play choice matches computer sequence
  newSeq = Array(numNotes)
    .fill(1)
    .map(() => Math.floor(Math.random() * buttons.length));
  console.log(newSeq);
  newArray = buttons;

  const light = (button) => {
    return new Promise((start, finish) => {
      button.className += "lightup";
      setTimeout(() => {
        button.className = button.className.replace("lightup", "");
        setTimeout(() => {
          start();
        }, 400);
        start();
      }, 600);
      // console.log(button)
    });
  };
  const colorSeq = async (newSeq) => {
    for (let i of newSeq) {
      await light(buttons[i]);
    }
  };
  colorSeq(newSeq);
}
let restartButton = document.querySelector("#restartGame");
restartButton.addEventListener("click", function () {
  // alert("restart button clicked successfully!")
  location.reload();
});
// }
let nextBtn = document.getElementById("lvl1next");
// function trackClicks(clicks){
//     clicks = document.querySelector("#nextlvl1");
let playerArray = [];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    let value = buttons[i].value;
    playerArray.push(value);
  //
    if (playerArray.length === newSeq.length) {
      let isCorrect = true;
      for (i = 0; i < playerArray.length; i++) {
        if (playerArray[i] !== newSeq[i]) {
          console.log("wrong");
          modal.style.display = "block";
          isCorrect = false;
          return isCorrect;
        }
       //
      if (isCorrect === true) {
        numNotes++;
        modal.style.display = "block";
        document.getElementById("modaltext").innerText = "Sick! level up.";
        setTimeout(()=>{
            modal.style.display = "none";
        },2500)
        isCorrect = true;
        setTimeout(() =>{
        computerTurn()
      }, 3500);
      while (playerArray.length > 0) {
        playerArray.pop();
      console.log(playerArray);
    }}
  playerArray = [];
}
}
  })
}


