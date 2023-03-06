"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertOctalToDecimal(octalString) {
    var octal = octalString;
    var decimal = 0;
    var i = 0;
    while (octal !== 0) {
        decimal += (octal % 10) * Math.pow(8, i);
        ++i;
        octal = Math.floor(octal / 10);
    }
    return decimal;
}
exports.default = ConvertOctalToDecimal;
