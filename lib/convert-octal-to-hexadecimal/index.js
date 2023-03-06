"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convert_octal_to_decimal_1 = __importDefault(require("../convert-octal-to-decimal"));
var convert_decimal_to_hexadecimal_1 = __importDefault(require("../convert-decimal-to-hexadecimal"));
function ConvertOctalToHexadecimal(octal) {
    return (0, convert_decimal_to_hexadecimal_1.default)((0, convert_octal_to_decimal_1.default)(octal));
}
exports.default = ConvertOctalToHexadecimal;
