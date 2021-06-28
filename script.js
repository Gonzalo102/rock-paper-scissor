let items = ['rock', 'paper', 'scissors'];
let item;
let UserSelection;
let ComputerSelection;
let ComputerScore = 0;
let UserScore = 0;
let result;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (ComputerScore === 5 || UserScore === 5) {
            return;
          } 
        UserSelection = button.id;
        ComputerSelection = ComputerPlay();
        Round(ComputerSelection, UserSelection);
        deleteClass();
        displayImage();
  });
});


const newGame = document.querySelector('.refresh');
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

    const scoreNumberComputer = document.getElementById('ComputerScore');
    const scoreNumberUser = document.getElementById('UserScore');

    ComputerScore = 0;
    UserScore = 0;
    newGame.classList.remove('show');
    newGame.classList.add('hide');
    comments.textContent = "";
    header.textContent = "";
    headerWinner.textContent = "";
    scoreNumberComputer.textContent = 0;
    scoreNumberUser.textContent = 0;
    deleteClass();
}

function displayImage(){
    const computerDisplay = document.getElementById('computerDisplay');
    const userDisplay = document.getElementById('userDisplay');

    if (item == 'rock') {
        computerDisplay.classList.add('rock-image');
    } else if (item == 'paper') {
        computerDisplay.classList.add('hand-image');
    } else {
        computerDisplay.classList.add('scissor-image');
    }

    if(UserSelection == 'rock'){
        userDisplay.classList.add('rock-image');
    } else if (UserSelection == 'paper') {
        userDisplay.classList.add('hand-image');
    } else {
        userDisplay.classList.add('scissor-image');
    }
}

function deleteClass(){
    const computerDisplay = document.getElementById('computerDisplay');
    const userDisplay = document.getElementById('userDisplay');

    computerDisplay.classList.remove('rock-image');
    computerDisplay.classList.remove('hand-image');
    computerDisplay.classList.remove('scissor-image');

    userDisplay.classList.remove('rock-image');
    userDisplay.classList.remove('hand-image');
    userDisplay.classList.remove('scissor-image');

}