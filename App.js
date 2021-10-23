// program for a simple calculator
let result;
let firstNumber = document.getElementById("first_number");
let secondNumber = document.getElementById("second_number");
let operant = document.querySelector("#operant");
let sonuc = document.getElementById("sonuc");
let buttonCalculate = document.querySelector("#button_cal");


console.log(buttonCalculate);


buttonCalculate.addEventListener("click", (e)=>{
   
//    buttonCalculate
    switch (operant.value) {
        case '+':
            result = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
            console.log(result);
            break;
        case '-':
            result = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
            console.log(result);
            break;
        case '*':
            result = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
            console.log(result);
            break;
        case '/':
            result = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
            console.log(result);
            break;
        default:
            result='Invalid operator';
            break;
    }
// sonuc.innerHTML=firstNumber.value + operant.value + secondNumber.value + "=" + result;
sonuc.innerHTML=`${firstNumber.value} ${operant.value} ${secondNumber.value} = ${result}`;
});
