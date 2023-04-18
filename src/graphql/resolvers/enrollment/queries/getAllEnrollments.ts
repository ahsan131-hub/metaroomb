import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";

const getAllEnrollments = async (parents: any, {}, {}) => {
  try {
    const enrollments = await EnrollmentController.findAllEnrollments();
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

export default getAllEnrollments;
