import userMutation from "./user/mutation";
import userQuery from "./user/queries";
import courseMutations from "./course/mutation/index";
import courseQuries from "./course/queries";
import enrollmentQuries from "./enrollment/queries";
import enrollmentMutations from "./enrollment/mutation";
import contentMutations from "./content/mutation";
import contentQuries from "./content/queries";
import SubmissionMutations from "./submission/mutation";
import SubmissionQuries from "./submission/queries";
import QuizQueries from "./quiz/queries";
import QuizMutations from "./quiz/mutations";

const resolvers = {
  Mutation: {
    ...userMutation,
    ...courseMutations,
    ...enrollmentMutations,
    ...contentMutations,
    ...SubmissionMutations,
    ...QuizMutations,
  },
  Query: {
    ...userQuery,
    ...courseQuries,
    ...enrollmentQuries,
    ...contentQuries,
    ...SubmissionQuries,
    ...QuizQueries
  },
};
export default resolvers;
