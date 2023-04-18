import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import { UserController } from "../../../../db/users/user.controller";
const enrollInCourse = async (
  parents: any,
  { studentId, courseId }: any,
  {}
) => {
  try {
    // TODO: Verify that user is logged in and is not already enrolled.
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
      message: "Course Enrolled Failed!",
    };
  }
};

export default enrollInCourse;
