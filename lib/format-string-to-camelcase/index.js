"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToCamelCase(str) {
    return str
        .split(/[-_ ]/)
        .map(function (word, index) {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
        .join('');
}
exports.default = FormatStringToCamelCase;
