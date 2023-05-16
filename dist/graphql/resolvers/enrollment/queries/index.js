"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllEnrollments_1 = __importDefault(require("./getAllEnrollments"));
const getCourseEnrollments_1 = __importDefault(require("./getCourseEnrollments"));
const getStudentEnrollments_1 = __importDefault(require("./getStudentEnrollments"));
const enrollmentQuries = {
    getAllEnrollments: getAllEnrollments_1.default,
    getCourseEnrollments: getCourseEnrollments_1.default,
    getStudentEnrollments: getStudentEnrollments_1.default,
};
exports.default = enrollmentQuries;
