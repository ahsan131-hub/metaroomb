"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSubmission_1 = __importDefault(require("./getSubmission"));
const getSubmissions_1 = __importDefault(require("./getSubmissions"));
const SubmissionQuries = {
    getSubmission: getSubmission_1.default,
    getSubmissions: getSubmissions_1.default,
};
exports.default = SubmissionQuries;
