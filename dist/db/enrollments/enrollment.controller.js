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
exports.EnrollmentController = void 0;
const enrollment_model_1 = __importDefault(require("./enrollment.model"));
const EnrollmentController = {
    enroll: (studentId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return enrollment_model_1.default.create({ studentId, courseId });
    }),
    removeEnrollment: (id, student) => __awaiter(void 0, void 0, void 0, function* () {
        // TODO: Need to add the checks
        return enrollment_model_1.default.deleteOne({ _id: id, studentId: student });
    }),
    updateEnrollment: (EnrollmentData, id) => {
        return enrollment_model_1.default.findByIdAndUpdate(id, {
            $set: Object.assign({}, EnrollmentData),
        }, { new: true });
    },
    findEnrollmentByStudentId: (stdId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield enrollment_model_1.default.find({ studentId: stdId });
    }),
    findAllByCourseId: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield enrollment_model_1.default.find({ courseId });
    }),
    findAllEnrollments: () => __awaiter(void 0, void 0, void 0, function* () {
        return enrollment_model_1.default.find();
    }),
};
exports.EnrollmentController = EnrollmentController;
