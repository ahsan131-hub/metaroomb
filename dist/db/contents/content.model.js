"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 50,
        required: true,
    },
    instructorId: { type: mongoose_2.default.Types.ObjectId, ref: "User" },
    deadline: String,
    contentFiles: { type: [String] },
    contentType: {
        type: String,
        enum: ["ASSIGNMENT", "CONTENT"],
        default: "CONTENT",
        required: true,
    },
    description: {
        type: String,
        minlength: 10,
        required: true,
    },
    contentSubmissions: { type: [String] },
}, { timestamps: true, strict: true });
const Content = (0, mongoose_1.model)("Content", schema);
exports.default = Content;
