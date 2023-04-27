import { CourseController } from "../../../../db/courses/course.controller";
import { UserController } from "../../../../db/users/user.controller";

const getCourses = async (parents: any, {}, context: any) => {
  try {
    console.log("this is ", context.user.data.email);
    if (!context.user.data.email) throw new Error("Unauthorized");
    const user = await UserController.findUserByEmail(context.user.data.email);
    const courses = await CourseController.findAllCoursesOfUser(
      user!._id.toString()
    );
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
      courses: null,
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default getCourses;
