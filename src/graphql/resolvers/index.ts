import userMutation from "./user/mutation";
import userQuery from "./user/queries";
import courseMutations from "./course/mutation/index";
import courseQuries from "./course/queries";
import enrollmentQuries from "./enrollment/queries";
import enrollmentMutations from "./enrollment/mutation";
import contentMutations from "./content/mutation";
import contentQuries from "./content/queries";

const resolvers = {
  Mutation: {
    ...userMutation,
    ...courseMutations,
    ...enrollmentMutations,
    ...contentMutations,
  },
  Query: {
    ...userQuery,
    ...courseQuries,
    ...enrollmentQuries,
    ...contentQuries,
  },
};
export default resolvers;
