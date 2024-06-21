const tossDiv = document.getElementById('toss');
const button = document.getElementById('buttons');
const resultDiv = document.getElementById('result');
const tossOptionsDiv = document.getElementById('battingOrBowling');
const nextBtn = document.getElementById('next');
let computerChoice = ''; 
let userChoice = ''; 

function handleTossResult(result) {
    resultDiv.textContent = result;
    if (result.includes('won')) {
        tossOptionsDiv.style.display = 'block';
    } else {
        computerChoice = Math.random() < 0.5 ? 'batting' : 'bowling';
        const computerMessage = `Computer chose to ${computerChoice}!`;
        resultDiv.textContent += '\n' + computerMessage;
        var audio = new Audio("sounds/ipl.mp3");
        audio.play();
        nextBtn.style.display = 'block'; 
        tossOptionsDiv.style.display = 'none';
    }
}

function handleBattingChoice() {
    userChoice = 'batting';
    resultDiv.textContent = 'You chose to bat!';
    nextBtn.style.display = 'block'; 
}

function handleBowlingChoice() {
    userChoice = 'bowling';
    resultDiv.textContent = 'You chose to bowl!';
    nextBtn.style.display = 'block'; 
}

function performToss(playerChoice){
    tossOptionsDiv.style.display = "none";
    button.style.display = "none";
    const flip = Math.random() < 0.5 ? 'head' : 'tail';
    if(playerChoice === flip){
        handleTossResult('You won the toss!🥳');
    } else {
        handleTossResult('You lost the toss!😢');
    }
}

const battingBtn = document.getElementById('battingBtn');
const bowlingBtn = document.getElementById('bowlingBtn');

battingBtn.addEventListener('click', () => {
    var audio = new Audio("sounds/ipl.mp3");
    audio.play();
    handleBattingChoice();
});

bowlingBtn.addEventListener('click', () => {
    var audio = new Audio("sounds/ipl.mp3");
    audio.play();
    handleBowlingChoice();
});

function next() {
    if (computerChoice === 'bowling' || userChoice === 'batting') {
        window.location.href = "./next.html"; 
    } else {
        window.location.href = "./next1.html"; 
    }
}
