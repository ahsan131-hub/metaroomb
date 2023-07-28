import { QuizController } from "../../../../db/quiz/quiz.controller";
const getQuizesByCourseId = async (parents: any, { courseId }: {  courseId: string }, {}) => {
  try {
    // find by content id and return the submission
    console.log(courseId);

    const quizes = await QuizController.findAllQuizsOfCourse(courseId);
    return {
      quizes,
      response: {
        status: 200,
        message: "Query successfully!",
      },
    };
  } catch (error) {
    return {
      Course: null,
      response: {
        status: 404,
        message: "Query failed!",
      },
    };
  }
};

export default getQuizesByCourseId;
