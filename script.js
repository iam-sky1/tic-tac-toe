let music=new Audio("music.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "X"
let gameOver=false

// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// Function to reset the game
const resetGame = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    music.play();
}


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && 
            boxtext[e[1]].innerText === boxtext[e[2]].innerText && 
            boxtext[e[0]].innerText !== '') {
            document.getElementsByClassName("Info")[0].innerText = boxtext[e[0]].innerText + " won";
            gameOver = true;
            gameover.play();
            music.pause();
            music.currentTime = 0;
        }
    });
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("Info")[0].innerText = "turn for " + turn;

            }
            
        }
    })
})
// Start the background music
music.play();