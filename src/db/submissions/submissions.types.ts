import { Model, ObjectId } from "mongoose";

export interface ISubmission_d {
  studentId: ObjectId;
  description: string;
  submissionType: "ASSIGNMENT" | "QUIZ";
  instructorId: ObjectId;
  courseId: ObjectId;
  submissionId: ObjectId;
  quizId: ObjectId;
  submissionFiles: string;
  contentId: ObjectId;
  score: number;
  checkedByInstructor: boolean;
  quizQuestions: [IAnswerQuestion];
}
export interface IAnswerQuestion {
  question: string;
  options: [string];
  correctAnswer: string;
  studentAnswer: string;
}

export type SubmissionModel = Model<ISubmission_d>;
