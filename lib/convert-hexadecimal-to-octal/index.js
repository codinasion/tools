"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert_hexadecimal_to_decimal_1 = __importDefault(require("../convert-hexadecimal-to-decimal"));
var convert_decimal_to_octal_1 = __importDefault(require("../convert-decimal-to-octal"));
function ConvertHexadecimalToOctal(hexadecimal) {
    return (0, convert_decimal_to_octal_1.default)((0, convert_hexadecimal_to_decimal_1.default)(hexadecimal));
}
exports.default = ConvertHexadecimalToOctal;
