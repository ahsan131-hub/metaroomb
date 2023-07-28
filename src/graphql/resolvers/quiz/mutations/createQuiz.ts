import { randomUUID } from "crypto";
import { UserController } from "../../../../db/users/user.controller";


import { QuizController } from "../../../../db/quiz/quiz.controller";
import { ROLES } from "../../../../db/users/user.model";

const createQuiz = async (
  parents: any,
  { input }: any,
  { user }: any
) => {
  try {
    if (!user) throw new Error("Unauthorized");
    if (!user.data.email) throw new Error("Unauthorized");
    const userData = await UserController.findUserByEmail(user.data.email);
    if(userData?.role!==ROLES.INSTRUCTOR) throw new Error("Unauthorized");
    console.log(input )
    const quizcreated= await QuizController.createQuiz(input);
    console.log("Quiz created succsfully");
    return {
        quiz:quizcreated,
        response:{
            status: 200,
            message: "Quiz created succsfully!",
    }};
  } catch (error: any) {
    console.log(error.message);
    return {
        response: {
            status: 404,
            message: "Quiz creation failed!: "+error.message,
          }
    }
  }
};

export default createQuiz;
