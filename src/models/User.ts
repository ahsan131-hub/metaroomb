import { Model, Schema, model, Document } from "mongoose";

export interface IUser_d extends Document {
  fName: string;
  lName: string;
  email: string;
}

interface IUserModel extends Model<IUser_d> {}

const schema = new Schema<IUser_d>(
  {
    fName: { type: String, index: true, required: true },
    lName: { type: String, index: true, required: true },
    email: { type: String, index: true, required: true, unique: true },
  },
  { timestamps: true }
);

const User: IUserModel = model<IUser_d, IUserModel>("User", schema);

export default User;
