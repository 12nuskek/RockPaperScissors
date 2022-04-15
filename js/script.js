var userscore = 0;
var computerscore = 0;
var games = 0;


scissors.addEventListener('click', function (e) {
    console.log(games);
    if(games < 5){
        playerSelection = "Scissors";
        games++;
        alertFunction();
        choices();
    }if(games == 5 && userscore > computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over user Wins!";
            games = 0;
            userscore = 0;
            computerscore = 0;
        const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
    }if(games == 5 && userscore < computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over Computer Wins!";
        games = 0;
        userscore = 0;
        computerscore = 0;
        const userscoreboard = document.querySelector('#userscore');
        userscoreboard.textContent = userscore;
    const computerscoreboard = document.querySelector('#computerscore');
        computerscoreboard.textContent = computerscore;
        }
        if(games == 5 && userscore == computerscore){
            const gamecount = document.querySelector('#gamecount');
                gamecount.textContent = "We have a DRAW!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
            }   

  });


paper.addEventListener('click', function (e) {
    if(games <= 5){
        playerSelection = "Paper";
        games++;
        alertFunction();
        choices();
    }if(games == 5 && userscore > computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over user Wins!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
    }if(games == 5 && userscore < computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over Computer Wins!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
        }
        if(games == 5 && userscore == computerscore){
            const gamecount = document.querySelector('#gamecount');
                gamecount.textContent = "We have a DRAW!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
            }   

  });

rock.addEventListener('click', function (e) {
    if(games <= 5){
        playerSelection = "Rock";
        games++;
        alertFunction();
        choices();
    }if(games == 5 && userscore > computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over user Wins!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
    }if(games == 5 && userscore < computerscore){
        const gamecount = document.querySelector('#gamecount');
            gamecount.textContent = "Game Over Computer Wins!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
        }
        if(games == 5 && userscore == computerscore){
            const gamecount = document.querySelector('#gamecount');
                gamecount.textContent = "We have a DRAW!";
            games = 0;
            userscore = 0;
            computerscore = 0;
            const userscoreboard = document.querySelector('#userscore');
            userscoreboard.textContent = userscore;
        const computerscoreboard = document.querySelector('#computerscore');
            computerscoreboard.textContent = computerscore;
            }   
  });


function alertFunction() {

    const gamecount = document.querySelector('#gamecount');
    gamecount.textContent = 'Game '+ games;




    const spr = ["Scissors", "Paper", "Rock"];

    const random = Math.floor(Math.random() * spr.length);
    computer = (random, spr[random]);
    

    if (playerSelection == "Scissors" && computer == "Paper") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Scissor beats Paper user wins";
        container.appendChild(div);
        }

    if (playerSelection == "Scissors" && computer == "Rock") {
        computerscore++;
        console.log(computerscore);
        const computerscoreboard = document.querySelector('#computerscore');
        console.log(computerscoreboard);
        computerscoreboard.textContent = computerscore;
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Rock Beats Scissors Computer wins";
        container.appendChild(div);
        }
    if (playerSelection == "Scissors" && computer == "Scissors") {
     

        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Draw";
        container.appendChild(div);
        }        




    if (playerSelection == "Paper" && computer == "Rock") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Paper Beats Rock User Wins!";
        container.appendChild(div);
        }
    if (playerSelection == "Paper" && computer == "Scissors") {
            computerscore++;
            console.log(computerscore);
            const computerscoreboard = document.querySelector('#computerscore');
            console.log(computerscoreboard);
            computerscoreboard.textContent = computerscore;
            const container = document.querySelector('#timeline');
            const div = document.createElement('div');
            div.textContent = "Scissors beat paper computer Wins!";
            container.appendChild(div);
        }        
    if (playerSelection == "Paper" && computer == "Paper") {
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Draw";
        container.appendChild(div);
        }   
        



    if (playerSelection == "Rock" && computer == "Scissors") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Rock beats Scissors User Wins!";
        container.appendChild(div);
        }
    if (playerSelection == "Rock" && computer == "Paper") {
        computerscore++;
        console.log(computerscore);
        const computerscoreboard = document.querySelector('#computerscore');
        console.log(computerscoreboard);
        computerscoreboard.textContent = computerscore;;
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Paper beats Rock computer Wins!";
        container.appendChild(div);
        }        
    if (playerSelection == "Rock" && computer == "Rock") {
        const container = document.querySelector('#timeline');
        const div = document.createElement('div');
        div.textContent = "Draw";
        container.appendChild(div);
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
      
