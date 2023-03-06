"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ConvertCentimetersToFeet(centimeters) {
    return Math.round((centimeters / 30.48) * 100) / 100;
}
exports.default = ConvertCentimetersToFeet;
