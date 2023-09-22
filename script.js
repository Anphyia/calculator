"use strict";

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