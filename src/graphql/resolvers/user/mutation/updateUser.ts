import { UserController } from "../../../../db/users/user.controller";
const updateUser = async (parents: any, { user }: any, context: any) => {
  console.log(user);
  try {
    if (!user) {
      return {
        status: 404,
        message: "Not Authenticated!",
      };
    }
    if (
      !(
        user.fName ||
        user.lName ||
        user.timezone ||
        user.dateOfBirth ||
        user.gender ||
        user.phone ||
        user.role
      )
    ) {
      return {
        status: 404,
        message: "Invalid User Data!",
      };
    }
    if (user.userName) {
      const userNameExist = await UserController.findUserByUsername(
        user.userName
      );
      if (userNameExist) {
        return {
          status: 400,
          message: "user already exists with username.",
        };
      }
    }

    user.registrationCompleted = true;
    user.isEmailVerified = true;

    await UserController.updateUser(user, context.user.data.email);
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

export default updateUser;
