import userMutation from "./user/mutation";
import userQuery from "./user/queries";
import courseMutations from "./course/mutation/index";
import courseQuries from "./course/queries";
import enrollmentQuries from "./enrollment/queries";
import enrollmentMutations from "./enrollment/mutation";

const resolvers = {
  Mutation: {
    ...userMutation,
    ...courseMutations,
    ...enrollmentMutations,
  },
  Query: {
    ...userQuery,
    ...courseQuries,
    ...enrollmentQuries,
  },
};
export default resolvers;
