import { UserController } from "../../../../db/users/user.controller";

const getUserByEmail = async (
  parents: any,
  { email }: { email: string },
  {}
) => {
  try {
    const user = await UserController.getUserByEmail(email);
    console.log(user);
    return {
      user: user,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      user: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getUserByEmail;
