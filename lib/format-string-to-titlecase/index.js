"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToTitleCase(input) {
    return input
        .split(/[-_ ]/)
        .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(' ');
}
exports.default = FormatStringToTitleCase;
