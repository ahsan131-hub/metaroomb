import { ContentController } from "../../../../db/contents/content.controller";
import { UserController } from "../../../../db/users/user.controller";

const getContents = async (parents: any, { userId }: any, context: any) => {
  try {
    if (!context.user.data.email) throw new Error("Unauthorized");
    const Contents = await ContentController.findAllContentsOfUser(userId);
    return {
      Contents: Contents,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      Contents: null,
      response: {
        status: 404,
        message: "Error: " + error.message + "!",
      },
    };
  }
};

export default getContents;
