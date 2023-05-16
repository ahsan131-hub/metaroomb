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
Object.defineProperty(exports, "__esModule", { value: true });
const enrollment_controller_1 = require("../../../../db/enrollments/enrollment.controller");
const enrollInCourse = (parents, { studentId, courseId }, {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO: Verify that user is logged in and is not already enrolled.
        yield enrollment_controller_1.EnrollmentController.enroll(studentId, courseId);
        console.log("Course enrolled succsfully");
        return {
            status: 200,
            message: "Course Enrolled succsfully!",
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            status: 404,
            message: "Course Enrolled Failed!",
        };
    }
});
exports.default = enrollInCourse;
