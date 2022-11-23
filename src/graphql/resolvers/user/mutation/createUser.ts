import { IUser } from "../../../../Types";
import userController from "../../../../controllers/user.controller";

const createUser = async (parents: any, { user }: { user: IUser }, {}) => {
  console.log(user);
  try {
    await userController.createUser(user);
    console.log("user created succsfully");
    return {
      status: 200,
      message: "User created succsfully!",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      status: 404,
      message: "User creation failed!",
    };
  }

  console.log("user create resolver");
};

export default createUser;
