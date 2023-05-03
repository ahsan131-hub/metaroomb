import { SubmissionController } from "../../../../db/submissions/submissions.controller";

const getSubmissions = async (
  parents: any,
  { courseId }: any,
  context: any
) => {
  try {
    if (!context.user.data.email) throw new Error("Unauthorized");
    const Submissions = await SubmissionController.findAllSubmissionsOfCourse(
      courseId
    );
    return {
      submissions: Submissions,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      Submissions: null,
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default getSubmissions;
