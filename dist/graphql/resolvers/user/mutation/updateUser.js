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
const updateUser = (parents, { user }, context) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(user);
    try {
        if (!user) {
            return {
                status: 404,
                message: "Not Authenticated!",
            };
        }
        if (!(user.fName ||
            user.lName ||
            user.timezone ||
            user.dateOfBirth ||
            user.gender ||
            user.phone ||
            user.role)) {
            return {
                status: 404,
                message: "Invalid User Data!",
            };
        }
        if (user.userName) {
            const userNameExist = yield user_controller_1.UserController.findUserByUsername(user.userName);
            if (userNameExist) {
                return {
                    status: 400,
                    message: "user already exists with username.",
                };
            }
        }
        user.registrationCompleted = true;
        user.isEmailVerified = true;
        yield user_controller_1.UserController.updateUser(user, context.user.data.email);
        console.log("user created succsfully");
        return {
            status: 200,
            message: "User Updated succesfully!",
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            status: 404,
            message: "User creation failed!",
        };
    }
    console.log("user create resolver");
});
exports.default = updateUser;
