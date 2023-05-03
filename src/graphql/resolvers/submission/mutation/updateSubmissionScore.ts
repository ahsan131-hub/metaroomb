import { randomUUID } from "crypto";
import { UserController } from "../../../../db/users/user.controller";

import { CourseController } from "../../../../db/courses/course.controller";
import { SubmissionController } from "../../../../db/submissions/submissions.controller";

const updateSubmissionScore = async (
  parents: any,
  { id, score }: any,
  { user }: any
) => {
  try {
    if (!user) throw new Error("Unauthorized");

    await SubmissionController.updateSubmissionScore(id, score);
    console.log("Submission updated succsfully");
    return {
      status: 200,
      message: "Submission updated succesfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "Submission updation failed!",
    };
  }
};

export default updateSubmissionScore;
