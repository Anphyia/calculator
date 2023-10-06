"use strict";

let clicked = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
const buttons = document.querySelectorAll("button"); 
const displayDiv = document.getElementById("display")

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(3);
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

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

function updateDisplay() {
    if (firstNumber !== "") {
        if (operator !== "") {
            displayDiv.textContent = firstNumber + " " + operator + " " + secondNumber;
        } else {
            displayDiv.textContent = firstNumber;
        }
    } else {
        displayDiv.textContent = "";
    }
}

function clearCalculator() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    clicked = "";
    updateDisplay();
}

function calculate() {
    if (operator === "=") {
        return;
    }

    if (clicked === "clear") {
        clearCalculator();
        return;
    }

    if (clicked === "=") {
        if (operator !== "" && secondNumber !== "") {
            if (operator === "/" && secondNumber === "0") {
                displayDiv.textContent = "Cannot divide by zero.";
                return;
            }
            const result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = "";
            operator = "";
            if (result === "0") {
                displayDiv.textContent = "";
            } else {
                updateDisplay();
            }
        }
    } else if (!isNaN(clicked) || clicked === ".") {
        if (operator === "") {
            if (firstNumber === "0" && clicked !== ".") {
                firstNumber = "";
            }
            firstNumber += clicked;
        } else {
            if (secondNumber === "0" && clicked !== ".") {
                secondNumber = "";
            }
            secondNumber += clicked;
        }
        updateDisplay();
    } else {
        if (operator !== "") {
            const result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = "";
        }
        operator = clicked;
        updateDisplay();
    }
}

function setupEventListeners() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            clicked = button.id;
            calculate();
        });
    });
}

setupEventListeners();


//TODO infinity problem after repeatedly * + * + *