window.onload = function () {
    document.getElementById("firstNumber").value = parseInt(Math.random() * (9) + 1);
    document.getElementById("secondNumber").value = parseInt(Math.random() * (9) + 1);


}

function isNumber(value) {
    var reg = new RegExp('^[0-9]+$');
    return reg.test(value)
}

function calculate() {


    let firstNumberText = document.getElementById("firstNumber").value;
    let secondNumberText = document.getElementById("secondNumber").value;

    if (!isNumber(firstNumberText)) {
        return;
    }

    if (!isNumber(secondNumberText)) {
        return;
    }

    let firstNumber = parseInt(firstNumberText);
    let secondNumber = parseInt(secondNumberText);

    let dropdown = document.getElementById("select-option");
    let operator = dropdown.options[dropdown.selectedIndex].value;
    let result;
    switch (operator) {
        case "plus":
            result = firstNumber + secondNumber;
            break;
        case "minus":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;

        default:
            result = firstNumber / secondNumber;
    }
    document.getElementById("result").innerText = result;
}
function minus(id) {
    let numberInput = document.getElementById(id);
    numberInput.value--;
}
function plus(id) {
    let numberInput = document.getElementById(id);
    numberInput.value++;
}