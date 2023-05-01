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

    await connection(
      "mongodb+srv://metaroom55:metaroom786@cluster0.9uytw03.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database is connected successfully...");
  } catch (error: any) {
    console.log(error?.message);
  }
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      const token = req.headers.authorization as string;
      // console.log(token);
      const user = jwt.verify(token, process.env.JWT_SECRET as string);
      // console.log("user", user);
      return { user };
    },

    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
