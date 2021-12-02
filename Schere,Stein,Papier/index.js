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

function displayEndScreen() {
    var container = document.getElementById('main');
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', "endScreen");
    container.appendChild(newDiv);
    createContentOfEndScreen();
}

function createContentOfEndScreen() {
    var container = document.getElementById('endScreen');
    createDivs(container);
    setClassOfDivs(container);
    setInstructionOfDiv(container);
    createContent();
}

function createContent() {
    createResult();
    createPlayerComChoise(playersChoise, comChoise);
    createRestartButton();
}

function createRestartButton() {
    var div = document.getElementById('restartButton');
}

function createPlayerComChoise(selectorPlayer, selectorCom) {
    var image = selectorPlayer;
    var div = document.getElementById('playerChoise');
    for (var i = 1; i <= 2; i++) {
        switch (image) {
            case 1:
                div.innerHTML = "<img src=rock.PNG>";
                break;
            case 2:
                div.innerHTML = "<img src=scissors.PNG>";
                break;
            case 3:
                div.innerHTML = "<img src=paper.PNG>";
                break;
        }
        var div = document.getElementById('comChoise');
        image = selectorCom;
    }


}

function createResult() {
    var div = document.getElementById('result');
    div.innerHTML = winner;
}

function createDivs(container) {
    for (i = 0; i < 4; i++) {
        var newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}

function setClassOfDivs(container) {
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].setAttribute('class', "endScreenContent")
    }
}

function setInstructionOfDiv(container) {
    for (let i = 0; i < container.children.length; i++) {
        switch (i) {
            case 0:
                container.children[0].setAttribute('id', "restartButton")
                container.children[0].setAttribute('onClick', "restartGame()")
                break;
            case 1:
                container.children[1].setAttribute('id', "result")
                break;
            case 2:
                container.children[2].setAttribute('id', "comChoise")
                break;
            case 3:
                container.children[3].setAttribute('id', "playerChoise")
                break;
        }
    }
};








function setPlayersChoise(playersChoise) {
    this.playersChoise = playersChoise;
    play();
}

function restartGame() { }

