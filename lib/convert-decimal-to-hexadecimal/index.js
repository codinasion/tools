"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertDecimalToHexadecimal(decimal) {
    if (decimal === 0) {
        return '0';
    }
    var hexArray = [];
    while (decimal > 0) {
        var remainder = decimal % 16;
        if (remainder < 10) {
            hexArray.push(remainder);
        }
        else {
            hexArray.push(String.fromCharCode(remainder + 55).toLowerCase());
        }
        decimal = Math.floor(decimal / 16);
    }
    return hexArray.reverse().join('');
}
exports.default = ConvertDecimalToHexadecimal;
