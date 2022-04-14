var userscore = 0;
var computerscore = 0;


scissors.addEventListener('click', function (e) {
    playerSelection = "Scissors";
    alertFunction();
    choices();
  });


paper.addEventListener('click', function (e) {
    playerSelection = "Paper";
    alertFunction();
    choices()
  });

rock.addEventListener('click', function (e) {
    playerSelection = "Rock";
    alertFunction();
    choices()
  });


function alertFunction() {

    while (count <= 5) {
    
    count++;
    const spr = ["Scissors", "Paper", "Rock"];

    const random = Math.floor(Math.random() * spr.length);
    computer = (random, spr[random]);
    

    if (playerSelection == "Scissors" && computer == "Paper") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        }

    if (playerSelection == "Scissors" && computer == "Rock") {
        computerscore++;
        console.log(computerscore);
        const computerscoreboard = document.querySelector('#computerscore');
        console.log(computerscoreboard);
        computerscoreboard.textContent = computerscore;
        }
    if (playerSelection == "Scissors" && computer == "Scissors") {
        alert("We've got a draw on our hands");
        }        




    if (playerSelection == "Paper" && computer == "Rock") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        }
    if (playerSelection == "Paper" && computer == "Scissors") {
            computerscore++;
            console.log(computerscore);
            const computerscoreboard = document.querySelector('#computerscore');
            console.log(computerscoreboard);
            computerscoreboard.textContent = computerscore;;
        }        
    if (playerSelection == "Paper" && computer == "Paper") {
        alert("We've got a draw on our hands");
        }   
        



    if (playerSelection == "Rock" && computer == "Scissors") {
        userscore++;
        console.log(userscore);
        const userscoreboard = document.querySelector('#userscore');
        console.log(userscoreboard);
        userscoreboard.textContent = userscore;
        }
    if (playerSelection == "Rock" && computer == "Paper") {
        computerscore++;
        console.log(computerscore);
        const computerscoreboard = document.querySelector('#computerscore');
        console.log(computerscoreboard);
        computerscoreboard.textContent = computerscore;;
        }        
    if (playerSelection == "Rock" && computer == "Rock") {
        alert("We've got a draw on our hands");
        }     
    }
    if(count = 5){
        console.log("Gameover")

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
      
