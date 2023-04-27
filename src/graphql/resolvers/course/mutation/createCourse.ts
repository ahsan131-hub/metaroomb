import { CourseController } from "../../../../db/courses/course.controller";
import { UserController } from "../../../../db/users/user.controller";

const createCourse = async (parents: any, { course }: any, { user }: any) => {
  try {
    if (!user.data.email) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);
    course.instructorId = userData!._id;
    await CourseController.createCourse(course);
    console.log("Course created succsfully");
    return {
      status: 200,
      message: "Course created succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "Course creation failed!",
    };
  }
};

export default createCourse;
