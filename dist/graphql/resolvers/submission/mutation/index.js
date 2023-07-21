"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createSubmission_1 = __importDefault(require("./createSubmission"));
const updateSubmissionScore_1 = __importDefault(require("./updateSubmissionScore"));
const SubmissionMutations = {
    createSubmission: createSubmission_1.default,
    updateSubmissionScore: updateSubmissionScore_1.default,
};
exports.default = SubmissionMutations;
