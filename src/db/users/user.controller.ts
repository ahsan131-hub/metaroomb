import User, { ROLES, VERIFICATION_STATUS } from "./user.model";
import { IUser_d } from "./user.types";

const UserController = {
  createUser: async (userData: any) => {
    return User.create({ ...userData });
  },
  removeUser: async (email: string) => {
    return User.deleteOne({ email });
  },
  updateUser: (userData: any, email: string) => {
    return User.findOneAndUpdate(
      { email: email },
      {
        $set: { ...userData },
      },
      { new: true }
    );
  },
  updateOtpVerify: (email: string) => {
    return User.findOneAndUpdate(
      { email: email },
      {
        isEmailVerified: true,
      },
      { new: true }
    );
  },
  updatePhoneInfo: (userData: any, email: string) => {
    return User.findOneAndUpdate(
      { email: email },
      {
        ...userData,
      },
      { new: true }
    );
  },
  getUserByEmail: async (email: string) => {
    return User.findOne({ email });
  },
  getUserWithIdByEmail: async (email: string) => {
    return await User.findOne({ email });
  },
  findUserById: async (id: string) => {
    return await User.findById(id);
  },
  exists: async (id: string) => {
    return User.exists({ _id: id });
  },
  getAllUsers: async () => {
    return User.find({}, [
      "fName",
      "lName",
      "email",
      "phone",
      "dateOfBirth",
      "timezone",
    ]);
  },
  findUserByUsername: (userName: string) => {
    return User.findOne({ userName });
  },
  findUserByEmail: (email: string) => {
    return User.findOne({ email });
  },
  countUsers: () => {
    return User.count();
  },
  countInstructors: () => {
    return User.count({ role: ROLES.INSTRUCTOR });
  },
  countStudents: () => {
    return User.count({ role: ROLES.STUDENT });
  },
};
export { UserController };
