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
const getEnrolledCourses = (parents, {}, { user }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user.data)
            throw new Error("Unauthorized");
        const existUser = yield user_controller_1.UserController.findUserByEmail(user.data.email);
        const courses = yield enrollment_controller_1.EnrollmentController.findEnrollmentByStudentId(existUser._id.toString());
        return {
            courses: courses,
            response: {
                status: 200,
                message: "Query successfully!",
            },
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            courses: [],
            response: {
                status: 404,
                message: "Error: " + error.message + "!",
            },
        };
    }
});
exports.default = getEnrolledCourses;
