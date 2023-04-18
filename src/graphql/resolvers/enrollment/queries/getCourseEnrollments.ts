import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";

const getCourseEnrollments = async (
  parents: any,
  { courseId }: { courseId: string },
  {}
) => {
  try {
    const enrollments = await EnrollmentController.findAllByCourseId(courseId);
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

export default getCourseEnrollments;
