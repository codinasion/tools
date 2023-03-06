"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToSnakeCase(str) {
    return str
        .split(/[-_ ]/)
        .map(function (word) {
        return word.toLowerCase();
    })
        .join('_');
}
exports.default = FormatStringToSnakeCase;
