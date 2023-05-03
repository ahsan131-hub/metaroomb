import Submission from "./submissions.model";
import { ISubmission_d } from "./submissions.types";

const SubmissionController = {
  createSubmission: async (SubmissionData: any) => {
    return Submission.create({ ...SubmissionData });
  },
  removeSubmission: async (id: string) => {
    return Submission.deleteOne({ _id: id });
  },
  updateSubmission: (SubmissionData: any, id: string) => {
    return Submission.findByIdAndUpdate(
      id,
      {
        $set: { ...SubmissionData },
      },
      { new: true }
    );
  },
  updateSubmissionScore: (id: string, score: number) => {
    return Submission.findByIdAndUpdate(
      id,
      {
        $set: { score: score, checkedByInstructor: true },
      },
      { new: true }
    );
  },

  findSubmissionById: async (id: string) => {
    return await Submission.findById(id);
  },

  findAllSubmissionsOfCourse: async (courseId: string) => {
    return await Submission.find({ courseId: courseId });
  },
  findAllSubmissions: async () => {
    return Submission.find();
  },
};
export { SubmissionController };
