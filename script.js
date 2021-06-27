let items = ['rock', 'paper', 'scissors'];
let item;
let UserSelection;
let ComputerSelection;
let ComputerScore = 0;
let UserScore = 0;
let result;

const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (ComputerScore === 5 || UserScore === 5) {
            return;
          } 
        UserSelection = button.id;
        ComputerSelection = ComputerPlay();
        Round(ComputerSelection, UserSelection);
  });
});


const newGame = document.querySelector('.refresh');
// Creating a button to refresh page
newGame.addEventListener('click', refreshPage);
newGame.classList.add('hide');

function ComputerPlay() { 
	item = items[Math.floor(Math.random() * items.length)];
  	return item;
}

function Round(ComputerSelection, UserSelection) {

const comments = document.getElementById('comments');
comments.textContent = "";

	if (ComputerSelection === UserSelection) { 
      comments.textContent = "Its a tie";

    } else if (ComputerSelection === 'rock' && UserSelection === 'scissors') {
        ComputerScore = ComputerScore + 1;
      	comments.textContent = "Rock beats Scirssors! Don´t give up!";
      
    } else if (ComputerSelection === 'paper' && UserSelection === 'rock') {
        ComputerScore = ComputerScore + 1;
        comments.textContent = "Paper beats Rock! Come on, you got this!";
       
    } else if (ComputerSelection === 'scissors' && UserSelection === 'paper') {
        ComputerScore = ComputerScore + 1;
        comments.textContent = "Scissors beats Paper! try again!";
        
    } else if (ComputerSelection === 'rock' && UserSelection === 'paper') {
        UserScore = UserScore + 1;
        comments.textContent = "Paper beats Rock! Good job!";
        
    } else if (ComputerSelection === 'paper' && UserSelection === 'scissors') {
        UserScore = UserScore + 1;
       	comments.textContent = "Scissors beats Paper! Good job!";
       
    } else if (ComputerSelection === 'scissors' && UserSelection === 'rock') {
        UserScore = UserScore + 1;
        comments.textContent = "Rock beats Scissors! Good job!";
		}
    
const scoreNumberComputer = document.getElementById('ComputerScore');
const scoreNumberUser = document.getElementById('UserScore');
const header = document.getElementById('header');
const headerWinner = document.getElementById('headerWinner');
scoreNumberComputer.textContent = ComputerScore;
scoreNumberUser.textContent = UserScore;

header.textContent = "";
headerWinner.textContent = "";
      
    if (ComputerScore === 5 || UserScore === 5) {
		header.textContent = "WE HAVE A WINNER!!";
        if (ComputerScore > UserScore) {
            headerWinner.textContent = "Computer Wins";
    	}else if (ComputerScore < UserScore) { 
            headerWinner.textContent = "User Wins";
    	} 
        newGame.classList.add('show');
    }
}

function refreshPage(){

    ComputerScore = 0;
    UserScore = 0;
    newGame.classList.add('hide');
}