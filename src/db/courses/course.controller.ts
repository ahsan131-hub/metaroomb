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

  findCourseById: async (id: string) => {
    return await Course.findById(id);
  },
  findAllCourses: async () => {
    return Course.find();
  },
};
export { CourseController };
