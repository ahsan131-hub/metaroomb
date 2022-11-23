import User from "../models/User";
import { IUser } from "../Types";

const userController = {
  createUser: async (userData: IUser) => {
    // TODO: to remove
    console.log("create user", userData);
    const user = new User({ ...userData });
    return user.save();
  },
  getUserByEmail: async (email: string) => {
    // TODO: to remove
    console.log("find user by email,", email);
    return User.findOne({ email });
  },
};
export default userController;
