function registerEvents(){
  document.getElementById("loadTodos").addEventListener("click", function(){
    loadTodos();
    console.log("Hello")
  })
  document.getElementById("loadUsers").addEventListener("click", function(){
    loadUsers();
  })
}

function loadTodos(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function(respose){
    return respose.json();
  })
  .then(function(data){
    let html = "";
    data.forEach(todo => {
      html += "<li>" + todo.title + "</li>"
      
    });
    document.getElementById("list").innerHTML = html;
  })
  .catch(function(err){
    console.log(err);
  });
}

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(respose){
    return respose.json();
  })
  .then(function(data){
    let html = "";
    data.forEach(todo => {
      html += "<li>" + todo.title + "</li>"
      
    });
    document.getElementById("list").innerHTML = html;
  })
  .catch(function(err){
    console.log(err);
  });
}
registerEvents();