import { CourseController } from "../../../../db/courses/course.controller";
import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import Enrollment from "../../../../db/enrollments/enrollment.model";
import { UserController } from "../../../../db/users/user.controller";

const getEnrolledCourses = async (parents: any, {}, { user }: any) => {
  try {
    if (!user.data) throw new Error("Unauthorized");

    const existUser = await UserController.findUserByEmail(user.data.email);
    const courses = await EnrollmentController.findEnrollmentByStudentId(
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
      courses: [],
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default getEnrolledCourses;
