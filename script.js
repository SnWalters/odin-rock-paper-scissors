const newGame = document.querySelector('.new-game');
const selector = document.querySelector('#selection');

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
