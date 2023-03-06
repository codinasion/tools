"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertCentimetersToInches(centimeters) {
    return Math.round((centimeters / 2.54) * 100) / 100;
}
exports.default = ConvertCentimetersToInches;
