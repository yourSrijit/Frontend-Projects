console.log('Welcome to Tic Tac Toe Game');
let music =new Audio("music.mp3");
let audioTurnforX=new Audio("ting.mp3");
let audioTurnforO=new Audio("tong.mp3");
let gameOver=new Audio("gameover.mp3");
let happy=new Audio("happy.mp3");
let turn='X';
let isgameover = false;

music.loop=true;

// Function to change the turn
const changeTurn=()=>{
    return turn=='X'?'O':'X';
}

// Function to check for a win

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -19, 5, 0],
        [3, 4, 5, -19, 15, 0],
        [6, 7, 8, -19, 25, 0],
        [0, 3, 6, -30, 16, 90],
        [1, 4, 7, -20, 16, 90], 
        [2, 5, 8, -9,  16, 90],
        [0, 4, 8, -19, 15, 45],
        [2, 4, 6, -19, 15, -45],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width= "200px";
            music.pause();
            music.currentTime = 0;
            happy.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}


//Game Logic
music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            if(turn=='X'){
                turn=changeTurn();
                audioTurnforX.play();
            }else{
                turn=changeTurn();
                audioTurnforO.play();
            }

            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
        }
    })
})

// add onclickListner to reset button
let reset =document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(e=>{
        e.innerText='';
    })
    turn='X';
    isgameover=false;
    happy.pause();
    happy.currentTime = 0;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width= "0px";
})
music.play();