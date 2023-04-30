import { CourseController } from "../../../../db/courses/course.controller";
import { UserController } from "../../../../db/users/user.controller";

const getCourses = async (parents: any, {}, { user }: any) => {
  try {
    if (!user) throw new Error("Unauthorized");
    const existUser = await UserController.findUserByEmail(user.data.email);
    const courses = await CourseController.findAllCoursesOfUser(
      existUser!._id.toString()
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
