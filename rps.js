    let playerScore = 0;
    let computerScore = 0;
    const playerScoreDisplay = document.querySelector ('#player-score')
    const computerScoreDisplay =document.querySelector('#computer-score')
    const resultsDisplay = document.querySelector('#results-text')

    function computerPlay ( ) {
        const choice =  ["rock", "paper", "scissors"];
        let choices = choice[Math.floor(Math.random()*choice.length)];
        return choices 
        
      }

      
      
      const rock = document.querySelector('.rock') ;
     rock.addEventListener('click' , () => {
      let rock = 'rock'
      console.log (playRound(rock, computerPlay()))

      
     });
     
     const paper = document.querySelector('.paper') ;
     paper.addEventListener('click' , () => {
      let paper = 'paper'
      console.log (playRound(paper, computerPlay()))
     });
     
     const scissors = document.querySelector('.scissors') ;
     scissors.addEventListener('click' , () => {
      let scissors = 'rock'
      console.log (playRound(scissors, computerPlay()))
     });
     
     function gameOver () {
      if (playerScore === 5 || computerScore === 5)
      resultsDisplay.textContent = 'game over'
     }
     
      function playRound (playerSelection, computerSelection) {
          if (playerSelection ==  computerSelection ){
            resultsDisplay.textContent =  'you draw'
          } 
          else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++
            computerScoreDisplay.textContent = computerScore
            resultsDisplay.textContent = "computer wins"
          }
          else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++
            computerScoreDisplay.textContent = computerScore
            resultsDisplay.textContent = "computer wins"
          }
          else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            computerScoreDisplay.textContent = computerScore
            resultsDisplay.textContent = "computer wins"
          }
          else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScore++ 
            playerScoreDisplay.textContent = playerScore
            resultsDisplay.textContent = "you win"
          }
          else if (playerSelection == "scissors" && computerSelection == "paper") {
            playerScore++
            playerScoreDisplay.textContent = playerScore
            resultsDisplay.textContent = "you win"
          }
          else if (playerSelection == "rock" && computerSelection == "scissors") {
            playerScore++
            playerScoreDisplay.textContent = playerScore
            resultsDisplay.textContent = "you win"
          }
          else {
            console.log ("what happened here ")
          }
          gameOver();
        }

         