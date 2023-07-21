import { randomUUID } from "crypto";
import { UserController } from "../../../../db/users/user.controller";

import { CourseController } from "../../../../db/courses/course.controller";
import { SubmissionController } from "../../../../db/submissions/submissions.controller";

const createSubmission = async (
  parents: any,
  { submission }: any,
  { user }: any
) => {
  try {
    if (!user) throw new Error("Unauthorized");
    if (!user.data.email) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);
    submission.studentId = userData!._id;
    await SubmissionController.createSubmission(submission);
    console.log("Submission created succsfully");
    return {
      status: 200,
      message: "Submission created succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "Submission creation failed!",
    };
  }
};

export default createSubmission;
