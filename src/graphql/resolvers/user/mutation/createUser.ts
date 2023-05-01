import { UserController } from "../../../../db/users/user.controller";
const createUser = async (parents: any, { user }: any, {}) => {
  console.log(user);
  try {
    const exists = await UserController.findUserByEmail(user.email);
    if (exists)
      return {
        status: 200,
        message: "User already exists!",
      };
    await UserController.createUser(user);
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
