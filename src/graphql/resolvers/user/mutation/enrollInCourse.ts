import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import { UserController } from "../../../../db/users/user.controller";
const enrollInCourse = async (
  parents: any,
  { studentEmail, courseId }: any,
  { user }: any
) => {
  try {
    if (user.data.email !== studentEmail) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);

    const exist = await EnrollmentController.alreadEnrolled(
      userData!._id.toString(),
      courseId
    );
    if (exist?._id) throw new Error("Already enrolled");
    await EnrollmentController.enroll(userData!._id.toString(), courseId);
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
