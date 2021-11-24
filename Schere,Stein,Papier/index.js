var playersChoise;
var comChoise;


function play(){
    comSelect();
}


function comSelect(){
    comChoise = Math.floor(Math.random() * (3) + 1);
    switch(comChoise){
        case 1:
            comChoise = "Rock";
        break;
        
        case 2:
            comChoise = "Scissors";
        break;

        case 3:
            comChoise = "Paper";
        break;
    }
}

function whoWinner(){
    
}









function setStone(){
    playersChoise = "Rock";
    play();
}

function setScissors(){
    playersChoise = "Scissors";
}

function setPaper(){
    playersChoise = "Paper";
}