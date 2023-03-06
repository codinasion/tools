"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToConstantCase(str) {
    return str
        .split(/[-_ ]+/)
        .map(function (word) { return word.toUpperCase(); })
        .join('_');
}
exports.default = FormatStringToConstantCase;
