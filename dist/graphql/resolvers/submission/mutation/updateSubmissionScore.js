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
const submissions_controller_1 = require("../../../../db/submissions/submissions.controller");
const updateSubmissionScore = (parents, { id, score }, { user }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user)
            throw new Error("Unauthorized");
        yield submissions_controller_1.SubmissionController.updateSubmissionScore(id, score);
        console.log("Submission updated succsfully");
        return {
            status: 200,
            message: "Submission updated succesfully!",
        };
    }
    catch (error) {
        console.log(error.message);
        return {
            status: 404,
            message: "Submission updation failed!",
        };
    }
});
exports.default = updateSubmissionScore;
