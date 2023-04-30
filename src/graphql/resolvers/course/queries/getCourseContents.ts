import { ContentController } from "../../../../db/contents/content.controller";
import { CourseController } from "../../../../db/courses/course.controller";
import { UserController } from "../../../../db/users/user.controller";

const getCourseContents = async (
  parents: any,
  { courseId }: any,
  { user }: any
) => {
  try {
    if (!user.data.email) throw new Error("Unauthorized");
    const course = await CourseController.findCourseContents(courseId);
    console.log(course);
    return {
      contents: course?.courseContent,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      Contents: null,
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default getCourseContents;
