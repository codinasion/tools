"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertBinaryToDecimal(binary) {
    var binaryArray = binary.split('').reverse();
    return binaryArray.reduce(function (acc, curr, index) {
        return acc + Number(curr) * Math.pow(2, index);
    }, 0);
}
exports.default = ConvertBinaryToDecimal;
