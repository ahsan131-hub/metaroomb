import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import { UserController } from "../../../../db/users/user.controller";

const getStudentEnrollments = async (
  parents: any,
  { studentId }: { studentId: string },
  { user }: any
) => {
  try {
    if (!user.data) throw new Error("Unauthorized");

    const existUser = await UserController.findUserByEmail(user.data.email);
    const enrollments = await EnrollmentController.findEnrollmentByStudentId(
      existUser?.id.toString()
    );
    console.log(enrollments);
    return {
      enrollments: enrollments,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      Enrollment: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getStudentEnrollments;
