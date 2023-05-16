"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCourse_1 = __importDefault(require("./getCourse"));
const getCourses_1 = __importDefault(require("./getCourses"));
const courseQuries = {
    getCourse: getCourse_1.default,
    getCourses: getCourses_1.default,
};
exports.default = courseQuries;
