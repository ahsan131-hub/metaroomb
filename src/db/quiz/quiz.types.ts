import { Document, Model, Schema, model } from 'mongoose';

interface IQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface IQuizBase {
  courseId: string;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  questions: IQuizQuestion[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IQuizDocument extends IQuizBase, Document {}

export interface IQuizModel extends Model<IQuizDocument> {}
