var task;
var person;
var divNumber = 1;
var divNumberInput;
var tasks = [];


function addTask(){
    task = document.getElementById("task").value;
    person = document.getElementById("person").value;
    createDiv();
    divNumber++;

}


  function createDiv(){
    var container = document.getElementById('tasks');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = divNumber + ". " + task + "-" + person;
    newDiv.setAttribute('id',divNumber);
    tasks.push(newDiv);
    container.appendChild(newDiv);

}

  function finishTask(){
    
    divNumberInput = document.getElementById("taskNumber").value;
    var node = document.getElementById(divNumberInput);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }

    
}
  