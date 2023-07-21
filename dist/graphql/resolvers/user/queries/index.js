"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getStatistics_1 = __importDefault(require("./getStatistics"));
const getUserByEmail_1 = __importDefault(require("./getUserByEmail"));
const userQuery = {
    getUserByEmail: getUserByEmail_1.default,
    getStatistics: getStatistics_1.default,
};
exports.default = userQuery;
