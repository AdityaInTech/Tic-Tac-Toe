let buttons = document.querySelectorAll(".button")
let reset = document.querySelector(".reset")
let newGame = document.querySelector("#new")
let msgbox = document.querySelector(".msgbox")
let msg = document.querySelector("#msg");

let playerO = true;

let winning_ptrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    playerO = true;
    enabledbtn();
    msgbox.classList.add("hide");
    count = 0;
}

const disabledbtn = () => {
    for (let button of buttons){
        button.disabled = true;
    }
};
const enabledbtn = () => {
    for (let button of buttons){
        button.disabled = false;
        button.innerText = ""
    }
};
const show_Winner = (winner) =>{
    if(winner === "Draw"){
        msg.innerHTML=`Oops, Game is ${winner}`;
        msgbox.classList.remove("hide");
        disabledbtn();
    }
    else{
        msg.innerHTML=`Congratulations,\nWinner is ${winner}`;
        msgbox.classList.remove("hide");
        disabledbtn();
    }
};

let count = 0;
buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        if (playerO === true){
            button.innerText = 'O';
            playerO = false;
        }
        else{
            button.innerText ='X';
            playerO = true;
        }button.disabled = true;
        count++;
        checkWinner();
    });
});

const checkWinner = () => {
    console.log(count);
    for(let ptrn of winning_ptrn){
        let pos1val = buttons[ptrn[0]].innerText;
        let pos2val = buttons[ptrn[1]].innerText;
        let pos3val = buttons[ptrn[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val == pos2val && pos2val == pos3val){
                show_Winner(pos1val);
            }
            if (count === 9){
                let draw = "Draw";
                show_Winner(draw);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);