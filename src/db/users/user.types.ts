import { Model } from "mongoose";

export interface IUser_d {
  fName: string;
  lName: string;
  email: string;
  password: string;
  phone: string;
  userName: string;
  dateOfBirth: string;
  timezone: string;
  gender: string;
  role: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  rating: number;
  registrationCompleted: boolean;
}

export interface IUserMethods {
  isValidPassword: (password: string) => Promise<boolean>;
}
export type UserModel = Model<IUser_d, {}, IUserMethods>;
