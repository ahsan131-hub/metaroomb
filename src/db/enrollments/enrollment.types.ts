import { Model, ObjectId } from "mongoose";

export interface IEnrollment_d {
  studentId: ObjectId;
  courseId: ObjectId;
  // attendence: [{ meetingId: ObjectId; meetingDate: string }];
  attendence: Array<String>;
  QuizsSubmitted: Array<String>;
  assignmentsSubmitted: Array<String>;
}

export type EnrollmentModel = Model<IEnrollment_d>;
