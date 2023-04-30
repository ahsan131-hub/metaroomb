import { Model, ObjectId } from "mongoose";

export interface IContent_d {
  name: string;
  deadline: string;
  description: string;
  contentFiles: [string];
  instructorId: ObjectId;
  contentType: "ASSIGNMENT" | "CONTENT";
  contentSubmissions: [string];
}

export type ContentModel = Model<IContent_d>;
