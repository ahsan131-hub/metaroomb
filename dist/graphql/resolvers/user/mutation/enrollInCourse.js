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
const user_controller_1 = require("../../../../db/users/user.controller");
const enrollInCourse = (parents, { studentEmail, courseId }, { user }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (user.data.email !== studentEmail)
            throw new Error("Unauthorized");
        const userData = yield user_controller_1.UserController.findUserByEmail(user.data.email);
        const exist = yield enrollment_controller_1.EnrollmentController.alreadEnrolled(userData._id.toString(), courseId);
        if (exist === null || exist === void 0 ? void 0 : exist._id)
            throw new Error("Already enrolled");
        yield enrollment_controller_1.EnrollmentController.enroll(userData._id.toString(), courseId);
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
            message: error.message,
        };
    }
});
exports.default = enrollInCourse;
