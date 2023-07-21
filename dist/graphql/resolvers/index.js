"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mutation_1 = __importDefault(require("./user/mutation"));
const queries_1 = __importDefault(require("./user/queries"));
const index_1 = __importDefault(require("./course/mutation/index"));
const queries_2 = __importDefault(require("./course/queries"));
const queries_3 = __importDefault(require("./enrollment/queries"));
const mutation_2 = __importDefault(require("./enrollment/mutation"));
const mutation_3 = __importDefault(require("./content/mutation"));
const queries_4 = __importDefault(require("./content/queries"));
const mutation_4 = __importDefault(require("./submission/mutation"));
const queries_5 = __importDefault(require("./submission/queries"));
const resolvers = {
    Mutation: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mutation_1.default), index_1.default), mutation_2.default), mutation_3.default), mutation_4.default),
    Query: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, queries_1.default), queries_2.default), queries_3.default), queries_4.default), queries_5.default),
};
exports.default = resolvers;
