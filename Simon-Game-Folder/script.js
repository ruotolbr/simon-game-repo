// console.log("test")
let redBtn = document.querySelector("#redBtn")
// redBtn.addEventListener("click", clickRed)
// console.log(redBtn)
const yellowBtn=document.querySelector("#yellowBtn")
// yellowBtn.addEventListener("click", clickYellow)
// console.log(yellowBtn)
let blueBtn= document.querySelector("#blueBtn")
// blueBtn.addEventListener("click", clickBlue)
// console.log(blueBtn)
let greenBtn=document.querySelector("#greenBtn")
// greenBtn.addEventListener("click", clickGreen)
// console.log(greenBtn);
let allButtons = document.querySelectorAll(".button")

let startLevel = document.querySelector("#begin")
const buttons =[redBtn, yellowBtn, blueBtn, greenBtn];
startLevel.addEventListener("click",function() {
    alert("begin!")
    initiateSeq = function(){
    return buttons[parseInt(Math.random() * buttons.length)]; 
    }
});
for (i of allButtons){
    i.addEventListener("click", function(){
        alert("clicked!")
    })
}
const colorRandomizer = () => {
    
};
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

function changeback(){
    document.querySelector("#redBtn").style.backgroundColor = "firebrick"
    document.querySelector("#yellowBtn").style.backgroundColor = "gold"
    document.querySelector("#blueBtn").style.backgroundColor = "blue"
    document.querySelector("#greenBtn").style.backgroundColor = "green"
}
