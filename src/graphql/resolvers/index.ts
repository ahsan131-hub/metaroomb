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

const resolvers = {
  Mutation: {
    ...userMutation,
    ...courseMutations,
    ...enrollmentMutations,
    ...contentMutations,
    ...SubmissionMutations,
  },
  Query: {
    ...userQuery,
    ...courseQuries,
    ...enrollmentQuries,
    ...contentQuries,
    ...SubmissionQuries,
  },
};
export default resolvers;
