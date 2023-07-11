 function getComputerChoice(){
   var num =  Math.floor(Math.random() * 4);
   if(num === 1){
    return 'rock';
   }else if(num ===2){
    return 'paper';
   }else {
    return 'scissors';
   }
 }


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Both picked ' + playerSelection + ' It is a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Human Wins';
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Human Wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Human Wins';
    } else{
        return 'Computer Wins';
    }
}

function game(){
    for(let i=0; i< 5; i++){
        var roundNum = i+1;
        console.log('Round ' + roundNum);
        var playerSelection =prompt('Pick Rock Paper or Scissors Round#' + roundNum).toLowerCase();
        var computerSelection = getComputerChoice().toLowerCase();
        console.log('Player plays: '+ playerSelection);
        console.log('Computer plays: '+ computerSelection)
        console.log(playRound(playerSelection,computerSelection));
     }
}

console.log(game());