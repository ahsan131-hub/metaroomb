"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getContent_1 = __importDefault(require("./getContent"));
const getContents_1 = __importDefault(require("./getContents"));
const contentQuries = {
    getContent: getContent_1.default,
    getContents: getContents_1.default,
};
exports.default = contentQuries;
