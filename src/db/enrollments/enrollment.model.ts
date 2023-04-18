import { Schema, model, Model } from "mongoose";
import { EnrollmentModel, IEnrollment_d } from "./enrollment.types";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const schema = new Schema<IEnrollment_d, EnrollmentModel>(
  {
    studentId: { type: mongoose.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Types.ObjectId, ref: "Course" },
    attendence: [{ type: String }],
    QuizsSubmitted: [{ type: String }],
    assignmentsSubmitted: [{ type: String }],
  },
  { timestamps: true, strict: true }
);

const Enrollment = model<IEnrollment_d, EnrollmentModel>("Enrollment", schema);

export default Enrollment;
