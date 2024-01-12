const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg h2");
const msgcontainer = document.querySelector(".msgcont");
const newgame = document.querySelector(".newgame");

var turn0= true;
var count = 0;

const winningc = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function disableboxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}

function enableboxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hidden");

    }
}

function resetgame(){
    enableboxes();
    count = 0;
}


function showwinner(pv1){
   msg.innerText = `Winner is ${pv1}`;
   msgcontainer.classList.remove("hidden");
   disableboxes();
}

function gameDraw(){
    msg.innerText = `Game Draw`;
    msgcontainer.classList.remove("hidden");
    disableboxes();
}

function checkwinner(){
    for(let pattern of winningc){
        let pv1 = boxes[pattern[0]].innerText;
        let pv2 = boxes[pattern[1]].innerText;
        let pv3 = boxes[pattern[2]].innerText;
        if(pv1 != "" && pv2 != ""){
            if(pv1 === pv2 && pv2 === pv3){
                console.log("winner"+pv1);
                showwinner(pv1);
                return true;
            }
        }

    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O"
            turn0 = false;
        }
        else{
            box.innerHTML="X"
            turn0 = true;
        }
    box.disabled=true;
    count++;
  let iswinner = checkwinner();
  if(count == 9 && !iswinner){
    gameDraw();
    }
    })
   
})

newgame.addEventListener("click",resetgame);