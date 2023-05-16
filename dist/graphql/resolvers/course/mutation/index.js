"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createCourse_1 = __importDefault(require("./createCourse"));
const courseMutations = {
    createCourse: createCourse_1.default,
};
exports.default = courseMutations;
