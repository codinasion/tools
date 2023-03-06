"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToPathCase(input) {
    return input
        .split(/[-_ ]/)
        .map(function (word) {
        return word.toLowerCase();
    })
        .join('/');
}
exports.default = FormatStringToPathCase;
