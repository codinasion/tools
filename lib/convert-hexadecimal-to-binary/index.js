"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertHexadecimalToBinary(hexadecimal) {
    var binary = hexadecimal
        .split('')
        .map(function (hexadecimalDigit) {
        var binaryDigit = parseInt(hexadecimalDigit, 16).toString(2);
        return binaryDigit.padStart(4, '0');
    })
        .join('');
    return binary;
}
exports.default = convertHexadecimalToBinary;
