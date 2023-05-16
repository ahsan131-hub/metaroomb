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
exports.UserController = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const UserController = {
    createUser: (userData) => __awaiter(void 0, void 0, void 0, function* () {
        return user_model_1.default.create(Object.assign({}, userData));
    }),
    removeUser: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return user_model_1.default.deleteOne({ email });
    }),
    updateUser: (userData, email) => {
        return user_model_1.default.findOneAndUpdate({ email: email }, {
            $set: Object.assign({}, userData),
        }, { new: true });
    },
    updateOtpVerify: (email) => {
        return user_model_1.default.findOneAndUpdate({ email: email }, {
            isEmailVerified: true,
        }, { new: true });
    },
    updatePhoneInfo: (userData, email) => {
        return user_model_1.default.findOneAndUpdate({ email: email }, Object.assign({}, userData), { new: true });
    },
    getUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return user_model_1.default.findOne({ email });
    }),
    getUserWithIdByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_model_1.default.findOne({ email });
    }),
    findUserById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_model_1.default.findById(id);
    }),
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        return user_model_1.default.find({}, [
            "fName",
            "lName",
            "email",
            "phone",
            "dateOfBirth",
            "timezone",
        ]);
    }),
    findUserByUsername: (userName) => {
        return user_model_1.default.findOne({ userName });
    },
    findUserByEmail: (email) => {
        return user_model_1.default.findOne({ email });
    },
};
exports.UserController = UserController;
