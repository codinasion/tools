"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert_decimal_to_octal_1 = __importDefault(require("../convert-decimal-to-octal"));
var convert_binary_to_decimal_1 = __importDefault(require("../convert-binary-to-decimal"));
function ConvertBinaryToOctal(binary) {
    return (0, convert_decimal_to_octal_1.default)((0, convert_binary_to_decimal_1.default)(binary));
}
exports.default = ConvertBinaryToOctal;
