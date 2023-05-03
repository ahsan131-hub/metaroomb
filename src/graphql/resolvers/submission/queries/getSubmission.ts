import { CourseController } from "../../../../db/courses/course.controller";
import { SubmissionController } from "../../../../db/submissions/submissions.controller";

const getSubmission = async (parents: any, { id }: { id: string }, {}) => {
  try {
    const Submission = await SubmissionController.findSubmissionById(id);
    return {
      Submission: Submission,
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

export default getSubmission;