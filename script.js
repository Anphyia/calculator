"use strict";

let clicked = "";
const buttons = document.querySelectorAll("button"); 
const displayDiv = document.getElementById("display")

function add(a, b) {
    const addend1 = a;
    const addend2 = b;
    const additionOperator = "+";
    return addend1 + addend2;
}

function subtract(a, b) {
    const minuend = a;
    const subtrahend = b;
    const subtractionOperator = "-";
    return minuend - subtrahend;
}

function multiply(a, b) {
    const multiplier = a;
    const multiplicand = b;
    const multiplierOperator = "*";
    return multiplier * multiplicand;
}

function divide(a, b) {
    const dividend = a;
    const divisor = b;
    const divisionOperator = "/";
    return (dividend / divisor).toFixed(3);
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Invalid operator: " + operator);
    }
}


function display() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            clicked = button.id;
    
            displayDiv.textContent = `${clicked}`;
        });
    });
}

function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    clicked = "";
    updateDisplay();
}

display();