let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#ResetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;
    cheakWinner();
  });
});

const disableBoxes = () =>{
    for( let box of boxes) {
    box.disabled = true ;
    }
}
const enableBoxes = () =>{
    for( let box of boxes) {
    box.disabled = false ;
    box.innerText="";
    }
}

const showWinner = (winner) =>{
msg.innerText = `winner  is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}


const cheakWinner = () => {
  for (pattern of winPatterns) {
 let pos1val = boxes[pattern[0]].innerText;
  let pos2val = boxes[pattern[1]].innerText;
 let pos3val = boxes[pattern[2]].innerText;
 if(pos1val !="" && pos1val !="" && pos2val !="" )
    if(pos1val === pos2val  && pos2val === pos3val ){
        showWinner(pos1val);

    }
  }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);