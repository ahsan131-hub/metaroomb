import { Schema, model, Model } from "mongoose";
import { SubmissionModel, ISubmission_d } from "./submissions.types";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const schema = new Schema<ISubmission_d, SubmissionModel>(
  {
    instructorId: { type: mongoose.Types.ObjectId, ref: "User" },
    studentId: { type: mongoose.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Types.ObjectId, ref: "User" },
    contentId: { type: mongoose.Types.ObjectId, ref: "User" },
    quizId: { type: mongoose.Types.ObjectId, ref: "User" },
    submissionType: {
      type: String,
      enum: ["ASSIGNMENT", "QUIZ"],
      required: true,
    },
    submissionFiles: [
      {
        type: String,
        minlength: 1,
        maxlength: 1000,
      },
    ],
    score: {
      type: Number,
      min: 0,
    },
    checkedByInstructor: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      minlength: 0,
      maxlength: 1000,
      required: true,
    },
    quizQuestions: [
      {
        question: {
          type: String,
          minlength: 1,
          maxlength: 1000,
          required: true,
        },
        options: [
          {
            type: String,
            minlength: 1,
            maxlength: 1000,
            required: true,
          },
        ],
        correctAnswer: {
          type: String,
          minlength: 1,
          maxlength: 1000,
          required: true,
        },
        studentAnswer: {
          type: String,
          minlength: 0,
          maxlength: 1000,
          required: true,
        },
      },
    ],
  },
  { timestamps: true, strict: true }
);

const Submission = model<ISubmission_d, SubmissionModel>("Submission", schema);

export default Submission;
