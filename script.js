
function playRound(playerSelection) {

    const spr = ["Scissors", "Paper", "Rock"];

    const random = Math.floor(Math.random() * spr.length);
    computer = (random, spr[random]);
    
    if (playerSelection == "Scissors" && computer == "Paper") {
            return "Scissors beats paper user wins!";
        }
    if (playerSelection == "Scissors" && computer == "Rock") {
        return "Rock beats Scissors Computer wins!";
        }
    if (playerSelection == "Scissors" && computer == "Scissors") {
            return "We've got a draw on our hands";
        }        

    if (playerSelection == "Paper" && computer == "Rock") {
            return "Paper beats Rock User wins!";
        }
    if (playerSelection == "Paper" && computer == "Scissors") {
            return "Scissors beats paper Computer wins!";
        }        
    if (playerSelection == "Paper" && computer == "Paper") {
            return "We've got a draw on our hands";
        }   
        
    if (playerSelection == "Rock" && computer == "Scissors") {
            return "Rock beats Scissors User wins!";
        }
    if (playerSelection == "Rock" && computer == "Paper") {
            return "paper beats paper rock computer wins!";
        }        
    if (playerSelection == "Rock" && computer == "Rock") {
            return "We've got a draw on our hands";
        }     
        else{
            return "Something aint right try again"
        }
        
    }