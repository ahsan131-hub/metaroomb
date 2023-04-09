import { Model, ObjectId } from "mongoose";

export interface ICourse_d {
  name: string;
  durationOfCourse: number;
  courseContent: [string];
  sessionTime: string;
  sessionMeetingId: string;
  teacherId: ObjectId;
  studentsEnrolled: [ObjectId];
  courseEndDate: string;
  quizes: [string];
  ratings: number;

  subject: string;
  studentLimit: number;
  about: string;
  coverPhoto: string;
  courseOutline: string;
}

export type CourseModel = Model<ICourse_d>;
