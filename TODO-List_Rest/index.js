function registerEvents(){
  document.getElementById("loadTodos").addEventListener("click", function(){
    loadData();
  })
  document.getElementById("loadUsers").addEventListener("click", function(){
    loadData();
  })
}

registerEvents();

function loadTodos(){
  fetch('https://jasonplaceholder.typecode.com/todos')
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