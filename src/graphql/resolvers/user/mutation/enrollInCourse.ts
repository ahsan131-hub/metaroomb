import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import { UserController } from "../../../../db/users/user.controller";
const enrollInCourse = async (
  parents: any,
  { studentId, courseId }: any,
  { user }: any
) => {
  try {
    if (!user) throw new Error("Unauthorized");
    if (user.data.email !== studentId) throw new Error("Unauthorized");
    await EnrollmentController.enroll(studentId, courseId);
    console.log("Course enrolled succsfully");
    return {
      status: 200,
      message: "Course Enrolled succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: error.message,
    };
  }
};

export default enrollInCourse;
