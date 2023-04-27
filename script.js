const selector = document.querySelector('#selection');
const gameWindow = document.querySelector('#game-window');

// Game Window



// New Game Button

const newGame = document.createElement('div');
newGame.classList.add('new-game');
newGame.textContent = "New Game";
selector.appendChild(newGame);

// Game buttons

const rockSelect = () => {
    const button = document.createElement('button');
    button.classList.add('rock')
    const para = document.createElement('p');
    para.textContent = "Rock";
    button.appendChild(para);
    selector.appendChild(button);
}

const paperSelect = () => {
    const button = document.createElement('button');
    button.classList.add('paper')
    const para = document.createElement('p');
    para.textContent = "Paper";
    button.appendChild(para);
    selector.appendChild(button);
}

const scissorsSelect = () => {
    const button = document.createElement('button');
    button.classList.add('scissors')
    const para = document.createElement('p');
    para.textContent = "Scissors";
    button.appendChild(para);
    selector.appendChild(button);
}

const selectors = () => {
    rockSelect();
    paperSelect();
    scissorsSelect();
}

newGame.addEventListener('click', () => {
    selector.textContent = "";
    selectors();
});
