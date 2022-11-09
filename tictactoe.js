const playerStatus = document.querySelector('#player');
const playerStartFirstStatus = document.querySelector('.playerStartFirst');
const restartButton = document.querySelector('#restartButton');
const newGameButton = document.querySelector('#newGameButton');
const startGameButton = document.querySelector('#startGameButton');
const boxElements = document.querySelectorAll('.box');
let winningMessage = document.querySelector('.winningMessage');
let winningText = document.querySelector('#winningText');
let playerInput = document.querySelector('.playerInput');
let playerX = document.querySelector('#playerX');
let playerO = document.querySelector('#playerO');
let gameIsLive = true;
let xTurn = true;

function winner(){
    gameIsLive = false;
    if (xTurn){
        winningText.innerText = `${playerO.value} won!`;
    }else{
        winningText.innerText = `${playerX.value} won!`;
    };
    winningMessage.classList.add('show');
};

function checkWin(){
    const box1 = boxElements[0].classList[1];
    const box2 = boxElements[1].classList[1];
    const box3 = boxElements[2].classList[1];
    const box4 = boxElements[3].classList[1];
    const box5 = boxElements[4].classList[1];
    const box6 = boxElements[5].classList[1];
    const box7 = boxElements[6].classList[1];
    const box8 = boxElements[7].classList[1];
    const box9 = boxElements[8].classList[1];
    if (box1 && box1 === box2 && box1 === box3){
        winner(box1);
    }else if(box4 && box4 === box5 && box4 === box6){
        winner(box4);
    }else if(box7 && box7 === box8 && box7 === box9){
        winner(box7);
    }else if(box1 && box1 === box4 && box1 === box7){
        winner(box1);
    }else if(box2 && box2 === box5 && box2 === box8){
        winner(box2);
    }else if(box3 && box3 === box6 && box3 === box9){
        winner(box3);
    }else if(box1 && box1 === box5 && box1 === box9){
        winner(box1);
    }else if(box3 && box3 === box5 && box3 === box7){
        winner(box3);
    }else if (box1 && box2 && box3 && box4 && box7 && box6 && box7 && box8 && box9){
        gameIsLive = false;
        winningText.innerText = `It's a draw!`;
        winningMessage.classList.add('show');
    };
};  

function newGame(){
    playerStartFirstStatus.classList.remove('show');
    playerStatus.innerHTML = `${playerX.value} is Player X and ${playerO.value} is Player O.`;
    xTurn = true;
    for (let box of boxElements){
        box.classList.remove('X');
        box.classList.remove('O');
    };
    winningMessage.classList.remove('show');
};

function boxClick(box){
    playerStartFirstStatus.classList.add('show');
    if (box.target.classList[1] === 'X' || box.target.classList[1] === 'O'){
        return;
    };
    if (xTurn) {
        box.target.classList.add('X');
        xTurn = !xTurn;
        playerStatus.innerHTML = `Current Player O: ${playerO.value}.`;
        checkWin();
    } else {
        box.target.classList.add('O');
        xTurn = !xTurn;
        playerStatus.innerHTML = `Current Player X: ${playerX.value}.`;
        checkWin();
    };
};

for (let box of boxElements){
    box.addEventListener('click', boxClick);
};

function startGame(){
    if (playerX.value != '' || playerO.value != ''){
        playerInput.classList.add('show');
        playerStatus.innerText = `${playerX.value} is Player X and ${playerO.value} is Player O.`
        playerStartFirstStatus.innerText = `${playerX.value} starts first.`;
    }else{
        alert('Please enter name for Player X and Player O');
    };
};

function restartGame(){
    playerX.value='';
    playerO.value='';
    playerInput.classList.remove('show');
    newGame();
};

restartButton.addEventListener('click', newGame);
newGameButton.addEventListener('click', restartGame);
startGameButton.addEventListener('click', startGame);