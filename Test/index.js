var size;
var weight;
var result = 5;
var output;


function doTheMagic() {
    getInputOfTask();
    calculate(result);
    getOutput(result);
    console.log(output);
    
}
  
function getInputOfTask() {
    size = document.getElementById("size").value;
    weight = document.getElementById("weight").value;
}

function calculate(result){
    result = ((size*1.43)/weight)-3,4;
    console.log(result)
}

function getOutput(result){
    if(result>0){
        output = "Positiv";
    }
    if(result<0){
        output = "Negativ";
    }
    if(result = 0){
        output = "Null;"
    }
    

}