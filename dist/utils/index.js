"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthorizationToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyAuthorizationToken(token) {
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return user;
    }
    catch (err) {
        console.error(`Failed to verify JWT token: ${err}`);
        return null;
    }
}
exports.verifyAuthorizationToken = verifyAuthorizationToken;
