const nextBtn = document.getElementById("next");
let tot = 0;
let uchoice = 0;
let i = 1;
let userscore = 0;
let computerscore = 0;

function score(choice) {
    tot += choice;
    document.getElementById('score').textContent = tot;

    if (tot >= 50 && tot <= 55) {
        setTimeout(() => {
            document.getElementById('achievement').textContent = "Half Century";
        }, 200);
    } else if (tot >= 100 && tot <= 105) {
        setTimeout(() => {
            document.getElementById('achievement').textContent = "Century";
        }, 200);
    } else {
        document.getElementById('achievement').textContent = "";
    }
}

function run(choice) {
    uchoice = choice;

    if (i === 1) {
        const cchoice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('playerChoice').textContent = `Your choice: ${uchoice}`; 
        document.getElementById('computerChoice').textContent = `Computer's choice: ${cchoice}`; 

        if (uchoice === cchoice) {
            document.getElementById("comments").textContent = "You Out!";
            setTimeout(() => {
                document.getElementById("comments").textContent = "";
            }, 500);
            document.getElementById('heading').textContent = "Second innings - You are bowling!⚾";
            userscore = tot;
            document.getElementById('target').textContent = `Target: ${userscore + 1}`;

            tot = 0;
            i++;
            document.getElementById('score').textContent = tot;
        } else {
            score(uchoice);
        }
    } else if (i === 2) {
        const cchoice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('playerChoice').textContent = `Your choice: ${uchoice}`; 
        document.getElementById('computerChoice').textContent = `Computer's choice: ${cchoice}`; 

        if (uchoice === cchoice) {
            document.getElementById("comments").textContent = "Computer Out!";
            setTimeout(() => {
                document.getElementById("comments").textContent = "";
            }, 500);
            computerscore = tot;
            document.getElementById('score').textContent = tot;
            displayResult(userscore, computerscore);
            nextBtn.style.display = "inline-block"; 
        } else {
            score(cchoice);
            if (tot > userscore) {
                computerscore = tot;
                displayResult(userscore, computerscore);
                nextBtn.style.display = "inline-block";
            }
        }
    }
}

function displayResult(userscore, computerscore) {
    let resultMessage = "";
    if (computerscore > userscore) {
        document.getElementById('heading').textContent = "Better luck next time!";
        resultMessage = `Computer wins`;
        var audio = new Audio("sounds/loss.mp3");
        audio.play();
    } else if (userscore > computerscore) {
        document.getElementById('heading').textContent = "You win 🎉";
        resultMessage = `Congratulations! You win the match by ${userscore - computerscore} runs.`;
        var audio = new Audio("sounds/win.mp3");
        audio.play();
    } else {
        resultMessage = "It's a tie.";
        var audio = new Audio("sounds/tie.mp3");
        audio.play();
    }
    document.getElementById('result').textContent = resultMessage;
}

function next() {
    window.location.href = "./index.html";
}