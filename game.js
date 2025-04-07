let score = JSON.parse(localStorage.getItem('score')) || {
		wins: 0,
		losses: 0,
		ties: 0,
	} ;

updateScore();


document.querySelector('.js-rock-button').addEventListener('click',() => {playGame('rock'); } );

document.querySelector('.js-paper-button').addEventListener('click',() => {playGame('paper');} );

document.querySelector('.js-scissors-button').addEventListener('click',() => {playGame('scissors'); } );

document.querySelector('.js-reset-button').addEventListener('click',() =>{score.wins=0; score.losses=0; score.ties=0; } );

document.querySelector('.js-reset-button').addEventListener('click',() =>{localStorage.removeItem('score'); } );

document.querySelector('.js-reset-button').addEventListener('click',() =>{updateScore();} );

document.body.addEventListener('keydown',(event) =>{
	if (event.key === 'r') {
		playGame('rock'); 
	} else if (event.key === 'p') {
		playGame('paper');
	} else if (event.key === 's') {
		playGame('scissors');
	}
 } );

function playGame(playerMove){
 	pickComputerMove();
	let result='';
	if (playerMove==='scissors') {
		if (computerMove==='rock') {
		result='you lose';
		} else if (computerMove==='paper') {
			result='you win';
		} else if (computerMove==='scissors') {
			result='tie';
		}
	} else if (playerMove==='paper') {
		if (computerMove==='rock') {
		result='you win';
		} else if (computerMove==='paper') {
			result='tie';
		} else if (computerMove==='scissors') {
			result='you lose';
		}
	} else if (playerMove==='rock') {
		if (computerMove==='rock') {
			result='tie';
			} else if (computerMove==='paper') {
				result='you lose';
			} else if (computerMove==='scissors') {
				result='you win';
			}
	}

	if (result==='you win') {
		score.wins++;
	} else if (result==='you lose') {
		score.losses++;
	} else if (result==='tie') {
		score.ties++;
	}

	localStorage.setItem('score', JSON.stringify(score));

	updateScore();
	
	document.querySelector('.js-result').innerHTML = result;

	document.querySelector('.js-moves').innerHTML = `You 
		<img src="${playerMove}.png" alt="rock" class="move-icon">
		<img src="${computerMove}.png" alt="scissors" class="move-icon">
		Computer`;
 }
	
function updateScore(){
	document.querySelector('.js-score').innerHTML = `wins : ${score.wins}, losses : ${score.losses}, ties : ${score.ties}`;
}

let computerMove = '';

function pickComputerMove(){
		const randomNumber =Math.random();
	if (randomNumber>0 && randomNumber< 1/3) {
		computerMove='rock';
	} else if (randomNumber>= 1/3 && randomNumber< 2/3) {
		computerMove='paper';
	} else if (randomNumber>=2/3 && randomNumber<1) {
		computerMove='scissors';
	}
}

