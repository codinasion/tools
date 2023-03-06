"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatStringToDotCase(str) {
    return str.split(/[-_ ]/).join('.');
}
exports.default = FormatStringToDotCase;
