var currencyValue = {
    euro : 1,
    usd : 1.15465,
    yuan : 7.3845,
    turkishLira : 11.19130094,
}

var currencies = [["euro", "usd", "yuan", "turkishLira"],[currencyValue.euro, currencyValue.usd, currencyValue.yuan, currencyValue.turkishLira]];

var currencySource;
var currencyTarget;
var inputNumber;
var outputNumber;

var numberOfCurrencies = 4;

var curretCurrency;
var finalCurrency;


function convert(){
    currencySource = document.getElementById("currencyTop").value;
    currencyTarget = document.getElementById("currencyBot").value;
    inputNumber = document.getElementById("numberTop").value;
   
    for(var i = 0; i < currencies.length * numberOfCurrencies / 2; i++) {
        if(currencySource == currencies[0][i]){
            curretCurrency = currencies[1][i];
        }
    }

    for(var i = 0; i < currencies.length * numberOfCurrencies / 2; i++) {
        if(currencyTarget == currencies[0][i]){
            finalCurrency = currencies[1][i];
        }
    }

    outputNumber = Math.round(((inputNumber / curretCurrency) * finalCurrency) * 100) / 100;

    document.getElementById("numberBot").innerHTML = outputNumber;
}