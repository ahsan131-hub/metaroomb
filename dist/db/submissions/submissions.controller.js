"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionController = void 0;
const submissions_model_1 = __importDefault(require("./submissions.model"));
const SubmissionController = {
    createSubmission: (SubmissionData) => __awaiter(void 0, void 0, void 0, function* () {
        return submissions_model_1.default.create(Object.assign({}, SubmissionData));
    }),
    removeSubmission: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return submissions_model_1.default.deleteOne({ _id: id });
    }),
    updateSubmission: (SubmissionData, id) => {
        return submissions_model_1.default.findByIdAndUpdate(id, {
            $set: Object.assign({}, SubmissionData),
        }, { new: true });
    },
    updateSubmissionScore: (id, score) => {
        return submissions_model_1.default.findByIdAndUpdate(id, {
            $set: { score: score, checkedByInstructor: true },
        }, { new: true });
    },
    findSubmissionById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return submissions_model_1.default.findById(id).populate("studentId");
    }),
    findAllSubmissionsOfCourse: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield submissions_model_1.default.find({ courseId: courseId }).populate("studentId");
    }),
    findAllSubmissions: () => __awaiter(void 0, void 0, void 0, function* () {
        return submissions_model_1.default.find();
    }),
};
exports.SubmissionController = SubmissionController;
