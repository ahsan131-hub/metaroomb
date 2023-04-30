import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import { loadFiles } from "graphql-import-files";
import resolvers from "./graphql/resolvers";
import jwt from "jsonwebtoken";
import connection from "./db/connection";
import { verifyAuthorizationToken } from "./utils";
dotenv.config();

const server = new ApolloServer({
  typeDefs: loadFiles("**/typeDefs/*.{graphql,gql}"),
  resolvers,
});

(async () => {
  try {
    console.log(process.env["MONGO_URL"]);

    await connection(process.env["MONGO_URL"] as string);
    console.log("Database is connected successfully...");
  } catch (error: any) {
    console.log(error?.message);
  }
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      if (!req.headers.authorization) return "Unauthorized";
      const token = req.headers.authorization as string;
      // console.log(token);
      const user = verifyAuthorizationToken(token);
      console.log(user);
      return { user };
    },

    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
