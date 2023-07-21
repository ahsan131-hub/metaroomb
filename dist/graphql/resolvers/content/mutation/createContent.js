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
const user_controller_1 = require("../../../../db/users/user.controller");
const content_controller_1 = require("../../../../db/contents/content.controller");
const course_controller_1 = require("../../../../db/courses/course.controller");
const createContent = (parents, { content, instructorId, courseId }, { user }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user)
            throw new Error("Unauthorized");
        const userData = yield user_controller_1.UserController.exists(instructorId);
        if (!userData)
            throw new Error("Unauthorized");
        content.instructorId = instructorId;
        const contentId = (yield content_controller_1.ContentController.createContent(content)).id;
        console.log(contentId);
        const course = yield course_controller_1.CourseController.addContentToCourse(courseId, contentId);
        console.log("Content created succsfully");
        return {
            status: 200,
            message: "Content created succsfully!",
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            status: 404,
            message: "Content creation failed!",
        };
    }
});
exports.default = createContent;
