import Quiz from "./quiz.model";

const QuizController = {
  createQuiz: async (QuizData: any) => {
    const quiz=new Quiz({...QuizData});
   return quiz.save();
  },
  removeQuiz: async (id: string) => {
    return Quiz.deleteOne({ _id: id });
  },
  updateQuiz: (QuizData: any, id: string) => {
    return Quiz.findByIdAndUpdate(
      id,
      {
        $set: { ...QuizData },
      },
      { new: true }
    );
  },
  updateQuizScore: (id: string, score: number) => {
    return Quiz.findByIdAndUpdate(
      id,
      {
        $set: { score: score, checkedByInstructor: true },
      },
      { new: true }
    );
  },

  findQuizById: async (id: string) => {
    return Quiz.findById(id).populate("studentId");
  },
  findQuizByContentId: async (contentId: string,userId:string) => {
    return Quiz.findOne({contentId,studentId:userId}).populate("studentId");
  },
  findQuizsByStudentId: async (studentId: string,courseId:string) => {
    return Quiz.find({ studentId: studentId ,courseId:courseId}).populate("studentId");
  },

  findAllQuizsOfCourse: async (courseId: string) => {
    return await Quiz.find({ courseId: courseId })
  },
  findAllQuizs: async () => {
    return Quiz.find();
  },
};
export { QuizController };
