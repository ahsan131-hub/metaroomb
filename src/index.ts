import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import { loadFiles } from "graphql-import-files";
import resolvers from "./graphql/resolvers";
import jwt from "jsonwebtoken";
import connection from "./db/connection";
dotenv.config();

const server = new ApolloServer({
  typeDefs: loadFiles("**/typeDefs/*.{graphql,gql}"),
  resolvers,
});

(async () => {
  try {
    await connection(
      (process.env["DB_URL"] as string) || "mongodb://mongo:27017/metaroom"
    );
    console.log("Database is connected successfully...");
  } catch (error: any) {
    console.log(error?.message);
  }
  const { url } = await startStandaloneServer(server, {
    // context: async ({ req, res }) => {
    //   const token = req.headers.authorization || "";
    //   console.log(token);
    //   const user = jwt.verify(
    //     token,
    //     process.env.JWT_SECRET || "OSrZC9Vrgoaknp4D0fLMU8ao8mZCz4Xw57GPzFz8Tk4="
    //   );
    //   console.log("user", user);
    //   return { ahsan: "ahsan is blah blah" };
    // },
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
