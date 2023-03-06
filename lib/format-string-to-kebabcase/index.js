"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToKebabCase(str) {
    return str.split(/[-_ ]/).join('-');
}
exports.default = FormatStringToKebabCase;
