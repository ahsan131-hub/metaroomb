import userMutation from "./user/mutation";
import userQuery from "./user/queries";
import courseMutations from "./course/mutation/index";
import courseQuries from "./course/queries";

const resolvers = {
  Mutation: {
    ...userMutation,
    ...courseMutations,
  },
  Query: {
    ...userQuery,
    ...courseQuries,
  },
};
export default resolvers;
