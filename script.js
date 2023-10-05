"use strict";

let clicked = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
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

function setupEventListeners() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            clicked = button.id;
            calculate();
        });
    });
}


setupEventListeners();
