import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";

const getCourseEnrollments = async (
  parents: any,
  { courseId }: { courseId: string },
  {}
) => {
  try {
    console.log(courseId);
    if (!courseId) {
      throw new Error("CourseId is required!");
    }
    console.log(courseId);
    const enrollments = await EnrollmentController.findAllByCourseId(courseId);

    console.log(enrollments);
    return {
      enrollments: enrollments,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error: any) {
    return {
      Enrollment: null,
      response: {
        status: 404,
        message: error.message,
      },
    };
  }
};

export default getCourseEnrollments;
