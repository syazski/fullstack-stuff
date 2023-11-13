console.log('hi');

/*STEP 1: create a function getUserChoice to take in userInput as parameter,
return UserInput if rock || paper || scissors
else log "Error" */

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || 'paper' || 'scissors') {
  return userInput
} else console.log("Error!");
}

//TEST code 
// console.log(getUserChoice('paper'));

/*STEP 2: create a function getComputerChoice with empty parameter,
declare variable randomNumber and use Math.Floor(Math.random()*3) to pass number 0 - 2
use switch (randomNumber)...if 0 = rock, 1 = paper, 2 = scissors; */

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
  return 'rock';
  break;
  case 1:
  return 'paper';
  break;
  case 2:
  return 'scissors';
  break;
}
};

//TEST code 
//console.log(getComputerChoice());

/* STEP 3: Now determine the winners...create function determineWinners
with user and computerchoice as parameters 
if user === computer tied
if user === rock, computer === paper, log "You Won". Else "Computer won"
create if statements for all possible scenarios
*/

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tied";
  } 

else {
  if (userChoice === 'rock') {
    if(userChoice === 'paper') {
      return "Computer won!";
      } 
      else {
        return "You won!";
      };
} 
};

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer won";
      } else {
        return "You won!";
      };
      };

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return "You won!";
      } else {
        return "Computer won";
      };
  };
};


//TEST CODE
//console.log(determineWinner('scissors','rock'));

/*STEP 4: start game and determine winner
Create playGame function*/

function playGame() {
  const userChoice = getUserChoice('paper');
  console.log("You threw: " + userChoice);
  
  const computerChoice = getComputerChoice();
 console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
