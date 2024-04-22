let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0 = true; //playerX, player0
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () =>{
    let turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
 box.addEventListener("click", ()=>{
    if(turn0){
        box.innerText="0";
        turn0 = false;
        box.disabled = true
    }
    else{
        box.innerText="X"
        box.style.color = "#4a0dbb"
        turn0 = true; 
        box.disabled = true
    }
    checkWinner();
 })
})
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
for (let box of boxes){
    box.disabled = true;
}
}
const showWinner = (winner) => {
  msg.innerText = `Congrataulations! The winner is ${winner}`
  msgContainer.classList.remove("hide");
  disableBoxes();
}
 const checkWinner = () =>{
  for( let pattern of winPatterns){
    let pos1Val =  boxes[pattern[0]].innerText
    let pos2Val =  boxes[pattern[1]].innerText
    let pos3Val =  boxes[pattern[2]].innerText
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val)
        }
    }
  }
 }
 newBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame)