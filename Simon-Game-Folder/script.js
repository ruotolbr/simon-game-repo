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

const startLevel = document.querySelector("#begin");
// redBtn = 1;
// yellowBtn = 2;
// blueBtn = 3;
// greenBtn = 4;
const player = {
    colorPicked: null
}
const computer = {
    colorPicked : null
}
const allButtons = document.querySelectorAll(".button")
// startLevel.addEventListener("click", function () {
// //   alert("begin!");
//   const buttons = [redBtn, yellowBtn, blueBtn, greenBtn];
//   document.querySelector("#start").style.color = "white";
//   const randomColor = buttons[Math.floor(Math.random()* buttons.length)];
//   computer.colorPicked = buttons[randomColor]; 
//   console.log("the computer picked " + computer.randomColor)
// });
startLevel.addEventListener("click", function () {
    //   alert("begin!");
      document.querySelector("#start").style.color = "white";
    });
const buttons = [redBtn, yellowBtn, blueBtn, greenBtn];

buttons[0].value = 1
buttons[1].value = 2
buttons[2].value = 3
buttons[3].value = 4
console.log(buttons)
let newSeq = [];
// const randomColor = buttons[Math.floor(Math.random(buttons.value)* buttons.length)];
// console.log(Math.floor(Math.random()* buttons.length))
// console.log(randomColor)
//Keep this ^^^ On page refresh the computer is selecting random values from buttons array! Yay :)
document.querySelector("#begin").onclick = function (button){
    // console.log(button.target) 
    // let newArray = [];
    numnotes = 3 //function that changes number of index in array depending on how many times play choice matches computer sequence
 newSeq = Array(numnotes).fill(1).map( () => Math.floor(Math.random()*buttons.length))
    console.log(newSeq)
    newArray = buttons
    // computer.colorPicked = randomColor.value
    // console.log("the computer picked " + randomColor.value); 

    const light = button => {
        return new Promise((start, finish)=> {
            button.className += 'lightup'; 
            setTimeout(() => {
                button.className = button.className.replace(
                    "lightup", 
                    ""
                );
              start();       
            }, 600);
            // console.log(button)
        });
       
    };
    const colorSeq = async (newSeq) => {
        for(let i of newSeq){  
          await light(buttons[i])  
          console.log(i)
        }
        // if (player.colorPicked === (newSeq[i]){
        //     console.log("level up!")
        // }else{
        //     console.log("Rats! Try again?")
        // }
        
    // }   
}; 
    colorSeq(newSeq);
}
// document.querySelector("#nextlvl1").onclick = function(levelUp){
    
// } 

//i want this function to take the users clicks and put them into an array. Then if user Array === newSeq console.log("Level up!"), else "try again!"
// function trackClicks(clicks){
//     clicks = document.querySelector("#nextlvl1");
//     let newArray = [];
//     newArray.push(add.value);
// }
//looping through all divs with the class button to check for click event

for(let i = 0; i < buttons.length; i ++){
    console.log(i)
    buttons[i].addEventListener("click", function(value){
    value = buttons[i].value
    console.log("you clicked on button " + value)
    let newArray = [];
      newArray.push(value)
    console.log(newArray)
    if(newArray === newSeq){
        //this will be a function that lights up levelup button and after user clicks on it, adds 1 to num notes in new seek, also it displays text saying congrats! 

    }
   })
}
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

