import { CourseController } from "../../../../db/courses/course.controller";
import { SubmissionController } from "../../../../db/submissions/submissions.controller";
import { UserController } from "../../../../db/users/user.controller";

const getSubmissionByContentId = async (parents: any, { contentId }: { contentId: string }, {user}:any) => {
  try {
    if (!user) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);
    const submission = await SubmissionController.findSubmissionByContentId(contentId,userData!._id.toString());
    return {
      submission,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      Course: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getSubmissionByContentId;
