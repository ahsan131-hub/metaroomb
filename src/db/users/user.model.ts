import { Schema, model, Model } from "mongoose";
import { IUserMethods, IUser_d, UserModel } from "./user.types";
import bcrypt from "bcrypt";

export enum VERIFICATION_STATUS {
  NOT_UPLOADED = "NOT_UPLOADED",
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  REJECTED = "REJECTED",
}
export enum ROLES {
  INSTRUCTOR = "INSTRUCTOR",
  STUDENT = "STUDENT",
}

const schema = new Schema<IUser_d, UserModel, IUserMethods>(
  {
    fName: String,
    lName: String,
    userName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    phone: { type: String, unique: true },
    gender: String,
    dateOfBirth: String,
    isEmailVerified: { type: Boolean, default: false },
    timezone: String,
    isPhoneVerified: { type: Boolean, default: false },
    registrationCompleted: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    role: {
      type: String,
      enum: [ROLES.INSTRUCTOR, ROLES.STUDENT],
      default: ROLES.STUDENT,
    },
  },
  { timestamps: true, strict: true }
);

// schema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// schema.methods.isValidPassword = async function (password: string) {
//   const encryptedPass = (
//     await User.findOne({ email: this.email }).select("password")
//   )?.password as string;
//   const compare = bcrypt.compare(password, encryptedPass);
//   return compare;
// };
const User = model<IUser_d, UserModel>("User", schema);

export default User;
