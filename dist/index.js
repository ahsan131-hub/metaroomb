"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@apollo/server/standalone");
const server_1 = require("@apollo/server");
const dotenv_1 = __importDefault(require("dotenv"));
const graphql_import_files_1 = require("graphql-import-files");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const connection_1 = __importDefault(require("./db/connection"));
dotenv_1.default.config();
const server = new server_1.ApolloServer({
    typeDefs: (0, graphql_import_files_1.loadFiles)("**/typeDefs/*.{graphql,gql}"),
    resolvers: resolvers_1.default,
    nodeEnv: "development"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.default)("mongodb+srv://metaroom55:metaroom786@cluster0.9uytw03.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database is connected successfully...");
    }
    catch (error) {
        console.log(error === null || error === void 0 ? void 0 : error.message);
    }
    const { url } = yield (0, standalone_1.startStandaloneServer)(server, {
        context: ({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
            const token = req.headers.authorization;
            console.log(token);
            const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            console.log(token);
            // console.log("user", user);
            return { user };
        }),
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}))();
