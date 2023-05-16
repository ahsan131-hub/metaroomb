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
const crypto_1 = require("crypto");
const course_controller_1 = require("../../../../db/courses/course.controller");
const user_controller_1 = require("../../../../db/users/user.controller");
const createCourse = (parents, { course }, { user }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user.data.email)
            throw new Error("Unauthorized");
        const userData = yield user_controller_1.UserController.findUserByEmail(user.data.email);
        course.instructorId = userData._id;
        course.sessionMeetingId = (0, crypto_1.randomUUID)();
        yield course_controller_1.CourseController.createCourse(course);
        console.log("Course created succsfully");
        return {
            status: 200,
            message: "Course created succsfully!",
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            status: 404,
            message: "Course creation failed!",
        };
    }
});
exports.default = createCourse;
