console.log ("hello world")
      
      function computerPlay ( ) {
        const choice =  ["rock", "paper", "scissors"];
      let choices = choice[Math.floor(Math.random()*choice.length)];
        return choices 
        console.log (choices) 
      }
       
      function playerSelection () { 
         let playerchoice = prompt (" Pick Between Rock Paper and Scissors")
         let playerchoiceI = playerchoice.toLowerCase()
         
         return playerchoiceI
        
      }

      function playRound (playerSelection, computerSelection) {
          if (playerSelection ==  computerSelection ){
          console.log("you draw")
          } 
          else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log ("computer wins")
          }
          else if (playerSelection == "rock" && computerSelection == "paper") {
            console.log ("computer wins")
          }
          else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log ("computer wins")
          }
          else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log ("you win")
          }
          else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log ("you win")
          }
          else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log ("you win")
          }
          else 
            console.log ("what happened here ")
          }
         