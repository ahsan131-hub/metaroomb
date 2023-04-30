import { randomUUID } from "crypto";
import { UserController } from "../../../../db/users/user.controller";
import { ContentController } from "../../../../db/contents/content.controller";
import { CourseController } from "../../../../db/courses/course.controller";

const createContent = async (
  parents: any,
  { content, instructorId, courseId }: any,
  { user }: any
) => {
  try {
    if (!user) throw new Error("Unauthorized");
    const userData = await UserController.exists(instructorId);
    if (!userData) throw new Error("Unauthorized");
    content.instructorId = instructorId;

    const contentId = (await ContentController.createContent(content)).id;
    console.log(contentId);
    const course = await CourseController.addContentToCourse(
      courseId,
      contentId
    );
    console.log("Content created succsfully");
    return {
      status: 200,
      message: "Content created succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "Content creation failed!",
    };
  }
};

export default createContent;
