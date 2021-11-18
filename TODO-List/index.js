var task;
var person;
var correctInput;
var divNumber = 1;
var number = 1;

var divNumberInput;
var tasksDiv = [];
var tasks = [];



function addTask(){
  getInputOfTask();
  checkInputOfTask();
  createDiv();
  console.log(tasksDiv);
}

function getInputOfTask(){
  task = document.getElementById("task").value;
  person = document.getElementById("person").value;
}

function checkInputOfTask(){
  if(person!=""){
    person = "-" + person;
  }else{
    person = "";
  }
  if(task != ""){
    correctInput = true;
  }else{
    correctInput = false;
  }
}

function createDiv(){
  if(correctInput){
    var container = document.getElementById('tasks');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = divNumber + ". " + task + person;
    addDivId(newDiv);
    addToArray(newDiv);
    container.appendChild(newDiv);
    divNumber++;
    number++;
  }
}

function addDivId(newDiv){
  newDiv.setAttribute('id',divNumber);
}

function addToArray(){
  tasks.push(number + ". " + task + person);
  tasksDiv.push(number);
}

function finishTask(){
  divNumberInput = document.getElementById("taskNumber").value;
  var node = document.getElementById(divNumberInput);
  node.innerHTML = "<s>" + tasks[divNumberInput -1] + "</s>";
}

function openTaskAgain(){
  divNumberInput = document.getElementById("taskNumber").value;
  var node = document.getElementById(divNumberInput);
  node.innerHTML = tasks[divNumberInput -1];
}