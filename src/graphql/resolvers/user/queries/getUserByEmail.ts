import userController from "../../../../controllers/user.controller";

const getUserByEmail = async (
  parents: any,
  { email }: { email: string },
  {}
) => {
  try {
    const user = await userController.getUserByEmail(email);
    console.log(user);
    return {
      user: { fName: user?.fName, lName: user?.lName, email: user?.email },
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
