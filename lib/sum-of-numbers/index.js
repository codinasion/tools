"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SumOfNumbers(numbers) {
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
exports.default = SumOfNumbers;
