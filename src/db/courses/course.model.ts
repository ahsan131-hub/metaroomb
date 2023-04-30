import { Schema, model, Model, Mongoose } from "mongoose";
import { CourseModel, ICourse_d } from "./course.types";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const schema = new Schema<ICourse_d, CourseModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing whitespaces
      minlength: 3,
      maxlength: 50,
    },
    durationOfCourse: Number,
    // courseContent: [{ type: ObjectId, ref: "Content" }],
    courseContent: [{ type: mongoose.Types.ObjectId, ref: "Content" }],
    sessionTime: String,
    sessionMeetingId: String,
    instructorId: { type: mongoose.Types.ObjectId, ref: "User" },
    studentsEnrolled: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    courseEndDate: String,
    // quizes: [{ type: ObjectId, ref: "Quiz" }],
    quizes: [{ type: String }],
    subject: String,
    studentLimit: Number,
    about: String,
    coverPhoto: String,
    courseOutline: String,
  },
  { timestamps: true, strict: true }
);

const Course = model<ICourse_d, CourseModel>("Course", schema);

export default Course;
