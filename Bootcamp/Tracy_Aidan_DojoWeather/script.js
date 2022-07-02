
var isCelsius = true;


function convert(number){
    if(number.value == "fahrenheit"){
        for(var i = 1; i <= 8; i++){
            num = document.querySelector("#t" + i);
            numVal = parseInt(num.innerText);
            num.innerText = Math.round(setToFahrenheit(numVal));
        }
        isCelsius = false;
    } else {
        for(var i = 1; i <= 8; i++){
            num = document.querySelector("#t" + i);
            numVal = parseInt(num.innerText);
            num.innerText = Math.round(setToCelsius(numVal));
        }
        isCelsius = true;
    }
}

function setToFahrenheit(celsiusNumber){
    if(isCelsius){
        newFahNum = (celsiusNumber * 9/5) + 32; //convert to F
    }
    return newFahNum;
}


function setToCelsius(fahrenheitNumber){   
    if(isCelsius == false){
        newCelNum = (fahrenheitNumber - 32) * 5/9; //convert to C     
    }
    return newCelNum;
}




function accepted(){
    var cookie = document.querySelector(".cookie-container");
    cookie.remove();
}