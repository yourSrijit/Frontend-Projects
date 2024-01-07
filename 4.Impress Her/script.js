let happy=new Audio("happpy.mp3");
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
let yesBox=document.getElementById("yes-container");

yesButton.addEventListener('click', nextPage);

noButton.addEventListener('click', moveButton);
noButton.addEventListener('mouseover', moveButton);
yes.addEventListener('click',nextPage);
function nextPage() {
    happy.play();
    document.querySelector('.container').style.display = 'none'; 
    yesBox.style.display = 'block';
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}