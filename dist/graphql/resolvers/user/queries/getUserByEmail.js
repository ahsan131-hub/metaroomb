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
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../../../../db/users/user.controller");
const getUserByEmail = (parents, { email }, { context }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(context);
        const user = yield user_controller_1.UserController.getUserByEmail(email);
        console.log(user);
        return {
            user: user,
            response: {
                status: 200,
                message: "Query successfully!",
            },
        };
    }
    catch (error) {
        return {
            user: null,
            response: {
                status: 404,
                message: "Query failed!",
            },
        };
    }
});
exports.default = getUserByEmail;
