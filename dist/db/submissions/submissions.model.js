"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema = new mongoose_1.Schema({
    instructorId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    studentId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    contentId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    quizId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    submissionType: {
        type: String,
        enum: ["ASSIGNMENT", "QUIZ"],
        required: true,
    },
    submissionFiles: [
        {
            type: String,
            minlength: 1,
            maxlength: 1000,
        },
    ],
    score: {
        type: Number,
        min: 0,
    },
    checkedByInstructor: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        minlength: 0,
        maxlength: 1000,
        required: true,
    },
    quizQuestions: [
        {
            question: {
                type: String,
                minlength: 1,
                maxlength: 1000,
                required: true,
            },
            options: [
                {
                    type: String,
                    minlength: 1,
                    maxlength: 1000,
                    required: true,
                },
            ],
            correctAnswer: {
                type: String,
                minlength: 1,
                maxlength: 1000,
                required: true,
            },
            studentAnswer: {
                type: String,
                minlength: 0,
                maxlength: 1000,
                required: true,
            },
        },
    ],
}, { timestamps: true, strict: true });
const Submission = (0, mongoose_1.model)("Submission", schema);
exports.default = Submission;
