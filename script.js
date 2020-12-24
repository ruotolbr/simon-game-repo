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
//i want this function to take the users clicks and put them into an array. Then if user Array === newSeq console.log("Level up!"), else "try again!"
// function trackClicks(clicks){
//     clicks = document.querySelector("#nextlvl1");
let playerArray = [];
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    let value = buttons[i].value;
    playerArray.push(value);
    console.log(playerArray);
    // console.log(newSeq)
    if (playerArray.length === newSeq.length) {
      let isCorrect = true;

      for (i = 0; i < playerArray.length; i++) {
        if (playerArray[i] !== newSeq[i]) {
          console.log("wrong");
          modal.style.display = "block";
          isCorrect = false;
          return isCorrect;
        }
      
      if (isCorrect === true) {
        console.log("correct");
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
  

 

 
// }

// }
