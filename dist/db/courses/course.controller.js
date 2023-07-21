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
exports.CourseController = void 0;
const course_model_1 = __importDefault(require("./course.model"));
const CourseController = {
    createCourse: (CourseData) => __awaiter(void 0, void 0, void 0, function* () {
        return course_model_1.default.create(Object.assign({}, CourseData));
    }),
    removeCourse: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return course_model_1.default.deleteOne({ _id: id });
    }),
    updateCourse: (CourseData, id) => {
        return course_model_1.default.findByIdAndUpdate(id, {
            $set: Object.assign({}, CourseData),
        }, { new: true });
    },
    addContentToCourse: (courseId, contentId) => {
        return course_model_1.default.findByIdAndUpdate(courseId, {
            $push: { courseContent: contentId },
        }, { new: true });
    },
    findCourseById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield course_model_1.default.findById(id);
    }),
    findAllCoursesOfUser: (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(instructorId);
        return yield course_model_1.default.find({ instructorId: instructorId });
    }),
    // findEnrolledCourse: async (studentId: string) => {
    //   return await Course.find({ instructorId: instructorId });
    // },
    findAllCourses: () => __awaiter(void 0, void 0, void 0, function* () {
        return course_model_1.default.find();
    }),
    findCourseContents: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return course_model_1.default.findById(courseId).populate("courseContent");
    }),
    countCourses: () => __awaiter(void 0, void 0, void 0, function* () {
        return course_model_1.default.count();
    }),
};
exports.CourseController = CourseController;
