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
  ADMIN = "ADMIN",
}

const schema = new Schema<IUser_d, UserModel, IUserMethods>(
  {
    fName: {
      type: String,

      trim: true, // Removes leading/trailing whitespaces
      minlength: 3,
      maxlength: 50,
    },
    lName: {
      type: String,

      trim: true, // Removes leading/trailing whitespaces
      minlength: 3,
      maxlength: 50,
    },

    userName: {
      type: String,
      // required: true,
      trim: true, // Removes leading/trailing whitespaces
      minlength: 3,
      maxlength: 50,
    },
    image: {
      type: String,
      default: "",
    },
    email: {
      required: true,
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (email: string) => {
          // Validate email format using regular expression
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email format",
      },
    },
    password: { type: String, select: false },
    phone: { type: String },
    gender: String,
    dateOfBirth: String,
    isEmailVerified: { type: Boolean, default: false },
    timezone: String,
    isPhoneVerified: { type: Boolean, default: false },
    registrationCompleted: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    role: {
      type: String,
      enum: [ROLES.INSTRUCTOR, ROLES.STUDENT, ROLES.ADMIN],
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
