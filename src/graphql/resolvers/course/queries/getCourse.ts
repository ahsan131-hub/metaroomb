import { CourseController } from "../../../../db/courses/course.controller";

const getCourse = async (parents: any, { id }: { id: string }, {}) => {
  try {
    const course = await CourseController.findCourseById(id);
    return {
      course: course,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      Course: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getCourse;
