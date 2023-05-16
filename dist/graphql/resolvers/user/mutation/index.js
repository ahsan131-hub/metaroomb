"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = __importDefault(require("./createUser"));
const enrollInCourse_1 = __importDefault(require("./enrollInCourse"));
const updateUser_1 = __importDefault(require("./updateUser"));
const userMutation = {
    createUser: createUser_1.default,
    enrollInCourse: enrollInCourse_1.default,
    updateUser: updateUser_1.default,
};
exports.default = userMutation;
