let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;  //playerO ,playerX
//2D array
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],   
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        box.style.color="#b0413e";
        turnO=false;
    }else{
        box.innerText="X";
        box.style.color="black";
        turnO=true;
    }
    box.disabled=true;  

    checkwin();

    });   
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWin=(winner)=>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwin=()=>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWin(pos1val);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);