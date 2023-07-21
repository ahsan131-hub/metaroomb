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
const course_controller_1 = require("../../../../db/courses/course.controller");
const enrollment_controller_1 = require("../../../../db/enrollments/enrollment.controller");
const user_controller_1 = require("../../../../db/users/user.controller");
const getStatistics = (parents, { email }, { context }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("get stats", context);
        const user = yield user_controller_1.UserController.getUserByEmail(email);
        // console.log(user?.role);
        // if (user?.role !== ROLES.ADMIN) {
        //   return {
        //     user: null,
        //     response: {
        //       status: 404,
        //       message: "Query failed!",
        //     },
        //   };
        // }
        const totalUsers = yield user_controller_1.UserController.countUsers();
        const totalInstructors = yield user_controller_1.UserController.countInstructors();
        const totalStudents = yield user_controller_1.UserController.countStudents();
        const totalCourses = yield course_controller_1.CourseController.countCourses();
        const totalEnrollments = yield enrollment_controller_1.EnrollmentController.countEnrollments();
        const totalRevenue = "90,000";
        return {
            statistics: {
                totalUsers,
                totalInstructors,
                totalStudents,
                totalCourses,
                totalEnrollments,
                totalRevenue,
            },
            response: {
                status: 200,
                message: "Query successfully!",
            },
        };
    }
    catch (error) {
        return {
            user: null,
            response: {
                status: 404,
                message: "Query failed!",
            },
        };
    }
});
exports.default = getStatistics;
