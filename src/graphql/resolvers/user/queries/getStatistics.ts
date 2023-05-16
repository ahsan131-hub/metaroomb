import { CourseController } from "../../../../db/courses/course.controller";
import { EnrollmentController } from "../../../../db/enrollments/enrollment.controller";
import { UserController } from "../../../../db/users/user.controller";
import { ROLES } from "../../../../db/users/user.model";

const getStatistics = async (
  parents: any,
  { email }: { email: string },
  { context }: any
) => {
  try {
    console.log("get stats", context);
    const user = await UserController.getUserByEmail(email);
    // console.log(user?.role);
    // if (user?.role !== ROLES.ADMIN) {
    //   return {
    //     user: null,
    //     response: {
    //       status: 404,
    //       message: "Query failed!",
    //     },
    //   };
    // }
    const totalUsers = await UserController.countUsers();
    const totalInstructors = await UserController.countInstructors();
    const totalStudents = await UserController.countStudents();
    const totalCourses = await CourseController.countCourses();
    const totalEnrollments = await EnrollmentController.countEnrollments();
    const totalRevenue = "90,000";

    return {
      statistics: {
        totalUsers,
        totalInstructors,
        totalStudents,
        totalCourses,
        totalEnrollments,
        totalRevenue,
      },
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      user: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getStatistics;
