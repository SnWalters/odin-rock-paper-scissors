const selector = document.querySelector('#selection');
const gameWindow = document.querySelector('#game-window');
let userScore = 0;
let puterScore = 0;

// Computer Selection

const getComputerSelection = () => {

    switch(Math.floor(Math.random() * 6)) {
        case 0: 
        case 3: return 'rock';
            break;
        case 1:
        case 4: return 'paper';
            break;
        case 2:
        case 5: return 'scissors';
    }
};

// Game Play

const game = (user, puter) => {
    if(user === 'rock') {
        if(puter === 'paper') {
            puterScore++;
        }
        else if(puter === 'scissors') {
            userScore++;
        };
    } else if(user === 'paper') {
        if(puter === 'rock') {
            userScore++;
        } else if(puter === 'scissors') {
            puterScore++;
        };
    } else if(user === 'scissors') {
        if(puter === 'rock') {
            puterScore++;
        } else if(puter === 'paper') {
            userScore++;
        }
    };
    playWindow(user, puter);

    if(userScore === 5 || puterScore === 5) {
        newGameButton();
    };
};

// Play Window

const playWindow = (user, puter) => {
    gameWindow.textContent = "";
    const score = document.createElement('p');
    score.classList.add('score')
    score.textContent = `Score: ${userScore} / ${puterScore}`
    gameWindow.appendChild(score);

    const playWin = document.createElement('div');
    playWin.classList.add('play-window');

    const userWindow = document.createElement('div');
    userWindow.textContent = `${user}`;
    playWin.appendChild(userWindow);

    const para = document.createElement('p');
    para.textContent = 'V';
    playWin.appendChild(para);

    const puterWindow = document.createElement('div');
    puterWindow.textContent = `${puter}`;
    playWin.appendChild(puterWindow);

    gameWindow.appendChild(playWin);
}

// New Game Button

const newGameClick = () => {
        selector.textContent = "";
        gameWindow.textContent = "";
        playWindow('User', 'Puter');
        selectors();
};

const newGameButton = () => {
    const newGame = document.createElement('div');
    newGame.classList.add('new-game');
    newGame.textContent = "New Game";
    selector.textContent = "";
    selector.appendChild(newGame);
    newGame.addEventListener('click', () => {
        newGameClick();
    });
}

// Game buttons

const rockSelect = () => {
    const button = document.createElement('button');
    button.classList.add('rock')
    const para = document.createElement('p');
    para.textContent = "Rock";
    button.appendChild(para);
    selector.appendChild(button);

    button.addEventListener('click', (e) => {
        game(`${button.classList[0]}`, `${getComputerSelection()}`);
    });
}

const paperSelect = () => {
    const button = document.createElement('button');
    button.classList.add('paper')
    const para = document.createElement('p');
    para.textContent = "Paper";
    button.appendChild(para);
    selector.appendChild(button);

    button.addEventListener('click', () => {
        game(`${button.classList[0]}`, `${getComputerSelection()}`);
    });
}

const scissorsSelect = () => {
    const button = document.createElement('button');
    button.classList.add('scissors')
    const para = document.createElement('p');
    para.textContent = "Scissors";
    button.appendChild(para);
    selector.appendChild(button);

    button.addEventListener('click', () => {
        game(`${button.classList[0]}`, `${getComputerSelection()}`);
    });
}

const selectors = () => {
    rockSelect();
    paperSelect();
    scissorsSelect();
}

/*
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('clicked');
    });
});
*/



newGameButton();
