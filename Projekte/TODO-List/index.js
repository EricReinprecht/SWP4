var task;
var person;

var correctInput;

var divNumber = 1;
var idNumber = 1;


var tasksDiv = [];
var tasks = [];
var crossedOutTasks = [];

var crossedOut = "";



function addTask() {
  getInputOfTask();
  checkInputOfTask();
  if (correctInput) {
    createDiv();
  }
}

function getInputOfTask() {
  task = document.getElementById("task").value;
  person = document.getElementById("person").value;
}

function checkInputOfTask() {
  if (person != "") {
    person = "-" + person;
  } else {
    person = "";
  }
  if (task != "") {
    correctInput = true;
  } else {
    correctInput = false;
  }
}

function createDiv() {
    var container = document.getElementById('taskDisplay');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = divNumber + ". " + task + person;
    addDivAttribute(newDiv);
    addToArray(newDiv);
    container.appendChild(newDiv);
    divNumber++;
    idNumber++;
}

function addDivAttribute(newDiv) {
  newDiv.setAttribute('id', divNumber);
  newDiv.setAttribute('class', "tasks");
  newDiv.setAttribute('onclick', "alterDivContentOnclick(id)");
}

function addToArray() {
  tasks.push(idNumber + ". " + task + person);
  tasksDiv.push(idNumber);
  crossedOutTasks.push(false);
}

function alterDivContentOnclick(idOfDiv) {
  checkIfCrossedOut(idOfDiv);
  alterDivContent(idOfDiv);
}

function checkIfCrossedOut(idOfDiv){
  if (!crossedOutTasks[idOfDiv - 1]) {
    crossedOut = "<s>";
    crossedOutTasks[idOfDiv - 1] = true;
  } else {
    crossedOut = "";
    crossedOutTasks[idOfDiv - 1] = false;
  }
}

function alterDivContent(idOfDiv){
  var node = document.getElementById(idOfDiv);
  node.innerHTML = crossedOut + tasks[idOfDiv - 1];
}

function registerEvents(){
  document.getElementById("loadData").addEventListener("click", function(){
    loadData();
  })
}

registerEvents();

function loadData(){
  fetch('https://jasonplaceholder.typecode.com/todos')
  .then(function(respose){
    return respose.json();
  })
  .then(function(data){
    appendData(data);
  })
  .catch(function(err){
    console.log(err);
  });
}