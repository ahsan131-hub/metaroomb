"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema = new mongoose_1.Schema({
    name: String,
    durationOfCourse: Number,
    // courseContent: [{ type: ObjectId, ref: "Content" }],
    courseContent: [{ type: String }],
    sessionTime: String,
    sessionMeetingId: String,
    instructorId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    studentsEnrolled: [{ type: mongoose_2.default.Types.ObjectId, ref: "User" }],
    courseEndDate: String,
    // quizes: [{ type: ObjectId, ref: "Quiz" }],
    quizes: [{ type: String }],
    subject: String,
    studentLimit: Number,
    about: String,
    coverPhoto: String,
    courseOutline: String,
}, { timestamps: true, strict: true });
const Course = (0, mongoose_1.model)("Course", schema);
exports.default = Course;
