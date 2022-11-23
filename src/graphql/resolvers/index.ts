import userMutation from "./user/mutation";
import userQuery from "./user/queries";

const resolvers = {
  Mutation: {
    ...userMutation,
  },
  Query: {
    ...userQuery,
  },
};
export default resolvers;
