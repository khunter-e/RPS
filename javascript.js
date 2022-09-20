let compInt = 0;
let playerInt = 0;


function playStart(clicked_id){
    console.log(clicked_id);
    computerSelection();
    playerSelection();
    playerInt = clicked_id

}

function computerSelection(compChoice){
    const computerOptions = ['rock','paper','scissors'];
    let choiceNumber = Math.floor(Math.random()*3);
    let getComputerChoice = computerOptions [choiceNumber];
    compInt = choiceNumber;
    console.log(choiceNumber)
    

}

function playerSelection(){
    let win_array =  [
        [0, 2, 1], 
        [1, 0, 2], 
        [2, 1, 0]];
    let result = win_array[playerInt][compInt];
    if (result == 0){
        console.log("tie");
        }
        else if (result == 1){
        console.log("won");
        }
        else if (result == 2){
        console.log("lose");
        }
    }
