import { Schema, model, Model } from "mongoose";
import { CourseModel, ICourse_d } from "./course.types";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const schema = new Schema<ICourse_d, CourseModel>(
  {
    name: String,
    durationOfCourse: Number,
    // courseContent: [{ type: ObjectId, ref: "Content" }],
    courseContent: [{ type: String }],
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
