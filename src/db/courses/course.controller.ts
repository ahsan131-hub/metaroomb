import Course from "./course.model";
import { ICourse_d } from "./course.types";

const CourseController = {
  createCourse: async (CourseData: any) => {
    return Course.create({ ...CourseData });
  },
  removeCourse: async (id: string) => {
    return Course.deleteOne({ _id: id });
  },
  updateCourse: (CourseData: any, id: string) => {
    return Course.findByIdAndUpdate(
      id,
      {
        $set: { ...CourseData },
      },
      { new: true }
    );
  },
  addContentToCourse: (courseId: string, contentId: any) => {
    return Course.findByIdAndUpdate(
      courseId,
      {
        $push: { courseContent: contentId },
      },
      { new: true }
    );
  },

  findCourseById: async (id: string) => {
    return await Course.findById(id);
  },

  findAllCoursesOfUser: async (instructorId: string) => {
    console.log(instructorId);
    return await Course.find({ instructorId: instructorId });
  },
  findAllCourses: async () => {
    return Course.find();
  },
  findCourseContents: async (courseId: string) => {
    return Course.findById(courseId).populate("courseContent");
  },
};
export { CourseController };
