var task;
var person = "";
var divNumber = 1;
var divNumberInput;
var tasksDiv = [];
var tasks=[];



function addTask(){
    task = document.getElementById("task").value;
    person = document.getElementById("person").value;
    if(person!="name"){
      person = "-" + person;
    }else{
      person = "";
    }
    createDiv();
    divNumber++;
}

  function createDiv(){
    var container = document.getElementById('tasks');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = divNumber + ". " + task + person;
    tasks.push = divNumber + ". " + task + person; //funkt ne
    newDiv.setAttribute('id',divNumber);
    tasksDiv.push(newDiv);
    container.appendChild(newDiv);
}

  function finishTask2(){
    divNumberInput = document.getElementById("taskNumber").value;
    var node = document.getElementById(divNumberInput);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

function finishTask(){
  divNumberInput = document.getElementById("taskNumber").value;
  var node = document.getElementById(divNumberInput);
  node.innerHTML = "<s>" + tasks[divNumberInput] + "</s>";
}