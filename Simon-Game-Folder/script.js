// console.log("test")
const redBtn = document.querySelector(".red");

// redBtn.addEventListener("click", clickRed)
// console.log(redBtn)
const yellowBtn = document.querySelector(".yellow");
// yellowBtn.addEventListener("click", clickYellow)
// console.log(yellowBtn)
const blueBtn = document.querySelector(".blue");
// blueBtn.addEventListener("click", clickBlue)
// console.log(blueBtn)
const greenBtn = document.querySelector(".green");
// greenBtn.addEventListener("click", clickGreen)
// console.log(greenBtn);
// const allButtons = document.querySelectorAll(".button");

// redBtn = 1;
// yellowBtn = 2;
// blueBtn = 3;
// greenBtn = 4;
const player = {
  colorPicked: null,
};
const computer = {
  colorPicked: null,
};
const allButtons = document.querySelectorAll(".button");

const startLevel = document.querySelector("#begin");
startLevel.addEventListener("click", function () {
  //   alert("begin!");
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
// const randomColor = buttons[Math.floor(Math.random(buttons.value)* buttons.length)];
// console.log(Math.floor(Math.random()* buttons.length))
// console.log(randomColor)
//Keep this ^^^ On page refresh the computer is selecting random values from buttons array! Yay :)
document.querySelector("#begin").onclick = computerTurn;

function computerTurn(button) {
  // console.log(button.target)
  // let newArray = [];
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
        }, 200);
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

// document.querySelector("#nextlvl1").onclick = function(levelUp){

// }

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
          isCorrect = false;
           alert("now redirect to modal");
          
            
             modal.style.display = "block";
          return isCorrect;
         
        
          
           
           
        
      }
      if (isCorrect === true) {
        console.log("correct");
        numNotes++;
        computerTurn();
        modal.style.display = "block";
      }
      
          function nextLevel(newArray) {
            newArray = [];
            return newArray;
          }
          let answer = newArray.reduce(nextLevel);
          console.log(answer);
        } if (playerArray[i] !== newSeq[i]) {
          console.log("reset all arrays to empty");
        }
      playerArray = [];
    }
  });
}

//next i need to tell the computer if is correct ===true change style.color to "white"
//     let newArray = [];
//     newArray.push(add.value);
// }
//looping through all divs with the class button to check for click event
// trackClicks().onclick = function(e){
//     console.log(e.target)
//     alert("clicked div!");
// }
// trackClicks();
// // function lightUp(){
// //     document.getElementbyId("#redBtn").replace().backgroundcolor = "white"

// function factorial(color){
//     if(color == 1 || color == 2 || color == 3 || color == 4)
//         return randomColor(color)
//     }

// let randomColor = () => {
//   for (let i = 0; i <= buttons.length; i++) {
//     colorSeq = buttons[0]
//     let colorSeq = Math.floor(Math.random()*buttons.length);

//     if (color == "red") {
//         redBtn.style.backgroundColor = "white";
//       button.className = button.className = "active";
//       setTimeout(() => {
//         button.className = button.className.replace("active", buttons);
//         resolve();
//       }, 1500);
//     }
//     return i;
//   }
// };
//removeEVENTLISTEner
//toggling buttons
// const colorRandomizer = () => {
