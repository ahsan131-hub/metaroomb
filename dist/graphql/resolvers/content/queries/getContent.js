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
const content_controller_1 = require("../../../../db/contents/content.controller");
const getContent = (parents, { id }, {}) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const content = yield content_controller_1.ContentController.findContentById(id);
        return {
            content: content,
            response: {
                status: 200,
                message: "Query successfully!",
            },
        };
    }
    catch (error) {
        return {
            Course: null,
            response: {
                status: 404,
                message: "Query failed!",
            },
        };
    }
});
exports.default = getContent;
