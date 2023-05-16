"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema = new mongoose_1.Schema({
    studentId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose_2.default.Types.ObjectId, ref: "Course" },
    attendence: [{ type: String }],
    QuizsSubmitted: [{ type: String }],
    assignmentsSubmitted: [{ type: String }],
}, { timestamps: true, strict: true });
const Enrollment = (0, mongoose_1.model)("Enrollment", schema);
exports.default = Enrollment;
