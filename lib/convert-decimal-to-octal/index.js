"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertDecimalToOctal(decimal) {
    var octalStr = decimal.toString(8);
    var octal = parseInt(octalStr, 10);
    return octal;
}
exports.default = ConvertDecimalToOctal;
