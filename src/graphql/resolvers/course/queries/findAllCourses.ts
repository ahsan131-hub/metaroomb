import { CourseController } from "../../../../db/courses/course.controller";
import { UserController } from "../../../../db/users/user.controller";

const findAllCourses = async (parents: any, {}, {}: any) => {
  try {
    const courses = await CourseController.findAllCourses();
    return {
      courses: courses,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      courses: [],
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default findAllCourses;
