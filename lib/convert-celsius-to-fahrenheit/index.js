"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertCelsiusToFahrenheit(celsius) {
    return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
}
exports.default = convertCelsiusToFahrenheit;
