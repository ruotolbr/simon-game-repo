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
randomColorSeq()= math.Floor(Math.Random())
// const randomColor = buttons[Math.floor(Math.random(buttons.value)* buttons.length)];
// console.log(Math.floor(Math.random()* buttons.length))
// console.log(randomColor)
//Keep this ^^^ On page refresh the computer is selecting random values from buttons array! Yay :)
document.querySelector("#begin").onclick = function (button){
    // console.log(button.target) 
    let newArray = [];
    newArray = buttons[Math.floor(Math.random()* buttons.length)];
    // computer.colorPicked = randomColor.value
    console.log(newArray)
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
            console.log(button)
        });
    };
    const colorSeq = async () => {
        for(let button of buttons){
        await light(button)
        }   
    }; 
    colorSeq();

}
// // function lightUp(){
// //     document.getElementbyId("#redBtn").replace().backgroundcolor = "white"
const allButtons = document.querySelectorAll(".button")

for (i of allButtons) {
  i.addEventListener("click", function () {
    alert("clicked!");
    if(randomColor.value == 1){
        console.log("the computer picked red!")
    }else if(randomColor.value == 2){
        console.log("the computer picked yellow!")
        }else if(randomColor.value == 3){
            console.log("the computer picked blue!")
        }else if(randomColor.value ==4){
            console.log("the computer picked green!")
        }
        
    });
}
    // }else if(randomColor.value == 2){
    //     document.querySelector("#yellowBtn").style.backgroundColor ="white"
    //     console.log("the computer picked yellow!")
    // }else if(randomColor.value == 3){
    //     document.querySelector("#blueBtn").style.backgroundColor ="white"
    //         console.log("the computer picked blue!")
    // }else if(randomColor.value ==4){
    //     document.querySelector("#greenBtn").style.backgroundColor ="white"
    //         console.log("the computer picked green!")
    // }




        
    // redBtn.style.backgroundColor = "white";
    // document.querySelector(allButtons).style.backgroundColor = "white"
    // console.log("function working!");
// }   };

        // const randomColor = buttons[Math.floor(Math.random()* buttons.length)];
        



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

// const colorSeq = [redBtn, yellowBtn, blueBtn, greenBtn];
// const lightUp = button => {
//     return new Promise((resolve, reject) => {
//         button.className = button.className ="active";
//         setTimeout(() => {
//             button.className = button.className.replace("active", buttons);
//             resolve();
//         }, 1500);
//     });
// };
// const sequencer = async () => {
//     for (let button of colorSeq) {
//         await lightUp(button);
//     }
// };
// sequencer();

// const colorRandomizer = () => {
//     const buttons =[redBtn, yellowBtn, blueBtn, greenBtn];

// return buttons[parseInt(Math.random() * buttons.length)];
// };
//     document.getElement("button");
// buttonClicked.addEventListener("click", changeBtnColor, false);
// .style.backgroundColor = colorArr[0]
// function changeBtnColor(e){
//     if (e.target !== e.currentTarget){
//         let clickedBtn = e.target.id
//     if(e.target.id == "#red"){
//         clickedBtn.style.backgroundColor = "red"
//     }else {
//         if (e.target.id == "#blue", "#red", "#yellow", "#green"){
//             clickedBtn.style.hover
//             console.log(clickedBtn)
//         }else{
//             if(e.target.id == "#yellow"){
//                 clickedBtn.style.backgroundColor = "white"
//             }else{
//                 if(e.target.id =="#green"){
//                     clickedBtn.style.backgroundColor = "lime"
//                 }

//             }
//         }
//     }
//         for(i=0; i < colorArr.length; i++){
//             e.target.style.backgroundColor = "white";
//         }
//     }
//    e.StopPropagation();
// }
// changeBtnColor(buttonClicked)
// function clickRed() {
//     redBtn.style.backgroundColor = "red"
//
// }

// function changeback(){
//     document.querySelector("#redBtn").style.backgroundColor = "firebrick"
//     document.querySelector("#yellowBtn").style.backgroundColor = "gold"
//     document.querySelector("#blueBtn").style.backgroundColor = "blue"
//     document.querySelector("#greenBtn").style.backgroundColor = "green"
// }
