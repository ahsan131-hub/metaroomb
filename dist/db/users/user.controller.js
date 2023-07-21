"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserController = void 0;
const user_model_1 = __importStar(require("./user.model"));
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
    exists: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return user_model_1.default.exists({ _id: id });
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
    countUsers: () => {
        return user_model_1.default.count();
    },
    countInstructors: () => {
        return user_model_1.default.count({ role: user_model_1.ROLES.INSTRUCTOR });
    },
    countStudents: () => {
        return user_model_1.default.count({ role: user_model_1.ROLES.STUDENT });
    },
};
exports.UserController = UserController;
