var size;
var weight;
var output;


function doTheMagic() {
    getInputOfTask();
    var result = calculate(size, weight);
    getOutput(result);
}

function getInputOfTask() {
    size = document.getElementById("size").value;
    weight = document.getElementById("weight").value;
}

function calculate(size, weight) {
    return ((size * 1.43) / weight) - 3.4;
}

function getOutput(result) {
    checkIfPositiveOrNegative(result);
}

function checkIfPositiveOrNegative(result) {
    if (result > 0) {
        output = "Positiv";
        var numbers = "";
        for (var number = -1; number < result; number++) {
            numbers = numbers + getNumbers(number) + " < ";
        }
    }
    if (result < 0) {
        output = "Negativ";
        var numbers = "";
        for (var number = -1; number > result; number--) {
            numbers = numbers + getNumbers(number) + " < ";
        }
    }
    if (result == 0) {
        output = "Null";
        output = "Ergebins = " + result + ": " + output;
    }
    output = finishOutput(result, output, numbers);
    document.getElementById("output").innerHTML = output;
}

function getNumbers(number) {
    var numberString = number.toString();
    return numberString;
}

function finishOutput(result, output, numbers){
    return output = "Ergebins = " + result + ": " + output + ", Zahlenfolge: " + numbers + result;
}



