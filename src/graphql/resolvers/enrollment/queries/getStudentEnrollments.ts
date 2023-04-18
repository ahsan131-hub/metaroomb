import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";

const getStudentEnrollments = async (
  parents: any,
  { studentId }: { studentId: string },
  {}
) => {
  try {
    const enrollments = await EnrollmentController.findEnrollmentByStudentId(
      studentId
    );
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
