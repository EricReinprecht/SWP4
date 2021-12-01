var playersChoise;
var comChoise;
var winner = "ERROR";


function play() {
    comSelect();
    whoWinner();
    displayEndScreen();
}

function comSelect() {
    comChoise = Math.floor(Math.random() * (3) + 1);

}

function whoWinner() {
    if (playersChoise == comChoise) {
        winner = "Draw";
    }
    getWinner();
}

function getWinner() {
    console.log(comChoise);
    console.log(playersChoise);
    if ((playersChoise == 1 && comChoise == 2) || (playersChoise == 2 && comChoise == 3) || (playersChoise == 3 && comChoise == 1)) {
        winner = "Player";
    } else if ((playersChoise == 2 && comChoise == 1) || (playersChoise == 3 && comChoise == 2) || (playersChoise == 1 && comChoise == 3)) {
        winner = "com";
    }
}

function displayEndScreen(){
    var container = document.getElementById('main');
    var newDiv = document.createElement('div');
    createContentOfEndScreen();
    newDiv.setAttribute('id', "endScreen");
    container.appendChild(newDiv);
}

function createContentOfEndScreen(){
    var container = document.getElementById('endScreen');
    var playersChoiseDiv = document.createElement('div');
    var comChoiseDiv = document.createElement('div');
    var result = document.createElement('div');
    var restartButtun =document.createElement('div')
    container.child.setAttribute('class', "endScreenContent");   //child is wrong
}











function setPlayersChoise(playersChoise) {
    this.playersChoise = playersChoise;
    play();
}

