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
const resolvers = {
    Mutation: Object.assign(Object.assign(Object.assign({}, mutation_1.default), index_1.default), mutation_2.default),
    Query: Object.assign(Object.assign(Object.assign({}, queries_1.default), queries_2.default), queries_3.default),
};
exports.default = resolvers;
