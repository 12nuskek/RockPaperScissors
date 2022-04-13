

function alertFunction() {

    const spr = ["Scissors", "Paper", "Rock"];

    const random = Math.floor(Math.random() * spr.length);
    computer = (random, spr[random]);
    

    if (playerSelection == "Scissors" && computer == "Paper") {
        alert("Scissors beats paper user wins!");
        }
    if (playerSelection == "Scissors" && computer == "Rock") {
        alert("Rock beats Scissors Computer wins!");
        }
    if (playerSelection == "Scissors" && computer == "Scissors") {
        alert("We've got a draw on our hands");
        }        

    if (playerSelection == "Paper" && computer == "Rock") {
        alert("Paper beats Rock User wins!");
        }
    if (playerSelection == "Paper" && computer == "Scissors") {
            return "Scissors beats paper Computer wins!";
        }        
    if (playerSelection == "Paper" && computer == "Paper") {
        alert("We've got a draw on our hands");
        }   
        
    if (playerSelection == "Rock" && computer == "Scissors") {
        alert("Rock beats Scissors User wins!");
        }
    if (playerSelection == "Rock" && computer == "Paper") {
        alert("paper beats paper rock computer wins!");
        }        
    if (playerSelection == "Rock" && computer == "Rock") {
        alert("We've got a draw on our hands");
        }     
    }
      

function choices() {

        if (playerSelection == "Rock") {
            
        const container = document.querySelector('#rock');
            container.classList.add('selected');

        }   
        if (playerSelection == "Scissors") {
            
        const container = document.querySelector('#scissors');
             container.classList.add('selected');
    
            }   

        if (playerSelection == "Paper") {
            
        const container = document.querySelector('#paper');
              container.classList.add('selected');
        
                }   
        

        if (computer == "Rock") {
            
        const container = document.querySelector('#computer_rock');
            container.classList.add('selected');
    
            }       
        if (computer == "Scissors") {
            
        const container = document.querySelector('#computer_scissors');
            container.classList.add('selected');
            
           }       
        if (computer == "Paper") {
            
        const container = document.querySelector('#computer_paper');
             container.classList.add('selected');
                    
                            }       
                                

    }
      
scissors.addEventListener('click', function (e) {
        console.log(e);
        playerSelection = "Scissors";
        alertFunction();
        choices();
      });


paper.addEventListener('click', function (e) {
        console.log(e);
        playerSelection = "Paper";
        alertFunction();
        choices()
      });

rock.addEventListener('click', function (e) {
        console.log(e);
        playerSelection = "Rock";
        alertFunction();
        choices()
      });
