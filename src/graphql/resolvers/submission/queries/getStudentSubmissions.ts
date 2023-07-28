
import { SubmissionController } from "../../../../db/submissions/submissions.controller";
import { UserController } from "../../../../db/users/user.controller";

const getStudentSubmissions = async (parents: any, { courseId }: { studentId: string, courseId: string }, {user}:{user:any}) => {
  try {
    // find by content id and return the submission
    console.log(courseId);
    if (!user) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);
    const stdId=userData!._id.toString() ;
    const submissions = await SubmissionController.findSubmissionsByStudentId(stdId,courseId);
    return {
      submissions,
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

export default getStudentSubmissions;
